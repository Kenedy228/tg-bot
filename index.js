let tg = Promise.all((window.Telegram.WebApp).then(data => data));
let form = document.querySelector("#appointment");

const appointment = {}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    appointment.name = document.querySelector(".name").value;
    appointment.phone = document.querySelector(".phone").value;
    appointment.comment = document.querySelector(".comment").value;

    tg.MainButton.show();
});

tg.onEvent('mainButtonClicked', () => {
    console.log(tg.initDataUnsafe.user);
    fetch('http://5.159.102.109:8000/web-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector(".name").value,
            phone: document.querySelector(".phone").value,
            comment: document.querySelector(".comment").value,
            queryId: tg.initDataUnsafe.query_id
        })
    });
    tg.close();
})