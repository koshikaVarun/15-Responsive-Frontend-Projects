const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small> 
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>S
        <div class="key">
            ${event.code} 
            <small>event.code</small>
        </div>
    `;
});
// So, in simpler terms:

// Getting the Element:

// We find a spot on the webpage, a special area with the name 'insert', where we want to put some information.
// Listening for Key Presses:

// We tell the computer, "Listen for when someone pushes a key on the keyboard."
// Displaying Key Information:

// When a key is pressed, we make little boxes on the webpage to show:
// What key was pressed (or if it's the spacebar, we write 'Space').
// The number code for that key.
// Another code that represents the key.
// So, when you press a key, the computer updates the webpage to show information about that key in these little boxes!