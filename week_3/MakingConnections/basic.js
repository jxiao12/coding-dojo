// var changName = document.querySelector(".changeName");
// alert("Hello");
//
// changeName.addEventListener("click", function editName(){
//   var newname = prompt("Please enter a new name: ");
//   changName.innerText = newname;
// })


function editName(element){
  var newname = prompt("Please enter a new name: ");
  document.querySelector(".current-name").innerText = newname;
}


function changeCount(){
  var count = document.querySelector('.people-count');
  count.innerHTML--;
  var nextcount = document.querySelector('.people-counts');
  if (nextcount <= 500) {
    nextcount.innerHTML++;
  } else {
    nextcount.innerHTML = "500+";
  }
}

function movePerson(element){
  var ele = document.querySelector(element);
  ele.remove();
  changeCount();
}
