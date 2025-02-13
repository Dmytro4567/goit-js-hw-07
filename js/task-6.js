function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    let html = "";
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const color = getRandomHexColor();
        html += `<div style="
            width: ${size}px; 
            height: ${size}px; 
            background-color: ${color};">
        </div>`;
        size += 10;
    }
    return html;
}

function destroyBoxes() {
    boxes.innerHTML = '';
}


const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', e => {
    if (input.value.trim() >= 1 && input.value.trim() <= 100) {
        boxes.innerHTML = createBoxes(input.value.trim());
        input.value = '';
    } else alert('number must be >=1 & <=100')
});

destroyButton.addEventListener('click', destroyBoxes);

