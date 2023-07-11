let count = 0;
function changedColor() {
    // получили элемент по ID
    let el2 = document.getElementById("el1");
    console.log(el2);
    // добавили класс
    // 3 / 2 = 1, 1 в остатке
    // 4 / 2 = 2, 0 в остатке
    // if (count % 2 == 0) {
    //     el2.classList.add('ice');
    // } 
    // // удалили класс
    // else {
    //     el2.classList.remove('ice');
    // }
    // count++;
    el2.classList.toggle('ice');
}

let btn1 = document.getElementById("btn1");
console.log(btn1);

btn1.addEventListener('click', changedColor);


let age = 101;
switch(age) {
    case 18: {
        alert('пвпывы');
        break;
    }
    case 20: {
        alert('пвпывы');
        break;
    }
    default: {
        alert('пвпывы');
        break;
    }
}