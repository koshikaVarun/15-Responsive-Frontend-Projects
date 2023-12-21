const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) =>  // idx is the index ans passed as the parameter 
{
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`// logic
    }
}
// Certainly! This line of code sets the text content of the `liters` element based on the amount of water remaining to be consumed. 
// Let's break down the code:

// ```javascript
// liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
// ```

// 1. **Calculate Remaining Liters:**
//    - `(250 * fullCups / 1000)`: Calculates the total amount of water consumed in liters.
//  Each small cup represents 250 ml (0.25 liters), so multiplying the number of filled cups (`fullCups`) by 250 and dividing by 1000 converts the total milliliters to liters.
   
// 2. **Subtract from the Goal:**
//    - `2 - (250 * fullCups / 1000)`: Subtracts the total amount of water consumed from the goal of 2 liters. 
// This gives the remaining amount of water to be consumed.

// 3. **Display as Text Content:**
//    - `${2 - (250 * fullCups / 1000)}L`: Converts the calculated remaining amount to a string and appends "L" to indicate liters.

// In summary, this line dynamically calculates and displays the 
// remaining amount of water to be consumed in the `liters` element. It
//  subtracts the total amount of water consumed from the goal of 2 liters and 
//  formats the result as a string with the "L" unit for liters. The `liters` 
//  element likely represents a visual display of the remaining water consumption goal on the web page.