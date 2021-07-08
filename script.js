let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let close = document.getElementById("myClose");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}
