let list = $(".ul-list");
let arr = [];
let btn = $(".btn");

btn.on("click", function() {
  let inp = $(".inp");
  if (!inp.val()) return alert("Вы ничего не ввели!");
  arr.push(inp.val());
  render();
  inp.val("");
});

function updateCard(index) {
  let newText = prompt("Введите новое значение: ");
  arr[index] = newText;
  render();
}

function render() {
  list.html("");
  arr.forEach((item, i) => {
    list.append(`
    <li>
      <span>${item}</span>
      <button onclick="updateCard(${i})">Update</button>
      <button onclick="deletedItem(${i})">Delete</button>
      <button onclick="redactor(${i})">Line</button>
    </li>
   `);
  });
}
function deletedItem(index) {
  arr.splice(index, 1);
  render();
}
function redactor(i) {
  $(".ul-list span")
    .eq(i)
    .toggleClass("decoration");
}
