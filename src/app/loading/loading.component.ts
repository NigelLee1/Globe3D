import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Orbit } from '../statics/orbit';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {

  @Input()
  progress = 0;

  @ViewChild('trackOrbit', { static: true })
  _trackOrbit!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    new Orbit(this._trackOrbit.nativeElement);
  }
}
