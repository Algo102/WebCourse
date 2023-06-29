let name1 = prompt("Введите свое имя", "Женя");
alert(`Привет, ${name1}!`);

let age = +(prompt("Сколько тебе лет?", "18"));
let delta10 = 18-10;
let delta18 = age - 18;


switch (age) {
	case 18:
		alert( 'Все хорошо' );
		break;
	case 10:
		alert(`Привет, маловато, приходи через ${delta10} лет((`);
		break;
	case 30:
		alert( 'Супер, добро пожаловать' );
		break;  
	default:
    if(age>18)
      alert(`Добро пожаловать, где Вы были ${delta18} лет`);
    else
      alert(`Тебе рано, подрости до 18`);
    break;	
}


