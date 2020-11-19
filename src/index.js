import 'phaser';
import config from './Config/config';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.start('Boot');
  }
}
 
window.game = new Game();