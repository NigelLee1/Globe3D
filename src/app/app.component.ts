import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loader } from 'resource-loader';
import { GlobalsService } from './global.service';
import { IMAGE_RES, MEDIA_RES, LOADER } from './statics/constants';
import { LoadingComponent } from './loading/loading.component';
import { CoreComponent } from './core/core.component';
import { MeteorComponent } from './meteor/meteor.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, CoreComponent, MeteorComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  loading = true;
  progress = 10;

  constructor(private globalService: GlobalsService) {

  }

  ngOnInit(): void {
    let loader = new Loader();

    const res: object = Object.assign({}, MEDIA_RES, IMAGE_RES);

    Object.keys(res).forEach(name => {
      // No index signature with a parameter of type 'string' was found on type '{}'.ts(7053)
      const url = res[name as keyof typeof res];
      loader.add(name, url);
    });

    loader.onProgress.add(() => {
      this.progress = Math.round(loader.progress);
    });

    loader.onComplete.add(() => {
      setTimeout(() => {
        this.loading = false;
      }, 200);
    });
    loader.load();
    LOADER.RES = loader.resources;
    this.globalService.loader = loader;
  }
}
