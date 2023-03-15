let tg = window.Telegram.WebApp;
let form = document.querySelector("#appointment");
let queryId = tg.initDataUnsafe.query_id;

const appointment = {};

form.addEventListener("submit", function(e) {
    e.preventDefault();

    appointment.name = document.querySelector(".name").value;
    appointment.phone = document.querySelector(".phone").value;
    appointment.comment = document.querySelector(".comment").value;
    appointment.queryId = queryId;

    tg.MainButton.show();
});

tg.onEvent('mainButtonClicked', () => {

    fetch('http://185.143.174.146:8000/web-data', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(appointment),
    })

})