import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';
import {Observable, of} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cart$: Observable<Cart> = of(new Cart());
  games: VideoGame[] = VIDEOGAMES;

  constructor(private messageService: MessageService) { }

  getGames(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched games');
    return of(this.games);
  }

  addToCart(game: VideoGame): void {
    this.messageService.add('GameService: add ' + game.title + ' to cart');
    this.cart$.pipe(
      map(cart => cart.add(game))
    );
  }

  deleteGame(game: VideoGame): Observable<VideoGame[]> {
    this.messageService.add('GameService: delete ' + game.title);
    this.games = this.games.filter(g => g.id !== game.id);
    return of(this.games);
  }

}
