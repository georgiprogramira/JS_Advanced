function addItem() {
    let menuElement = document.getElementById('menu');
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = textElement.value;
    option.value = valueElement.value;

    menuElement.appendChild(option);

    textElement.value = '';
    valueElement.value = '';
}