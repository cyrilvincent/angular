import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';
import {Observable, of, from, Subject} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private cart: Cart = new Cart();
  emitChangeSource = new Subject<Cart>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  games: VideoGame[] = VIDEOGAMES;

  constructor(private messageService: MessageService) { }

  get cart$(): Observable<Cart> {
    return of(this.cart);
  }

  getGames(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched games');
    return of(this.games.sort((x, y) => x.id - y.id));
  }

  getGame(id: number): Observable<VideoGame> {
    this.messageService.add(`GameService: fetched game id=${id}`);
    return of(this.games.find(game => game.id === id));
  }

  getTop4(): Observable<VideoGame[]> {
    this.messageService.add('GameService: fetched TOP4 games');
    return of(this.games.sort((x, y) => y.nbView - x.nbView).slice(0, 4));
  }

  addToCart(game: VideoGame): void {
    this.messageService.add('GameService: add ' + game.title + ' to cart');
    this.cart.add(game);
    this.emitChangeSource.next(this.cart);
  }

  incrementNbView(game: VideoGame): void {
    game.nbView++;
    console.log(`Game.nbView++ ${game.id}`);
  }

  deleteGame(game: VideoGame): Observable<VideoGame[]> {
    this.messageService.add('GameService: delete ' + game.title);
    this.games = this.games.filter(g => g.id !== game.id);
    return of(this.games);
  }

}
