import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  nbElement = 0;

  constructor(public gameService: GameService) { } //private for solution1, public for solution2

  ngOnInit() {
    this.nbElement = this.gameService.cart.games.length;
  }

}
