const form = document.forms["message-form"];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputMessage = e.target.elements["message"];

    const messageDelivered = document.querySelector(".message-content");
    const errorMsg = document.querySelector(".feedback");

    if (inputMessage.value.trim() == "") {
        errorMsg.classList.add("show");

        setTimeout(() => {
            errorMsg.classList.remove("show");
        }, 1500);

        inputMessage.value = "";
        return;
    }

    messageDelivered.textContent = inputMessage.value.trim();
    inputMessage.value = "";
})