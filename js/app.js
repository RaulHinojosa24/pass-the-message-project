// Tu código aquí
const form = document.forms["message-form"];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputMessage = document.querySelector("#message");
    const messageDelivered = document.querySelector(".message-content");
    const errorMsg = document.querySelector(".feedback");

    if (inputMessage.value.trim() == "") {
        errorMsg.classList.add("show");
        inputMessage.value = "";
        return;
    } else {
        errorMsg.classList.remove("show");
    }

    messageDelivered.textContent = inputMessage.value.trim();
    inputMessage.value = "";

})