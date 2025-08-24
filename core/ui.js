// UIボタン処理
window.addEventListener("load", () => {
  document.getElementById("btn-save").addEventListener("click", () => SaveManager.save());
  document.getElementById("btn-newgame").addEventListener("click", () => {
    Player.hp = Player.maxHp = 100;
    Player.atk = 10;
    Player.gold = 0;
    Player.level = 1;
    Player.exp = 0;
    Inventory.items = [];
    Hud.update();
    Toast.show("ニューゲーム開始");
  });
  document.getElementById("btn-clear").addEventListener("click", () => SaveManager.clear());
});
