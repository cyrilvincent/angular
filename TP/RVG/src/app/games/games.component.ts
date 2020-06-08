import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game';
import { VIDEOGAMES } from '../mock-video-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games = VIDEOGAMES;
  selectedGame: VideoGame;


  constructor() { }

  ngOnInit() {
  }

  onSelect(game: VideoGame): void {
    this.selectedGame = game;
  }
}
