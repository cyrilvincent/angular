import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../shared/video-game';
import { GameService } from '../shared/game.service';

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
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  delete(game: VideoGame): void {
    this.games = this.games.filter(g => g !== game);
    this.gameService.deleteGame(game.id).subscribe();
  }

}
