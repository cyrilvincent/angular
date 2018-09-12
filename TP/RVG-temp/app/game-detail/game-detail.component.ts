import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { VideoGame, Cart } from '../video-game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnChanges {

  @Input() game: VideoGame;
  @Output() addedToCard = new EventEmitter<Cart>();

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getGame();
    this.incrementNbView();
  }

  ngOnChanges() {
    // this.incrementNbView();
  }

  incrementNbView() {
    if (this.game) {
      this.gameService.incrementNbView(this.game);
    }
  }

  addToCart() {
    console.log(`Add ${this.game.title} to the cart`);
    const cart: Cart = this.gameService.addToCart(this.game);
    // this.addedToCard.emit(cart); // Local upload event strategy, not working with <router-outlet>
    this.gameService.emitChange(cart); // Shared Service event strategy
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => this.game = game);
  }

  goBack(): void {
    this.location.back();
  }

}
