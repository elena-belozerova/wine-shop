let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let close = document.getElementById("myClose");

btn.addEventListener('click', (event) =>{
      event.preventDefault();
      modal.style.display = "block";
})

close.addEventListener('click', (event) =>{
  event.preventDefault();
  modal.style.display = "none";
})