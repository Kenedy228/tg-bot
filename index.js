let tg = window.Telegram.WebApp;
tg.MainButton.show();

const elem = document.querySelector("h1").innerText;

tg.sendData(elem);