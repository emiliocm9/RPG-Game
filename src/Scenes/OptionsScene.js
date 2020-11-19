import 'phaser';
import config from '../Config/config';
 
export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }
 
  preload () {
  }
 
  create () {
    // Options
    this.optionsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', function (pointer) {
      this.scene.start('Options');
    }.bind(this));

    // Credits
    this.creditsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', function (pointer) {
      this.scene.start('Credits');
    }.bind(this));

    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton1');
    });
  }
};