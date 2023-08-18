// Add names to the names array
names.push("John");
names.push("Jane");
names.push("Alex");
names.push("Jasmine");
names.push("Michael");

// Loop through the names and call the appropriate functions
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        // Call the function from SpeakGoodBye.js
        byeSpeaker.speak(names[i]);
    } else {
        // Call the function from SpeakHello.js
        helloSpeaker.speak(names[i]);
    }
}
