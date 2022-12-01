// Event Propagation: (3 phases)
// Capturing phase: the event goes down to the element
// Target phase: the event reaches the target element
// Bubbling phase: the event bubbles up from the element
// Bubbling vs Targetting

// To catch an event on the capturing phase, we need to set the handler capture option to true.
// During this phase, only the capturers found on the path from the Window to the event target parent are called.
// If this parameter is omitted, its default value is false, and the listener is not a capturer.

// 5 Types of Event Types in DOM API
// Mouse, Keyboard, Touch, Focus, DOM / UI, Form
