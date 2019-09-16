import { Injectable } from '@angular/core';
import {VIDEOGAMES} from './mock-video-games';
import {VideoGame, Cart} from './video-game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cart: Cart = new Cart();

  constructor() { }

  getGames(): VideoGame[] {
    return VIDEOGAMES;
  }

}
