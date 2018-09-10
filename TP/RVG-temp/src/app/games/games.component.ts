import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: VideoGame[];
  selectedGame: VideoGame;


  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: VideoGame): void {
    this.selectedGame = game;
  }

  getGames(): void {
    this.games = this.gameService.getGames();
  }
}
