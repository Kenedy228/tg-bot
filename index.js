let tg = window.Telegram.WebApp;

const elem = document.querySelector("h1").innerText;

tg.sendData(elem);