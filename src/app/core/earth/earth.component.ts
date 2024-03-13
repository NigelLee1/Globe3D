import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import Earth from '../../statics/earth';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-earth',
  standalone: true,
  imports: [NgClass],
  templateUrl: './earth.component.html',
  styleUrl: './earth.component.scss'
})
export class EarthComponent implements OnInit{

  @ViewChild('map', {static:true})
  map!: ElementRef<HTMLDivElement>;

  @Input()
  bannerActive: boolean = false;

  public earth!: Earth;

  ngOnInit(): void {
    this.earth = new Earth(this.map.nativeElement);
  }
}
