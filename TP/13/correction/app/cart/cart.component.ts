import { Component, OnInit } from '@angular/core';
import {Cart} from '../video-game';
import {GameService} from '../game.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  nbElement = 0;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.nbElement = this.gameService.cart.games.length;
  }

}
