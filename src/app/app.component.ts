import { Component } from '@angular/core';
import '../../public/css/styles.less';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ String('./app.component.less') ]
})
export class AppComponent { 

  constructor() {
    console.log('AppComponent.ctor()...');
  }
}