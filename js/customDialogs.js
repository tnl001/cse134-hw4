window.addEventListener("load", init);

function init() {
    let alertBtn = document.getElementById('alert-btn');
    let confirmBtn = document.getElementById("confirm-btn");
    let promptBtn = document.getElementById("prompt-btn");
    let alertDialog = document.getElementById("alert-dialog");
    let confirmDialog = document.getElementById("confirm-dialog");
    let promptDialog = document.getElementById("prompt-dialog");
    let promptInput = document.getElementById("prompt-input");
    let promptOK = document.getElementById("prompt-ok");
    let resultText = document.getElementsByTagName("output")[0];

    alertBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        alertDialog.showModal();
    });

    confirmBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        confirmDialog.showModal();
    });

    confirmDialog.addEventListener("close", () => {
        resultText.innerHTML = `Confirm result: ${confirmDialog.returnValue}`;
    });

    promptBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        promptDialog.showModal();
    });

    promptInput.addEventListener("change", (event) => {
        promptOK.value = promptInput.value;
    });

    promptDialog.addEventListener("close", () => {
        resultText.innerHTML = `Prompt result: ${promptDialog.returnValue}`;
    });
}   
