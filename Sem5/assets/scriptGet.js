// Функция котораяотвечает за отправку запроса ГЕТ
async function start() {
    // url запроса на получение юзеров
    let url = 'https://jsonplaceholder.typicode.com/users/';
    // отправляем запрос и получаем ответ в переменную response
    let response = await fetch(url);
    // читаем ответ в формате JSON
    let users = await response.json();
    // Тестово выводим ответ в консоль, чтоб убидится что все ок
    console.log(users);


    // получили элемент, куда будем записывать users
    let section = document.getElementById("users");
    // создали пустую строку, чтобы потом добавить в html текст
    let html = '';
    // перебор массива users
    users.forEach(element => {
        // апостров на буква ё
        // формируем часть html, для перехода на новую строку \n
        let htmlSegment = `<h2>${element.name}</h2>`;
        // дополняем строку в цикле
        html = html + htmlSegment;
    });
    // добавление в сам элемент строку (между открывающим и закрывающим)
    section.innerHTML = html;
}

start();