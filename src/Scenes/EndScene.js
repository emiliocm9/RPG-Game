import 'phaser';
import config from '../Config/config';
import { getScore } from '../API/leaderboard';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  preload() {
  }

  create() {
    const ScoresContainer = document.createElement('div')
    const scores = getScore();
    scores.forEach(element => {
      ScoresContainer.innerHTML += `
        <div class='score'>
          <span>${element.user}</span>
          <span>${elementscore} pts</span>
        </div>`;
    });
    this.add.dom(config.width / 2, 50, ScoresContainer);

    const PlayAgain = document.createElement('button');
    const Finish = document.createElement('button');
    PlayAgain.textContent = 'Play Again'
    PlayAgain.id = 'PlayButton';
    Finish.textContent = 'Finish Game';
    Finish.id = 'PlayButton';

    this.add.dom(config.width / 2, config.height - 200, PlayAgain);
    this.add.dom(config.width / 2, config.height - 100, Finish);

    Finish.addEventListener('click', () => {
      this.scene.start('Title');
    });

    PlayAgain.addEventListener('click', () => {
      this.scene.start('Game');
    });
  }
}