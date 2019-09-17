import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class LogUpdateService {

    constructor(public updates: SwUpdate) {
        updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        });
        updates.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
        });
    }
}

@Injectable({
    providedIn: 'root'
  })
export class UpdateService {

    constructor(public updates: SwUpdate) {
        if (updates.isEnabled) {
            interval(6 * 60 * 60 * 1000).subscribe(() => updates.checkForUpdate()
                .then(() => console.log('checking for updates')));
        }
    }

    public checkForUpdates(): void {
        this.updates.available.subscribe(_ => this.promptUser());
    }

    private promptUser(): void {
        console.log('updating to new version');
        this.updates.activateUpdate().then(() => document.location.reload());
    }
}
