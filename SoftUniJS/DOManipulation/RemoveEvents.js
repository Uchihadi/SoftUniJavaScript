// More indepth of .addEventListener() & .removeEventListener()
// second event listener blur, (event) will remove focus if we click on another input field.
// third event listener attached to the button will remove the first event listener when the button is clicked.
// lose the focus effect.

const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
password.addEventListener('focus', focusEvent);

function focusEvent(event) {
    event.target.style.background = '#234465';
}
password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});
button.addEventListener('click', () => {
    password.removeEventListener('focus', focusEvent);
});