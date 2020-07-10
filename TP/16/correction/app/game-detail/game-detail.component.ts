import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { VideoGame, Cart } from '../shared/video-game';
import { GameService } from '../shared/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: VideoGame;
  @Output() addedToCard = new EventEmitter<Cart>();

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getGame();
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

  addToCart() {
    this.gameService.addToCart(this.game);
  }

  deleteGame() {
    this.gameService.deleteGame(this.game.id);
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/games']);
  }

  save(): void {
    this.gameService.updateGame(this.game)
        .subscribe(() => this.goBack());
  }

}
