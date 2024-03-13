import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SPOT_INFORMATION, MEDIA_RES } from '../../statics/constants';
import { NgIf, NgStyle } from '@angular/common';
import { GlobalsService } from '../../global.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit{

  @Input()
  show: boolean = false;

  private _videoCaption!: ElementRef<HTMLDivElement>;

  @ViewChild('videoCaption')
  set videoCaption(component: ElementRef<HTMLDivElement>){
    this._videoCaption = component;
  }

  @ViewChild('container', {static: true})
  _container!: ElementRef<HTMLDivElement>;

  // @ViewChild('video', {static:true})
  // video: ElementRef<HTMLVideoElement>;

  private _video!: HTMLVideoElement;

  videoSrc = MEDIA_RES.spotsVideo;

  constructor(private _globalService: GlobalsService) {

  }

  ngOnInit(): void {
    const res = this._globalService.loader.resources;
    this._video = res['spotsVideo'].data;
    this._video.className = "video_play";
    this._video.playsInline = true;
    this._container.nativeElement.appendChild(this._video);
  }

  public playSpotVideo(start: number, end: number, cap: string): void {
    const videoEle = this._video;
    videoEle.currentTime = start;
    videoEle.play();
    const resources = this._globalService.loader.resources;
    const vChildElements = this._videoCaption.nativeElement.children;
    vChildElements.length && this._videoCaption.nativeElement.removeChild(vChildElements[0]);
    this._videoCaption.nativeElement.appendChild(resources[cap].data);
    videoEle.addEventListener('timeupdate',
      function () {
        if (Math.floor(videoEle.currentTime) > end) {
          videoEle.currentTime = start;
        }
      }, false);
  }

  public pauseSpotVideo(): void {
    this._video.pause();
  }
}
