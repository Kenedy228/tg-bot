let tg = window.Telegram.WebApp;
tg.MainButton.show();

const form = document.querySelector(".appointment");

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
        alert("Заполните все поля со *");
    }

})