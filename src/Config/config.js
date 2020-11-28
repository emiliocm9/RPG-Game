import Phaser from 'phaser';

import BootScene from '../Scenes/BootScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import GameScene from '../Scenes/GameScene';
import TitleScene from '../Scenes/TitleScene';
import CreditsScene from '../Scenes/CreditsScene';
import OptionsScene from '../Scenes/OptionsScene';
import EndScene from '../Scenes/EndScene';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: true,
    },
  },
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  autoCenter: true,
  scene: [BootScene, PreloaderScene, TitleScene, GameScene, OptionsScene, CreditsScene, EndScene],
};