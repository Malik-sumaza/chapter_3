let col = $("strong").css("color", "green");

let emm = $("em").addClass("selected");

$(".row mark").addClass("selected");

let a = $("a").css("textDecoration", "none");

$("strong .some").toggleClass("some");

$("div .row")
  .eq(1)
  .toggleClass("row");

console.log($("a").css("color"));
