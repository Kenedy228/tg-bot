let tg = window.Telegram.WebApp;
tg.MainButton.text = "Оставить заявку";
tg.MainButton.color = "#00b1a8";
tg.MainButton.show();

const phone = document.querySelector(".phone");

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