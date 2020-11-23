import 'phaser';
import game_background from '../assets/landscape.png';
import zeppelin from '../assets/ui/Zeppelin.png';
import mountain from '../assets/ui/tree.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('background', game_background);
    this.load.image('zeppelin', zeppelin);
    this.load.image('pipe', mountain);
  }

  create() {
    this.playerName = this.sys.game.globals.model.playerName;
    this.add.image(400, 300, 'background').setScrollFactor(0, 0);
    this.pipeGroup = this.physics.add.group();
    this.pipePool = [];
    for(let i = 0; i < 4; i++){
        this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe'));
        this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe'));
        this.placePipes(false);
    }
    this.pipeGroup.setVelocityX(-125);
    this.zeppelin = this.physics.add.sprite(80, game.config.height / 2, 'zeppelin');
    this.zeppelin.displayWidth = 70;
    this.zeppelin.displayHeight = 43;
    this.zeppelin.body.gravity.y = 800;
    this.input.keyboard.on('keydown-SPACE', this.flap, this);
    this.input.on('pointerdown', this.flap, this);
    this.score = 0;
    this.topScore = localStorage.getItem('bestZepScore') == null ? 0 : localStorage.getItem('bestZepScore');
    this.scoreText = this.add.text(10, 10, '', { fontSize: '20px', fill: '#800000' });
    this.updateScore(this.score);
  }

  updateScore(inc){
    this.score += inc;
    this.scoreText.text = 'Score: ' + this.score + '\nBest: ' + this.topScore;
  }

  placePipes(addScore){
      let rightmost = this.getRightmostPipe();
      let pipeHoleHeight = Phaser.Math.Between(110, 135);
      let pipeHolePosition = Phaser.Math.Between(50 + pipeHoleHeight / 2, game.config.height - 50 - pipeHoleHeight / 2);
      this.pipePool[0].x = rightmost + this.pipePool[0].getBounds().width + Phaser.Math.Between(220, 280);
      this.pipePool[0].y = pipeHolePosition - pipeHoleHeight / 2;
      this.pipePool[0].setOrigin(0, 1);
      this.pipePool[1].x = this.pipePool[0].x;
      this.pipePool[1].y = pipeHolePosition + pipeHoleHeight / 2;
      this.pipePool[1].setOrigin(0, 0);
      this.pipePool = [];
      if(addScore){
          this.updateScore(1);
      }
  }

  flap(){
      this.zeppelin.body.velocity.y = -300;
  }

  getRightmostPipe(){
      let rightmostPipe = 0;
      this.pipeGroup.getChildren().forEach(function(pipe){
          rightmostPipe = Math.max(rightmostPipe, pipe.x);
      });
      return rightmostPipe;
  }

  update(){
      this.physics.world.collide(this.zeppelin, this.pipeGroup, function(){
          this.die();
      }, null, this);
      if(this.zeppelin.y > game.config.height || this.zeppelin.y < 0){
          this.die();
      }
      this.pipeGroup.getChildren().forEach(function(pipe){
          if(pipe.getBounds().right < 0){
              this.pipePool.push(pipe);
              if(this.pipePool.length == 2){
                  this.placePipes(true);
              }
          }
      }, this)
  }

  die(){
      localStorage.setItem('bestZepScore', Math.max(this.score, this.topScore));
      this.scene.start('Title');
  }
}