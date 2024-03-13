import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements AfterViewInit{
  active = false;

  @Output()
  emitter: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.active = true;
    }, 9000);
  }

  back () {
    if (this.active) {
      this.emitter.emit('back');
    }
  }

  register () {

  }
}
