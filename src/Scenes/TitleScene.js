import Phaser from 'phaser';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = 'Player name';
    inputText.required = true;
    inputText.autocomplete = 'off';
    inputText.id = 'Nickname';
    this.add.dom(config.width / 2, 90, inputText);

    const startButton = document.createElement('button');
    startButton.id = 'PlayButton';
    startButton.textContent = 'Play game';
    this.add.dom(config.width / 2, 200, startButton);

    startButton.addEventListener('click', () => {
      if (inputText.value) {
        this.userName = this.sys.game.globals.model;
        this.userName.playerName = inputText.value;
        this.scene.start('Game');
      }
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });

    this.optionsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', () => {
      this.scene.start('Options');
    });

    this.creditsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', () => {
      this.scene.start('Credits');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.model.bgMusicPlaying = true;
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    const dist = config.width;
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(dist / 2, config.height / 2 - offset * 100, dist, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    const element = document.createElement('div');
    this.add.dom(0, 0, element);
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}