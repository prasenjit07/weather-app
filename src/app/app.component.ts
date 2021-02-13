import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-weather> </app-weather>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
}
