const refs = {
    btnDec: document.querySelector('button[data-action="decrement"]'),
    btnInc: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnDec.addEventListener("click", () => {
    counterValue --;
    refs.value.textContent = counterValue;
    return refs.value.textContent;
});
refs.btnInc.addEventListener("click", () => {
    counterValue ++;
    refs.value.textContent = counterValue;
    return refs.value.textContent;
});

