import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGame } from './video-game';
import { VIDEOGAMES} from './mock-video-games';
import { GameService } from './game.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideoGame,
    VIDEOGAMES,
    GameService,
  ],
  exports: [
    CommonModule,
    VideoGame,
    VIDEOGAMES,
    GameService,
  ]
})
export class SharedModule {

 }
