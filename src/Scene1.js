export default class Scene1 extends Phaser.Scene {
  constructor() {
    super('InitGames');
  }

  preload() {
    this.load.image('background', './src/assets/Vaporwave_Grid.png');
  }

  create() {
    this.background = this.add.image(110, 48, 'background');
    this.background.setOrigin(0, 0);

    this.add.text(0, 0, 'background', {
      font: "25px Arial",
      fill: "yellow"
    });
  }
}
