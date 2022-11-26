// Stack : Functions execute after functions until stack finished
// Function is placed in event queue until the prev function settled

// Heap is the place where objects are stored when we define variables.

// call stack is a mechanism JavaScript uses to keep track of functions.
// When we call a function, JavaScript will add that function to the call stack.

// JS = Single thread language (one call stack and heap at same time)
// Handles multiple ops on one thread
// the event creates a new function that is a callback function.

// Event Propagation: (3 phases)
// Capturing phase: the event goes down to the element
// Target phase: the event reaches the target element
// Bubbling phase: the event bubbles up from the element
// Bubbling vs Targetting

// To catch an event on the capturing phase, we need to set the handler capture option to true.
// During this phase, only the capturers found on the path from the Window to the event target parent are called.
// If this parameter is omitted, its default value is false, and the listener is not a capturer.