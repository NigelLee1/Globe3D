import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Meteor from '../statics/meteor';
import { GlobalsService } from '../global.service';

@Component({
  selector: 'app-meteor',
  standalone: true,
  imports: [],
  templateUrl: './meteor.component.html',
  styleUrl: './meteor.component.scss'
})
export class MeteorComponent implements OnInit{
  @ViewChild('meteor', {static: true})
  dom!: ElementRef<HTMLDivElement>;

  constructor(private _globalService: GlobalsService) {

  }

  ngOnInit(): void {
    const resources = this._globalService.loader.resources;
    new Meteor(this.dom.nativeElement, resources['bgMeteor'].data);
  }
}
