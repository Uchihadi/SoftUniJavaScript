// Example of mouseOver type & function declare
// Code runs if we mouse hover for example
// Result: Change of background color button, change of color of text content of button

const button = document.getElementsByTagName('div')[0];
button.addEventListener('mouseover', function(e) {
    const style = e.currentTarget;
    const {
        backgroundColor
    } = style;
    if (backgroundColor === 'white') {
        targetStyles.backgroundColor = '#234465';
        targetStyles.color = 'white';
    } else {
        targetStyles.backgroundColor = 'white';
        targetStyles.color = '#234465';
    }
});