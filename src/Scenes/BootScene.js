import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', '../src/assets/Hyperflix_Logo.PNG');
  }

  create() {
    this.scene.start('Preloader');
  }
}