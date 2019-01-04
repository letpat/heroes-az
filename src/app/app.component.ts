import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./heroes.component.scss'],
     template: `
  <h1>Heroes</h1>
  <div class="header-bar"></div>
  <app-heroes></app-heroes>
`
})
export class AppComponent {
    title = 'app';
}