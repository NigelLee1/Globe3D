import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EarthComponent } from './earth/earth.component';
import Controller from '../statics/controller';
import { CloudComponent } from './cloud/cloud.component';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { BoxComponent } from './box/box.component';
import { NgIf } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { VideoComponent } from './video/video.component';
import { PressComponent } from './press/press.component';
import { MusicComponent } from './music/music.component';


const components = [
  EarthComponent,
  CloudComponent,
  BoxComponent,
  BannerComponent,
  VideoComponent,
  PressComponent,
  MusicComponent];

const directives = [NgIf];

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [...components, ...directives],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [ // using status here for transition
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CoreComponent implements AfterViewInit {
  private _controller!: Controller;

  showCover = false;
  showCoord = false;
  showPressButton = false;
  showBackTip = false;
  coordIndex = -1;
  showEarth = true;
  showCloudLayer = false;
  showVideoLayer = false;
  showBannerLayer = false;

  @ViewChild('earth', { static: true })
  earthComponent!: EarthComponent

  @ViewChild('cloudSprite', { static: true })
  CloudComponent!: CloudComponent

  @ViewChild('videoPlay', { static: true })
  videoComponent!: VideoComponent

  @ViewChild('music', { static: true })
  musicComponent!: MusicComponent

  ngAfterViewInit(): void {
    this.addDocumentTouchMove();
    this.createController();
  }

  addDocumentTouchMove() {
    // passive: fasle solves the
    // problem "Unable to preventDefault inside passive event listener due to target being treated as passive"
    // {once : true} ensure the event listener only fires once only
    document.documentElement.addEventListener('touchend', this.handleDocumentTouchMove.bind(this),
     { passive: false, once : true });
  }

  handleDocumentTouchMove() {
    this.musicComponent.playBgMusic();
    this.showPressButton = true;
    if(!this._controller.target) {
      setTimeout(() => this._controller.nextTarget(), 100);
    }
  }

  handleHold() {
    this._controller.start();
  }

  handleRelease() {
    this._controller.end();
  }

  handleKnowMore() {
    this.showBannerLayer = true;
    this.showPressButton = false;
    this.showCover = false;
    this.musicComponent.pauseSpotMusic();
  }

  handleBack() {
    this.showBannerLayer = false;
    this.showPressButton = true;
    this.showCover = true;
    this._controller.nextTarget();
  }

  createController(): void {
    let that = this;
    let earth = this.earthComponent.earth;
    // let videoSprite = this.videoPlayComponent.videoSprite;
    let controller = new Controller({
      earth: earth,
      cloud: this.CloudComponent,
      videoSprite: this.videoComponent,
      audioSprite: this.musicComponent,
      onTargetChange() {
        that.showCoord = false;
      },
      onStateChange(stateName: string) {
        if (['idle', 'rotating'].includes(stateName)) {
          that.showCover = true;
        }

        if (stateName === 'zooming') {
          that.showCoord = true;
          that.coordIndex = controller.target.coordSpriteIndex;
        }

        if(['idle','zooming', 'rotating'].includes(stateName)) {
          that.showEarth = true;
        } else {
          that.showEarth = false;
        }

        if (stateName === 'presenting') {
          that.showVideoLayer = true;
          that.showBackTip = true;
        } else {
          that.showVideoLayer = false;
          that.showBackTip = false;
        }
        if (stateName === 'diving') {
          that.showCloudLayer = true;
        } else {
          that.showCloudLayer = false;
        }

      }
    })
    this._controller = controller;
  }
}
