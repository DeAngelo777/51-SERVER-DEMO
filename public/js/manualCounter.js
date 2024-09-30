const valueDOM = document.querySelector('.value');
const minusDOM = document.querySelector('.firstBtn');
const plusDOM = document.querySelector('.secondBtn');
let count = 0;

function minus() {
    valueDOM.textContent = --count;
}

function plus() {
    valueDOM.textContent = ++count;

}

minusDOM.addEventListener('click', minus);
plusDOM.addEventListener('click', plus);

