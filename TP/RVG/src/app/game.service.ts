import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cart: Cart = new Cart();

  constructor(private messageService: MessageService) { }

  getGames(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched games');
    return of(VIDEOGAMES);
  }

  getCart(): Observable<Cart> {
    return of(this.cart);
  }

  addToCart(game: VideoGame): void {
    this.messageService.add('GameService: add ' + game.title + ' to cart');
    this.cart.add(game);
  }

}
