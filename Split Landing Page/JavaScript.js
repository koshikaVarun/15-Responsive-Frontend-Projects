const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))// hover effect for mouse for left with container
left.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'))

right.addEventListener('mouseenter', ()=> container.classList.add('hover-right'))// this is for right with container
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'))