// セーブデータ管理
var SaveManager = {
  saveKey: "chocoRPG_save",

  save: function () {
    var data = {
      player: Player,
      inventory: Inventory.items
    };
    document.cookie = this.saveKey + "=" + encodeURIComponent(JSON.stringify(data));
    Toast.show("セーブしました");
  },

  load: function () {
    var match = document.cookie.match(new RegExp(this.saveKey + '=([^;]+)'));
    if (match) {
      try {
        var data = JSON.parse(decodeURIComponent(match[1]));
        Object.assign(Player, data.player);
        Inventory.items = data.inventory || [];
        Toast.show("ロードしました");
      } catch (e) {
        console.error("セーブデータ破損:", e);
      }
    }
  },

  clear: function () {
    document.cookie = this.saveKey + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    Toast.show("セーブデータを削除しました");
  }
};
