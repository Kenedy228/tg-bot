let tg = window.Telegram.WebApp;
tg.MainButton.text = "Оставить заявку";
tg.MainButton.color = "#00b1a8";
tg.MainButton.show();

const phone = document.querySelector(".phone");

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(phone, maskOptions);

tg.onEvent('mainButtonClicked', () => {

    const type = "Запись"
    const name = document.querySelector(".name").value;
    const phone = document.querySelector(".phone").value;
    const comment = document.querySelector(".comment").value;

    if (name && phone) {
        tg.sendData(JSON.stringify({
            type,
            name,
            phone,
            comment
        }))
    } else {
        tg.showAlert("Заполните все поля со *");
    }

})