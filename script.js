function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

let slides = document.querySelectorAll(".slides img");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
},4000);
