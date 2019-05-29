import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(
                    (error: any, caught: Observable<HttpEvent<any>>) => {
                        if (!navigator.onLine) {
                            this.messageService.add(`NO INTERNET CONNECTION`);
                        } else if (error instanceof HttpErrorResponse) {
                            this.messageService.add(`HTTP ERROR ${error.status} ${error.message}`);
                        } else {
                            this.messageService.add(`INTERNAL ERROR ${error}`);
                        }
                        console.log(`Error ${error}`);
                        return of(error);
                    }
                ),
            );
    }
}
