function cartInfor(element) {
  alert("Your Cart is empty!");
}

function over(element) {
  element.src = "images/assets/succulents-2.jpg";
}

function out(element) {
  element.src = "images/assets/succulents-1.jpg";
}

function removes(element) {
  var infomation = document.querySelector('.cookies');
  infomation.remove();
}
