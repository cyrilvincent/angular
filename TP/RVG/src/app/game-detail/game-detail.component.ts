import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { VideoGame } from '../shared/video-game';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnChanges {

  @Input() game: VideoGame;
  @Output() deleteRequest = new EventEmitter<VideoGame>();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.game) {
      this.game.nbView++;
    }
  }

  addToCart() {
    this.gameService.cart.add(this.game);
  }

  deleteGame() {
    this.deleteRequest.emit(this.game);
  }

}
