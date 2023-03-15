let tg = window.Telegram.WebApp;
tg.MainButton.show();

tg.onEvent('mainButtonClicked', () => {

    tg.sendData(JSON.stringify({
        name: "Данил",
        phone: "+79144284899",
        comment: "Болит зуб"
    }))

})