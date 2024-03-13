import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GlobalsService } from '../../global.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent implements OnInit {
  _backgroundAudio!: HTMLAudioElement;
  _spotAudio!: HTMLAudioElement;
  @ViewChild('container', {static: true})
  _container!: ElementRef<HTMLDivElement>;

  constructor(private rd: Renderer2, private _elementRef: ElementRef, private _globalService: GlobalsService) {

  }

  ngOnInit(): void {
    this._initMusic();
  }

  private _initMusic() {
    const res = this._globalService.loader.resources;
    this._backgroundAudio = res['backgroundAudio'].data;
    this._spotAudio = res['spotsAudio'].data;
    this._backgroundAudio.loop = true;
    this._spotAudio.loop = true;
    this._backgroundAudio.style.display = 'none';
    this._spotAudio.style.display = 'none';
    this._container.nativeElement.appendChild(this._backgroundAudio);
    this._container.nativeElement.appendChild(this._spotAudio);
  }

  public playSpotMusic(start: number, end: number, onClipEnd: Function): void {
    const bgMusicEle = this._spotAudio;
    bgMusicEle.currentTime = start;
    bgMusicEle.play();
    let toEnd = false;
    bgMusicEle.addEventListener('timeupdate',
      function () {
        if (Math.floor(bgMusicEle.currentTime) > end) {
          bgMusicEle.currentTime = start;
          if(!toEnd) {
            onClipEnd();
            toEnd = true;
          }
        }
      }, false);
  }

  public pauseSpotMusic() {
    this._spotAudio.pause();
  }

  public playBgMusic(): void {
    const bgMusicEle = this._backgroundAudio;
      const bgPromise = bgMusicEle.play();
      if (bgPromise !== undefined) {
        bgPromise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          bgMusicEle.play();
        });
      }
  }

  public pauseBgMusic(): void {
    this._backgroundAudio.pause();
  }

}
