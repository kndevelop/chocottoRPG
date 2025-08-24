// インベントリ管理
var Inventory = {
  items: [],

  add: function (item) {
    this.items.push(item);
    Toast.show(item.name + "を入手");
    Hud.update();
  },

  remove: function (index) {
    if (this.items[index]) {
      Toast.show(this.items[index].name + "を捨てた");
      this.items.splice(index, 1);
      Hud.update();
    }
  }
};
