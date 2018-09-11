import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { VideoGame } from '../video-game';
import {GameService} from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnChanges {

  @Input() game: VideoGame;

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
      console.log(`Game.nbView++ `);
      this.gameService.incrementNbView(this.game);
    }
  }

  addToCart() {
    this.gameService.addToCart(this.game);
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
