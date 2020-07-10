import {VideoGame} from './video-game';

export const VIDEOGAMES: VideoGame[] = [
    { id: 1,
      title: 'Space Invaders',
      editor: 'Taito',
      year: 1978,
      consoles: ['Atari VCS', 'MSX'],
      play: 'http://www.playretrogames.com/3022-space-invaders-the-original-game',
      nbView: 0,
    },
    { id: 2,
      title: 'Pac Man',
      editor: 'Namco',
      year: 1980,
      consoles: ['Atari VCS', 'MSX'],
      play: 'https://www.retrogames.cc/arcade-games/pac-man-midway.html',
      nbView: 0,
    },
    { id: 3,
      title: 'Pong',
      editor: 'Atari',
      year: 1972,
      consoles: ['Atari VCS', 'MSX'],
      play: 'https://www.youtube.com/watch?v=it0sf4CMDeM',
      nbView: 0,
    },
    { id: 4,
      title: 'Super Mario Bros',
      editor: 'Nintendo',
      year: 1985,
      consoles: ['NES'],
      play: 'https://emulatoronline.com/nes-games/super-mario-bros/',
      nbView: 0,
    },
    { id: 5,
      title: 'Tetris',
      editor: 'Nintendo',
      year: 1984,
      consoles: ['NET', 'Game boy'],
      play: 'https://emulatoronline.com/nes-games/classic-tetris/',
      nbView: 0,
    },
    { id: 6,
      title: 'Super Mario Kart',
      editor: 'Nintendo',
      year: 1992,
      consoles: ['SNES'],
      play: 'https://emulatoronline.com/snes-games/super-mario-kart/',
      nbView: 0,
    },
    { id: 7,
      title: 'Street Fighter 2',
      editor: 'Nintendo',
      year: 1991,
      consoles: ['SNES'],
      play: 'https://emulatoronline.com/snes-games/street-fighter-2-turbo-hyper-fighting/',
      nbView: 0,
    },
    { id: 8,
      title: 'Another World',
      editor: 'Delphine Software',
      year: 1991,
      consoles: ['Atari ST', 'Amiga'],
      play: 'https://emulatoronline.com/sega-games/another-world/',
      nbView: 0,
    },
    { id: 9,
      title: 'Commando',
      editor: 'Capcom',
      year: 1985,
      consoles: ['Amstrad', 'Commodore'],
      play: 'https://play-roms.com/coin-op-arcade/commando',
      nbView: 0,
    },
    { id: 10,
      title: 'Ajouter votre propre jeux',
      editor: 'Vous',
      year: 1900,
      consoles: [],
      play: '',
      nbView: 0,
    },
  ];
