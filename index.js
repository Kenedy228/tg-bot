let tg = window.Telegram.WebApp;
tg.MainButton.show();

tg.onEvent('mainButtonClicked', () => {
    let name = document.querySelector(".name").value;
    let doctor = document.querySelector(".doctor").value;
    let phone = document.querySelector(".phone").value;
    let comment = document.querySelector(".comment").value;

    const appointment = {
        name,
        doctor,
        phone,
        comment
    }

    alert(appointment);
})