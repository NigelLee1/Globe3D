import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PAGE_SIZE } from '../../statics/constants';
import { GlobalsService } from '../../global.service';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import * as IMAN from '../../statics/images-animation';


@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloudComponent implements OnInit, OnChanges {
  private _iman: any;

  @ViewChild('cloud', { static: true })
  public cloud!: ElementRef<HTMLDivElement>;

  @Input()
  show: boolean = false;

  @Output()
  onAnimationEnd: EventEmitter<void> = new EventEmitter();

  _images!: any[];

  ngOnInit(): void {
    this._initAnimation();
  }

  constructor(private globalService: GlobalsService) {

  }

  private _initAnimation(): void {

    const resources = this.globalService.loader.resources;
    const newArr = Object.keys(resources).filter(item => item.includes('skyCloud'));
    this._images = Array.from(newArr, (item: any) => {
      return resources[item].data;
    });

    let iman = new IMAN.ImagesAnimation(this.cloud.nativeElement, {
      fps: 10,
      width: PAGE_SIZE.WIDTH,
      height: PAGE_SIZE.HEIGHT,
      images: this._images,
      reverse: false,
      domType: 'canvas',
      onAnimationEnd: () => {
        this.onAnimationEnd.emit();
      }
    });
    this._iman = iman;

    // Object.defineProperty(AnimateImages.prototype, 'SetDom', {
    //   value: function (dom: HTMLCanvasElement) {
    //     debugger;
    //     this.prototype.el = dom;
    //   }
    // });
  }

  public play(): void {
    this._iman.play();
  }

  public reverse (): void {
    this._iman.reverse();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['show']) {
    //   debugger;
    //   if (changes['show'].currentValue) {
    //     debugger;
    //   }
    // }
  }

}
