// №1
// let activ = $(".active");
// let btn1 = $(".btn");
// btn1.on("click", () => {
//   activ.toggleClass("qwerty");
// });
// №2
let inp = $("input");
let btn2 = $(".btn2");
let arr = [];

btn2.on("click", function() {
  inp.each(function(index) {
    arr.push(!!inp[index].value);
    // let reducer = (a, b) => a * b;
  });
  console.log(arr);
  // console.log(arr.reduce(reducer));
  arr = [];
});
// №3
let acc = $(".first-block");
let x = 0;
let y = 0;
$(window).on("keydown", function(a) {
  console.log(a);
  if (a.key === "ArrowLeft") {
    x -= 100;
    acc.css("transform", `translate(${x}px,${y}px)`);
  } else if (a.key === "ArrowRight") {
    x += 100;
    acc.css("transform", `translate(${x}px,${y}px)`);
  } else if (a.key === "ArrowUp") {
    y -= 100;
    acc.css("transform", `translate(${x}px,${y}px)`);
  } else if (a.key === "ArrowDown") {
    y += 100;
    acc.css("transform", `translate(${x}px,${y}px)`);
  }
});
// №4
$(document).on("mousemove", function(f) {
  console.log("x: " + f.clientX, "y: " + f.clientY);
});
