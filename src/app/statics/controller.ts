import * as TWEEN from '@tweenjs/tween.js';
import { extend, shuffle } from 'lodash';
import { SPOT_INFORMATION } from './constants';
import { take } from 'rxjs';




/* BaseState class */
class BaseState {
  protected controller: any;
  constructor(controller: Controller) {
    this.controller = controller;
  }

  animate() { }
}

class ReadyState extends BaseState {
  tween: any;
  constructor(controller:Controller) {
    super(controller);
    const coords = {
      x: 3.55, y: 0, z: -328, ry: 0
    }; // Start at (3.55, 0, -328, 0)
    this.tween = new TWEEN.Tween(coords).to({
      x: 0, y: 0, z: -28, ry: Math.PI * -2
    }, 1600).onUpdate(function () {
      controller.earth.setCameraPosition(coords.x, coords.y, coords.z);
      controller.earth.rotateGlobe(coords.ry);
    }).onComplete(function () {
      controller.changeState('idle');
    }).start();
  }

  override animate() {
    TWEEN.update();
  }
}

class InteractionState extends BaseState {
  constructor(controller: Controller) {
    super(controller);
  }
  override animate() {
    if (this.controller.touchDown && this.controller.target) {
      this.controller.state.forward();
    } else {
      this.controller.state.backward();
    }
  }

  forward() {

  }

  backward() { }
}

/**
 * IdleState class
 *
 * Foward: go the next state, which is RotatingState
 * Backward: no backward
 */
class IdleState extends InteractionState {
  constructor(controller: Controller) {
    super(controller)
  }

  override forward() {
    this.controller.changeState('rotating');
  }
}

/**
 * RotatingState class
 *
 * Forward: if reaches the cameraFarPosition, then move to the next state, which is ZoomingState; otherwise, keep set camera till reaches the target
 * Backward: back to IdleState util the rotation completed
 */
class RotatingState extends InteractionState {
  tween: any
  constructor(controller: Controller) {
    super(controller)
    this.tween = null;
    controller.pauseSprite('audio');
  }

  override forward() {
    let that = this;
    let earth = this.controller.earth;
    let target = this.controller.target;

    const coords = earth.getCameraPosition();
    if (this.tween) {
      TWEEN.update()
    } else {
      this.tween = new TWEEN.Tween(coords).to({
        x: target.cameraFar[0],
        y: target.cameraFar[1],
        z: target.cameraFar[2]
      }, 1000).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        earth.setCameraPosition(coords.x, coords.y, coords.z);
      }).onComplete(function () {
        if (that.controller.touchDown && that.controller.target) {
          that.controller.changeState('zooming');
        }
        that.tween = null;
      }).start()
    }
  }

  override backward() {
    if (this.tween) {
      TWEEN.update();
    } else {
      this.controller.state = new IdleState(this.controller);
    }
  }
}

/**
 * ZoomingState class
 *
 * Forward: from current camera position to the camera near position of the target, once reach the position, go to the next state, which is DivingState
 * Backward: from current camera position to the camera far position of the target, once reach the position, go to the IdleState
 */
class ZoomingState extends InteractionState {
  private _direction: string;
  private _tween: any;
  constructor(controller: Controller) {
    super(controller)
    this._direction = '';
    this._tween = null
    // controller.hideCloud();
    // controller.showEarth();
  }

  _setDirection(direction: string) {
    let that = this;
    let earth = this.controller.earth;
    let target = this.controller.target;
    let from = earth.getCameraPosition();
    let to = null;
    let delay;

    if (this._direction !== direction) {
      if (direction === 'forward') {
        to = {
          x: target.cameraNear[0],
          y: target.cameraNear[1],
          z: target.cameraNear[2]
        };
        delay = 200;
      } else {
        to = {
          x: target.cameraFar[0],
          y: target.cameraFar[1],
          z: target.cameraFar[2]
        }
        delay = 0;
      }

      this._direction = direction;
      this._tween && this._tween.stop();

      this._tween = new TWEEN.Tween(from).delay(delay).to(to, 1000).onUpdate(function () {
      // this.tween = new TWEEN.Tween(from).to(to, 1000).onUpdate(function () {
        earth.setCameraPosition(from.x, from.y, from.z);
      }).onComplete(function () {
        that._handleTweenComplete();
      }).start()
    }
  }

  _handleTweenComplete() {
    if (this._direction === 'forward') {
      this.controller.changeState('diving');
    } else {
      this.controller.changeState('idle');
    }
    this._tween = null
  }

