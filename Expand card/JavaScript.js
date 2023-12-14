const panels = document.querySelectorAll('.panel')// giving all the panel to the panels var or const 

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // we are calling the function 
        panel.classList.add('active')// adding active 
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')// removing the active 
    })
}
// here the simple logic is that the click event 