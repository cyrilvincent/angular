import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  ocart: Observable<Cart> = of(new Cart());

  constructor(private messageService: MessageService) { }

  getGames(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched games');
    return of(VIDEOGAMES);
  }

  addToCart(game: VideoGame): void {
    this.messageService.add('GameService: add ' + game.title + ' to cart');
    // this.cart.add(game);
    this.ocart.pipe(
      map(cart => cart.add(game))
    );
  }

  sortBytitle(a: VideoGame, b: VideoGame): number {
      if (a.title < b.title) { return -1; } else
      if (a.title > b.title) { return 1; }
      return 0;
  }

  getGame(id: number): Observable<VideoGame> {
      this.messageService.add(`GameService: fetched hero id=${id}`);
      return of(VIDEOGAMES.find(game => game.id === id));
  }

}
