import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { VideoGame } from '../video-game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnChanges {

  @Input() game: VideoGame;
  @Output() deleteRequest = new EventEmitter<VideoGame>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.game) {
      this.game.nbView++;
    }
  }

  deleteGame() {
    this.deleteRequest.emit(this.game);
  }

}
