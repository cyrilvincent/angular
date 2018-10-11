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
export class GameDetailComponent implements OnInit {

  @Input() game: VideoGame;
  @Output() addedToCard = new EventEmitter<Cart>();

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getGame();
  }

  addToCart() {
    this.gameService.addToCart(this.game);
    // this.addedToCard.emit(this.gameService._cart); // Local upload event strategy, not working with <router-outlet>
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => {
          this.game = game;
          this.game.nbView += 1;
        });
  }

  goBack(): void {
    this.location.back();
  }
}
