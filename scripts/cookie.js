let item_1 = document.getElementById("test_1");
let item_2 = document.getElementById("test_2");

document.cookie = "testing=Hello There";

let items = document.cookie;

if (items.indexOf(".") == -1) {
  item_1.style.visibility = "hidden";
} else item_1.style.visibility = "visible";
