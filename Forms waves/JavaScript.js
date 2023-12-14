const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText // converting the label to the text content 
    .split(``)
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join(``)//backticks
})
// we are adding the spanning element to the html with a transition delay