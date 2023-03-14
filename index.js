let tg = window.Telegram.WebApp;
tg.MainButton.show();

tg.onEvent(mainButtonClicked, () => {
    document.querySelector("h1").innerText = "Clicked";
})