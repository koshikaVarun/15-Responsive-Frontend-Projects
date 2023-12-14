const progress = document.getElementById('progress')// taking the progress in from the html
const prev = document.getElementById('prev')// taking pre button as the prev
const next = document.getElementById('next')// taking the next button as next
const circles = document.querySelectorAll('.circle')// select all the classes in the html

let currentActive = 1 // initially it is 1

next.addEventListener('click', () => {    // next button operation 
    currentActive++ // increment

    if(currentActive > circles.length) { // ensuring that the next should not increment the currentActive 
        currentActive = circles.length   // if exceeds then it set to the circles length
    }

    update()// calling the method 
})

prev.addEventListener('click', () => {
    currentActive-- // decrement

    if(currentActive < 1) { // ensuring that prev should not go beyond the 1 
        currentActive = 1 // if it goes simply set it to 1
    }

    update()// and call the method update
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active') // adding the active to class list 
        } else {
            circle.classList.remove('active')// removing 
        }
    })

    const actives = document.querySelectorAll('.active') // accessing the active class and storing in actives 

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%' // this is width in percentage calculation, main logic 
        // if the length 1/4 * 100 '%' 0.25 * 100 = 25% the width will increase by 25% (blue color)
    if(currentActive === 1) {
        prev.disabled = true // if current is strictly equal to 1 then disable the prev is true in css
    } else if(currentActive === circles.length) {// if current active is equal to the length of the circles then
        next.disabled = true                      // disable is true in css
    } else {
        prev.disabled = false // then color will appears
        next.disabled = false // else true
    }
}