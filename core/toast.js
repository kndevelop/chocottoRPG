// トーストメッセージ
var Toast = {
  show: function (msg) {
    var container = document.getElementById("toast-container");
    if (!container) return;

    var div = document.createElement("div");
    div.className = "toast";
    div.textContent = msg;
    container.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
};
