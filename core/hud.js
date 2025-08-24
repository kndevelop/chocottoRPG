// HUD更新
var Hud = {
  update: function () {
    var el = document.getElementById("status");
    if (el) {
      el.textContent = `HP: ${Player.hp}/${Player.maxHp} | ATK: ${Player.atk} | Gold: ${Player.gold} | Lv:${Player.level}`;
    }
  }
};
