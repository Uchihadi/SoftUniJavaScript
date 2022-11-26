// Capturing & Bubbling allows us to implement event handling pattern
// Alot of elements handled in similar way, we put a single handler on common ancestor
// In the handler, we use event.target to see where the event actually happened, and we handle it.

//we add an event listener to our parent, which is the <ul> element.
<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
</ul>

document.getElementById('parent-list')
    .addEventListener('click', function(event) {
        if (event.target && event.target.nodeName == 'LI') {
            console.log(
                'List item', event.target.id,
                ' was clicked!');
        }
    });
    
// If statement, we add a condition, so that if we click on a <li> element, the console.log() method will display a message telling us exactly on which element we clicked.
// Disadvantage: Not all events bubble up, child stops propagation
// May cause high CPU Load