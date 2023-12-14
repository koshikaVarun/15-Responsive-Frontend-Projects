const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    // calculating the viewport and the bottom to show the box

    boxes.forEach(box => { // for loop
        const boxTop = box.getBoundingClientRect().top
        // gives the position related to the viewport 

        if(boxTop < triggerBottom) {// by comparing the both const we continue the loop with condition
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
// The overall logic checks the position of each box relative to the viewport during scrolling. 
// If a box enters the visible part of the screen 
// (based on the triggerBottom threshold), it adds a 'show' class, triggering a CSS animation. 
// If it goes above the threshold, the 'show' class is removed. This creates a scroll-triggered animation effect for the 
// boxes as the user scrolls down the page.
