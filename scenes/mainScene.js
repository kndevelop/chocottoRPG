// Phaser メインシーン
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("player", "https://labs.phaser.io/assets/sprites/phaser-dude.png");
    this.load.image("enemy", "https://labs.phaser.io/assets/sprites/dragon.png");
  }

  create() {
    this.player = this.physics.add.sprite(100, 100, "player");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D,SPACE");

    this.enemy = this.physics.add.sprite(300, 100, "enemy");

    this.physics.add.overlap(this.player, this.enemy, () => {
      Player.hp -= 1;
      Hud.update();
      if (Player.hp <= 0) {
        Toast.show("ゲームオーバー");
        this.scene.pause();
      }
    });
  }

  update() {
    let speed = 200;
    this.player.setVelocity(0);

    if (this.keys.W.isDown) this.player.setVelocityY(-speed);
    if (this.keys.S.isDown) this.player.setVelocityY(speed);
    if (this.keys.A.isDown) this.player.setVelocityX(-speed);
    if (this.keys.D.isDown) this.player.setVelocityX(speed);

    if (Phaser.Math.Distance.Between(
      this.player.x, this.player.y, this.enemy.x, this.enemy.y
    ) < 200) {
      this.physics.moveToObject(this.enemy, this.player, 100);
    } else {
      this.enemy.setVelocity(0);
    }
  }
}
