// №1
let toggll = document.querySelector(".btn1");
toggll.addEventListener("click", function() {
  document.body.classList.toggle("btn1");
});
// №2
let btn2 = document.querySelector(".btn2");
let inp = document.querySelectorAll("input");
let arr = [];
btn2.addEventListener("click", function() {
  inp.forEach(function(item) {
    if (!item.value) {
      arr.push(false);
    } else arr.push(true);
  });
  console.log(arr);
  arr = [];
});
// №3
let elemDiv = document.querySelector(".elemDiv");
let x = 0;
let y = 0;
window.addEventListener("keydown", function(a) {
  console.log(a);
  if (a.key == "ArrowLeft") {
    x -= 100;
    elemDiv.style.transform = `translate(${x}px, ${y}px)`;
  } else if (a.key == "ArrowRight") {
    x += 100;
    elemDiv.style.transform = `translate(${x}px, ${y}px)`;
  } else if (a.key == "ArrowUp") {
    y -= 100;
    elemDiv.style.transform = `translate(${x}px, ${y}px)`;
  } else if (a.key == "ArrowDown") {
    y += 100;
    elemDiv.style.transform = `translate(${x}px, ${y}px)`;
  }
});
// №4
document.addEventListener("mousemove", function(e) {
  console.log("x: " + e.clientX, "y: " + e.clientY);
});
