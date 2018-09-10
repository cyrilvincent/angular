import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { VideoGame } from '../video-game';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnChanges {

  @Input() game: VideoGame;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.game) {
      this.game.nbView++;
    }
  }

  addToCart() {
    this.gameService.addToCart(this.game);
  }

}
