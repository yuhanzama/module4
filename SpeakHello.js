(function(window) {
    var helloSpeaker = {}; // Create an object called 'helloSpeaker'

    var speakWord = "Hello";

    // Attach the 'speak' method to the 'helloSpeaker' object
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };

    // Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;

})(window);
