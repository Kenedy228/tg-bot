let tg = window.Telegram.WebApp;
let form = document.querySelector(".appointment");

const appointment = {
    name,
    doctor,
    phone,
    comment
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    appointment.name = document.querySelector(".name").value;
    appointment.doctor = document.querySelector(".doctor").value;
    appointment.phone = document.querySelector(".phone").value;
    appointment.comment = document.querySelector(".comment").value;

    tg.MainButton.show();
});


tg.onEvent('mainButtonClicked', () => {

    fetch('http://localhost:8000', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
    });
})