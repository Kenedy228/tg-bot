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

tg.onEvent('mainButtonClicked', async () => {

    await fetch('http://185.143.174.146:8000/web-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment),
    })

})