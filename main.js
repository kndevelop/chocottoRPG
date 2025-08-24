// ゲーム起動
window.addEventListener("load", () => {
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#333",
    physics: {
      default: "arcade",
      arcade: { debug: false }
    },
    scene: [MainScene]
  };
  new Phaser.Game(config);
});
