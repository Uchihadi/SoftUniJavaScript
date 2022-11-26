// Event Loop, Event Type, Event Object Properties & Methods
// Handling events

// attaching an event listener
button.addEventListener('click', () => {
    console.log('Button clicked.');
    });

// removing an event listener
    button.removeEventListener('click', () => {
        console.log('Button event listener removed.');
        });

// Event types: document.addEventListener('click', getEventType);
// Event object - properties and methods
// preventDefault: event.preventDefault();
// stopPropagation: event.stopPropagation();
// Handling Events: Attaching event listener