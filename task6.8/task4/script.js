let element = document.querySelector('a');

element.addEventListener('click', (event) => {
    element.textContent = prompt('Введите ссылку');
    event.preventDefault();
})