  override forward() {
    this._setDirection('forward');
    if (this._tween) {
      TWEEN.update()
    }
  }

  override backward() {
    this._setDirection('backward');
    if (this._tween) {
      TWEEN.update()
    }
  }
}

/**
 * DivingState class
 *
 * Forward: from current frame index to the end of frame index, once reach the end, go to the next state, which is PresentingState
 * Backward: from current frame index to the beginning of the frame index, once reach the beginning, go to the previous state, which is DivingState
 */
class DivingState extends InteractionState {
  private _direction: string = 'forward';
  constructor(controller: Controller) {
    super(controller)
    controller.hideVideo();
    this.controller.cloud.onAnimationEnd.pipe(take(1)).subscribe(() => {
      if(this._direction === 'forward') {
        this.controller.changeState('presenting');
      } else {
        this.controller.changeState('zooming');
      }
    });
  }

  _setDirection(direction: string): void {
    if (this._direction !== direction) {
      if (direction === 'forward') {
        this.controller.cloud.play();
      } else {
        this.controller.cloud.reverse();
      }

      this._direction = direction;
    }
  }

  override forward() {
    this._setDirection('forward');
  }

  override backward() {
    this._setDirection('backward');
  }
}

/**
 * PresentingState class
 *
 * Forward: no more forward actions
 * Backward: go to the previous state, which is DivingState
 */
class PresentingState extends InteractionState {
  constructor(controller: Controller) {
    super(controller)
    controller.showVideo();
  }

  override backward() {
    this.controller.changeState('diving');
  }
}

/* Controller class */
export default class Controller {
  earth: any;
  cloud: any;
  audioSprite: any;
  videoSprite: any;
  onStateChange: Function;
  touchDown: boolean;
  target: any;
  state: any;
  targetList: any[];
  onTargetChange: any;
  constructor(options: any) {
    this.earth = options.earth;
    this.cloud = options.cloud;
    this.audioSprite = options.audioSprite;
    this.videoSprite = options.videoSprite;
    this.onStateChange = options.onStateChange;
    this.onTargetChange = options.onTargetChange;

    this.state = null;
    this.touchDown = false;

    this.target = null;
    this.targetList = [];

    this._init();
  }

  _init() {
    setTimeout((_: any) => { this.state = new ReadyState(this) }, 10);
    this._shuffleTargetList();
    this._loop();
  }

  _shuffleTargetList() {
    this.targetList = shuffle(SPOT_INFORMATION.map(location => location.name))
  }

  _loop() {
    requestAnimationFrame(this._loop.bind(this))
    this._animate();
  }

  _animate() {
    if (!this.state) {
      return
    }

    this.state.animate();
  }

  showVideo() {
    this.playSprite('video');
  }

  hideVideo() {
    this.pauseSprite('video');
  }

  playSprite(type: string) {
    if (!this.target) {
      return
    }

    if (type === 'video') {
      this.videoSprite.playSpotVideo(this.target.videoTimeline[0], this.target.videoTimeline[1], this.target.captionImgName);
    } else if (type === 'audio') {
      // this.audioSprite.play(this.target.name)
      const that = this;
      this.audioSprite.playSpotMusic(this.target.audioTimeline[0], this.target.audioTimeline[1], () => {
        that.nextTarget();
      });
    }
  }

  pauseSprite(type: string) {
    if (type === 'video') {
      this.videoSprite.pauseSpotVideo();
    } else if (type === 'audio') {
      this.audioSprite.pauseBgMusic();
      this.audioSprite.pauseSpotMusic();
    }
  }

  start() {
    this.touchDown = true;
  }

  end() {
    this.touchDown = false;
  }

  nextTarget() {
    let nextTargetIndex = (this.targetList.indexOf(this.target ? this.target.name : null) + 1) % this.targetList.length
    this.setTarget(this.targetList[nextTargetIndex])
  }

  setTarget(locationName: string) {
    this.target = SPOT_INFORMATION.filter(location => location.name === locationName)[0]
    this.playSprite('audio');
    // this.videoSprite.set(locationName)
    this.onTargetChange && this.onTargetChange();
  }

  changeState(stateName: string) {
    switch (stateName) {
      case 'idle':
        this.state = new IdleState(this);
        break
      case 'rotating':
        this.state = new RotatingState(this);
        break
      case 'zooming':
        this.state = new ZoomingState(this);
        break
      case 'diving':
        this.state = new DivingState(this);
        break
      case 'presenting':
        this.state = new PresentingState(this);
        break
      default:
        this.state = new BaseState(this);
    }
    this.onStateChange && this.onStateChange(stateName);
  }
}
