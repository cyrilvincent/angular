import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LogUpdateService } from './pwa-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro VideoGame';
  environment = environment;

  constructor(private lus: LogUpdateService) {
  }
}
