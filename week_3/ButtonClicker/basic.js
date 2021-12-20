function text(element) {
    element.innerText = "Logout";
}


function remove(element) {
  element.remove();
}


function showInfo(element) {
  var num = document.querySelector(element);
  num.innerHTML++;
  alert("Ninja was liked");
}
