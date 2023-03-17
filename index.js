let tg = window.Telegram.WebApp;
tg.MainButton.text = "Оставить заявку";
tg.MainButton.color = "#00b1a8";
tg.MainButton.show();


tg.onEvent('mainButtonClicked', () => {

    const name = document.querySelector(".name").value;
    const phone = document.querySelector(".phone").value;
    const comment = document.querySelector(".comment").value;

    if (name && phone) {
        tg.sendData(JSON.stringify({
            name,
            phone,
            comment
        }))
    } else {
        tg.showAlert("Заполните все поля со *");
    }

})


document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('.phone') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})