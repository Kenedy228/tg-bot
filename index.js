let tg = window.Telegram.WebApp;
let queryId = tg.initDataUnsafe.query_id;
tg.MainButton.show();
const axios = require("axios");

tg.onEvent('mainButtonClicked', () => {

    const url = 'http://185.143.174.146:8000/web-data'
    const data = {
        name: "Данил",
        phone: "+79144284899",
        queryId
    }

    axios.post(url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    })

})