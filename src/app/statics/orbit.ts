import { ORBIT_PARAMETERS } from '../statics/constants';

class Motion {
  private _ctx: any;
  private _speed: number;
  private _radiusX: number;
  private _radiusY: number;
  private _revise: number;
  private _color = '#fff';
  private _angle = 0;
  private _rotation = 0;
  private _scaleX = 1;
  private _scaleY = 1;
  private _x = 0;
  private _y = 0;
  private _radius = 5;
  private _centerX: number;
  private _centerY: number;
  constructor(ctx: any, speed: number, width: number, height: number,
    radiusX: number, radiusY: number, revise: number) {
    this._ctx = ctx;
    this._speed = speed || 0.001;
    this._radiusX = radiusX || 0;
    this._radiusY = radiusY || 0;
    this._revise = revise || 0;
    this._centerX = width / 2;
    this._centerY = height / 2;
  }
  private _draw(): void {
    this._ctx.save();
    this._ctx.translate(this._x, this._y - this._revise);
    this._ctx.rotate(this._rotation);
    this._ctx.scale(this._scaleX, this._scaleY);
    this._ctx.fillStyle = this._color;
    this._ctx.beginPath();
    this._ctx.arc(0, 0, this._radius, 0, 2 * Math.PI, true);
    this._ctx.closePath();
    this._ctx.fill();
    this._ctx.restore();
  }
  public draw(): void {
    this._x = this._centerX + Math.cos(this._angle) * this._radiusX;
    this._y = this._centerY + Math.sin(this._angle) * this._radiusY;

    this._angle += this._speed;

    this._draw();
  }
}

class Orbit {
  private _motions: Motion[] = [];
  private _el: HTMLDivElement;
  private _context: any;
  private _width = 320;
  private _height = 320;
  constructor(el: HTMLDivElement) {
    this._el = el;
    this._init();
  }

  private _init(): void {
    const canvas = document.createElement('canvas');
    this._el.append(canvas);
    this._context = canvas.getContext('2d');
    canvas.width = this._width;
    canvas.height = this._height;
    canvas.style.width = this._width / 2 + 'px';
    canvas.style.height = this._height / 2 + 'px';
    ORBIT_PARAMETERS.forEach(item => {
      const motion = new Motion(this._context, item.speed, this._width, this._height,
        item.radiusX, item.radiusY, item.revise);
      this._motions.push(motion);
    });
    this._loop();
  }

  private _loop() {
    this._context.clearRect(0, 0, this._width, this._height);
    this._motions.forEach(motion => {
      motion.draw();
    });
    requestAnimationFrame(this._loop.bind(this));
  }
}

export { Orbit }
