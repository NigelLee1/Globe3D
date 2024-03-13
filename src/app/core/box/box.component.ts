import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [ // using status here for transition
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BoxComponent implements OnInit {

  backgroundPosition = '';

  @Input()
  show = true;
  showTips = false;
  @Input()
  showCoord = true;

  private _coordIndex = 0;

  @Input() set coordIndex(value: number) {

     this._coordIndex = value;
     this.setBackgroundPosition(value);

  }
  get coordIndex(): number {
    return this._coordIndex;
  }

  @Output()
  onKnowMore: EventEmitter<void> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {

    // this.doSomething(changes.categoryId.currentValue);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

  }

  ngOnInit(): void {
    // { passive: fasle } solves the
    // problem "Unable to preventDefault inside passive event listener due to target being treated as passive"
    document.documentElement.addEventListener('touchmove', this.touchMove.bind(this), { passive: false, once: true});
  }

  setBackgroundPosition(index: number) {
    this.backgroundPosition = ['0px 0px', '0px -19px', '0px -38px', '0px -57px', '0px -76px'][index];
  }

  touchMove() {
    this.showTips = true;
  }
  public knowMore():void {
    this.onKnowMore.emit();
  }
}
