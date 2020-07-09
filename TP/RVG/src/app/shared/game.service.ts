import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cart: Cart = new Cart();
  games = VIDEOGAMES;

  constructor() { }

  getGames(): VideoGame[] {
    return this.games;
  }

  deleteGame(game: VideoGame): VideoGame[] {
    this.games = this.games.filter(g => g.id !== game.id);
    return this.games;
  }

}
