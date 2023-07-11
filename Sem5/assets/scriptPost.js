// Функция отправки связанная с fetch, поэтому она ассинхронная
async function userSubmit(event) {
    // чтобы не обновлялась страница при отправке POST запроса
    event.preventDefault();
    // Запрос на url адрес
    let url = 'https://jsonplaceholder.typicode.com/users/';
    // получить значение первого input, т.е. что ввел пользователь
    let name = document.getElementsByTagName("input")[0].value;
    // отправляем запрос на серввер
    let response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // заголовки
            },
            body: JSON.stringify({name}) // преобразование в тип JSON
        });
    // сервер возвращает ответ, преобразуем json
    let result = await response.json();
    // ответ сервера на запрос, статус выводим в лог
    console.log(response.status);
    // результат в формате json
    console.log(result);
}

// получили форму по id
let form = document.getElementById("form");
// добавили слушатель отправки формы. Функция срабатывает, когда нажали на кнопку отправить запрос
form.addEventListener('submit', userSubmit);