abstract class baseAnimationRenderer {
  public dom!: HTMLCanvasElement | HTMLDivElement;
  protected width;
  protected height;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.init();
  }
  public abstract drawImage(image: HTMLImageElement): void;
  protected abstract init(): void;
}

class CanvasAnimationRenderer extends baseAnimationRenderer {
  private _context: any;

  constructor(width: number, height: number) {
    super(width, height);
  }

  protected init() {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.style.width = this.width + 'px';
    canvas.height = this.height;
    canvas.style.height = this.height + 'px';
    this._context = canvas.getContext('2d');
    this.dom = canvas;
  }

  public drawImage(image: HTMLImageElement): void {
    this._context.clearRect(0, 0, this.width, this.height)
    this._context.drawImage(image, 0, 0, this.width, this.height)
  }
}

class DivAnimationRenderer extends baseAnimationRenderer {
  private _imageArray: HTMLImageElement[] = [];

  constructor(width: number, height: number) {
    super(width, height);
  }

  protected init() {
    var div = document.createElement('div')
    div.style.display = 'inline-block';
    div.style.position = 'absolute';
    div.style.margin = 0 + 'px';
    div.style.padding = 0 + 'px';
    this.dom = div;
  }

  private _setImageStyle(imageElement: HTMLImageElement): void {
    imageElement.style.position = 'absolute';
    imageElement.style.top = 0 + 'px';
    imageElement.style.left = 0 + 'px';
    imageElement.style.width = this.width + 'px';
    imageElement.style.height = this.height + 'px';
  }

  public drawImage(image: HTMLImageElement): void {
    if (this._imageArray.indexOf(image) === -1) {
      this._imageArray.forEach(function (img) { img.style.opacity = '0' });
      this._setImageStyle(image);
      this.dom.appendChild(image);
      this._imageArray.push(image);
    } else {
      this._imageArray.forEach(function (img) {
        if (img === image) {
          img.style.opacity = '1';
        } else {
          img.style.opacity = '0';
        }
      })
    }
  }
}

interface Options {
  width: number;
  height: number;
  domType: "canvas";
  reverse: boolean;
  fps: number;
  images: HTMLImageElement[];
  onAnimationEnd?: Function;
}

class ImagesAnimation {
  private _options: Options;
  public container: HTMLDivElement;
  private _animating = false;
  private _renderer: CanvasAnimationRenderer | DivAnimationRenderer;
  private _currentFrameIndex = 0;
  private _aid!: number;
  private _lastTick = Date.now();
  private _timeDiff: number;

  _initOptions: Options = {
    width: 200,
    height: 200,
    domType: 'canvas', // dom
    reverse: false,
    fps: 30,
    images: [], // array of image url / element, or a sprite image
  }
  constructor(container: HTMLDivElement, params: any) {
    this._options = Object.assign(this._initOptions, params);
    this.container = container;
    this._renderer = this._options.domType === "canvas" ?
      new CanvasAnimationRenderer(this._options.width, this._options.height)
      : new DivAnimationRenderer(this._options.width, this._options.height);

    this.container.style.width = this._options.width + 'px'
    this.container.style.height = this._options.height + 'px'
    this.container.innerHTML = ''
    this.container.appendChild(this._renderer.dom);
    this._timeDiff = 1000 / this._options.fps;
  }

  _loop() {
    if (this._animating) {
      const currentTick = Date.now();
      if (currentTick - this._lastTick > this._timeDiff) {
        console.log(this._currentFrameIndex);
        this._renderer.drawImage(this._options.images[this._currentFrameIndex]);
        this._lastTick = currentTick;
        if (!this._options.reverse) {
          ++this._currentFrameIndex;
          if (this._currentFrameIndex == this._options.images.length) {
            this._destroy();
          }
        } else {
          --this._currentFrameIndex;
          if (this._currentFrameIndex == -1) {
            this._destroy();
          }
        }
      }
      this._aid = requestAnimationFrame(this._loop.bind(this));
    }
  }


  _destroy() {
    cancelAnimationFrame(this._aid);
    this._currentFrameIndex = 0;
    this._animating = false;
    this._options.onAnimationEnd && this._options.onAnimationEnd.bind(this)()
  }

  public play() {
    this._options.reverse = false;
    if (!this._animating) {
      this._play();
    }
  }

  public pause() {
    this._animating = false;
    cancelAnimationFrame(this._aid);
  }

  private _play() {
    this._animating = true;
    this._aid = requestAnimationFrame(this._loop.bind(this));
  }

  public reverse() {
    this._options.reverse = true;
    if (!this._animating) {
      this._currentFrameIndex = this._initOptions.images.length - 1;
      this._play();
    }
  }

  public isAnimating(): boolean {
    return this._animating;
  }
}
export { Options, ImagesAnimation }
