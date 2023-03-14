let tg = window.Telegram.WebApp;
tg.MainButton.show();
let counter = document.querySelector(".counter");
let count = 0;

tg.onEvent('mainButtonClicked', () => {
    count++
    counter.textContent = String(count);
})