import Phaser from 'phaser';
import config from '../Config/config';
import { getScore } from '../API/leaderboard';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  async create() {
    const leaderText = document.createElement('h2');
    leaderText.textContent = 'Player';
    leaderText.className = 'info';
    const pointsText = document.createElement('h2');
    pointsText.textContent = 'Points';
    pointsText.className = 'info';

    this.add.dom(340, 50, leaderText);
    this.add.dom(470, 50, pointsText);

    leaderText.textContent = 'Player';
    const ScoresContainer = document.createElement('div');
    ScoresContainer.id = 'scoresContainer';
    const scores = await getScore();
    scores.forEach(element => {
      ScoresContainer.innerHTML += `
        <div class='score'>
          <span>${element.user}</span>
          <span>${element.score} pts</span>
        </div>`;
    });
    this.add.dom(config.width / 2, 200, ScoresContainer);

    const PlayAgain = document.createElement('button');
    const Finish = document.createElement('button');
    PlayAgain.textContent = 'Play Again';
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