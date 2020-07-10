import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { UpdateService, LogUpdateService } from './shared/pwa-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro VideoGame';
  environment = environment;

  constructor(private logUpdateService: LogUpdateService,
              private updateService: UpdateService
    ) {
      updateService.checkForUpdates;
    }
}



