import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoGame, Cart } from '../shared/video-game';
import { GameService } from '../shared/game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: VideoGame;
  // @Output() addedToCard = new EventEmitter<Cart>();

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getGame();
  }

  addToCart() {
    console.log(`Add ${this.game.title} to the cart`);
    this.gameService.addToCart(this.game);
    // this.addedToCard.emit(cart); // Local upload event strategy, not working with <router-outlet>
    // this.gameService.emitChange(cart); // Shared Service event strategy
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => {
          this.game = game;
          this.game.nbView += 1;
          this.gameService.updateGame(this.game).subscribe();
        });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.gameService.updateGame(this.game)
        .subscribe(() => this.goBack());
  }

}
