// setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
// setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
let intervalID = setInterval(
    function() {
        console.log('1 sec. passed');
    }, 1000
);

// clearInterval() method clears a timer set with the setInterval() method.
clearInterval(intervalID);