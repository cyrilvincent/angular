import { Component, OnInit } from '@angular/core';
import {Cart} from '../video-game';
import {GameService} from '../game.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  nbElement = 0;

  constructor(private gameService: GameService,
              private messageService: MessageService) { }

  ngOnInit() {
    // this.nbElement = this.gameService.cart.games.length;
    this.messageService.add('Retrieve cart with ' + this.nbElement + ' elements');
    this.gameService.getCart().subscribe(cart => this.nbElement = cart.games.length);
  }

}
