// Example of using 'Click type' & Click me function
// On each click of button --> Number will be incremented by one

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', clickMe);

function clickMe(e) {
    const target = e.currentTarget;
    const targetText = target.textContent;
    target.textContent = Number(targetText) + 1;
}