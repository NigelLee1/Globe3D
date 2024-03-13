import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss'
})
export class PressComponent {

  @Input()
  showPressButton!: boolean;
  @Input()
  showBackTip!: boolean;
  @Output()
  onPressDown: EventEmitter<void> = new EventEmitter();
  @Output()
  onPressEnd: EventEmitter<void> = new EventEmitter();

  touchStart() {
    this.onPressDown.emit();
  }

  touchEnd() {
    this.onPressEnd.emit();
  }
}
