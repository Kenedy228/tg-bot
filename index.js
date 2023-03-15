let tg = window.Telegram.WebApp;
let form = document.querySelector("#appointment");

const appointment = {}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    appointment.name = document.querySelector(".name").value;
    appointment.phone = document.querySelector(".phone").value;
    appointment.comment = document.querySelector(".comment").value;
    appointment.queryID = tg.query_id;

    tg.MainButton.show();
});

tg.onEvent('mainButtonClicked', () => {
    fetch('http://5.159.102.109:8000/web-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
    });
    tg.close();
})