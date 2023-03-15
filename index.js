let tg = window.Telegram.WebApp;
let form = document.querySelector("#appointment");
let queryId = tg.initDataUnsafe.query_id;
let name = "";
let phone = "";
let comment = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    name = document.querySelector(".name").value;
    phone = document.querySelector(".phone").value;
    comment = document.querySelector(".comment").value;

    tg.MainButton.show();
});

tg.onEvent('mainButtonClicked', () => {

    document.querySelector(".content").textContent = queryId;

    fetch('http://185.143.174.146:8000/web-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            clientName: name,
            clientPhone: phone,
            clientComment: comment,
            queryId
        })
    })

})