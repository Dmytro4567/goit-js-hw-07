const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", e => {
    const trimmedName = e.target.value.trim();
    if (trimmedName === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmedName;
    }
})