import 'phaser';
import config from './Config/config';
import '@babel/polyfill';
import Model from './Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.start('Boot');
  }
}

window.game = new Game();