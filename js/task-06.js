const refs = {
    input: document.querySelector("#validation-input"),
};

const inputLength = Number(refs.input.dataset.length);
refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if(event.currentTarget.value.length === inputLength) {
        event.currentTarget.classList = "valid";
    } else {
        event.currentTarget.classList = "invalid";
    }
};