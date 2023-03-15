let tg = window.Telegram.WebApp;
let queryId = tg.initDataUnsafe.query_id;
tg.MainButton.show();

tg.onEvent('mainButtonClicked', () => {

    fetch('http://185.143.174.146:8000/web-data', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            name: "Данил",
            phone: "+79144284899",
            queryId
        }),
    })

})