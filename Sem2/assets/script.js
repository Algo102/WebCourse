let count = 0;
function changColor() {
  // получили по ID
  let el2 = document.getElementById("el2");
  console.log(el2);

  // if (count % 2 == 0)
  //   el2.classList.add('ice'); // Добавили класс
  // else
  //   el2.classList.remove('ice'); // Удалили класс
  // count ++;
  // toggle как тернарник
  el2.classList.toggle('ice');
}


let btn1 = document.getElementById("btn1");
console.log(btn1);
// логика нажатия на кнопку
btn1.addEventListener('click', changColor )