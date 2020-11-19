import 'phaser';
import BootScene from '../Scenes/BootScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import GameScene from '../Scenes/GameScene';
import TitleScene from '../Scenes/TitleScene';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  autoCenter: true,
  scene: [BootScene, PreloaderScene, TitleScene, GameScene],
};