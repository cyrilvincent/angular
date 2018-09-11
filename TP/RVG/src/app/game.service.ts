import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';
import {Observable, of, from} from 'rxjs';
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
    return of(VIDEOGAMES.sort((x, y) => x.id - y.id));
  }

  addToCart(game: VideoGame): void {
    this.messageService.add('GameService: add ' + game.title + ' to cart');
    // this.cart.add(game);
    this.ocart.pipe(
      map(cart => cart.add(game))
    );
  }

  getGame(id: number): Observable<VideoGame> {
      this.messageService.add(`GameService: fetched hero id=${id}`);
      return of(VIDEOGAMES.find(game => game.id === id));
  }

  getTop4(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched TOP4 games');
    return of(VIDEOGAMES.sort((x, y) => y.nbView - x.nbView).slice(0, 4));
  }

  incrementNbView(game: VideoGame): void {
    game.nbView++;
    VIDEOGAMES.find(g => g.id === game.id).nbView++;
    console.log(`Game.nbView++ ${game.id}`);
    console.log(VIDEOGAMES);
  }

}
