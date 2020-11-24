import 'phaser';
import config from '../Config/config';
import { getScore } from '../API/leaderboard';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  preload() {
  }

  async create() {
    const ScoresContainer = document.createElement('div')
    ScoresContainer.id = 'scoresContainer';
    const scores = await getScore();
    console.log(scores);
    scores.forEach(element => {
      ScoresContainer.innerHTML += `
        <div class='score'>
          <span>${element.user}</span>
          <span>${element.score} pts</span>
        </div>`;
    });
    this.add.dom(config.width / 2, 150, ScoresContainer);

    const PlayAgain = document.createElement('button');
    const Finish = document.createElement('button');
    PlayAgain.textContent = 'Play Again'
    PlayAgain.id = 'PlayButton';
    Finish.textContent = 'Finish Game';
    Finish.id = 'PlayButton';

    this.add.dom(config.width / 2, config.height - 250, PlayAgain);
    this.add.dom(config.width / 2, config.height - 150, Finish);

    Finish.addEventListener('click', () => {
      this.scene.start('Title');
    });

    PlayAgain.addEventListener('click', () => {
      this.scene.start('Game');
    });
  }
}