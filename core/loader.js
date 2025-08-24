// 起動時にセーブデータ読み込み
window.addEventListener("load", () => {
  SaveManager.load();
  Hud.update();
});
