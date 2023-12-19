const tagsEl = document.getElementById('tags') 
const textarea = document.getElementById('textarea')

textarea.focus()// this line place the cursor blinking in the textarea

textarea.addEventListener('keyup' , (e)=>// here we can give user defined param  
{
    createTags(e.target.value)// calling the function with params

    if(e.key === 'Enter')
    {
        setTimeout( () =>
        {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input)
{
     // Split the input string into an array using ',' as the separator,
    // remove any leading or trailing white spaces, and create an array of tags
    const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())

    tagsEl.innerHTML =''// clears the content in side the box 

    tags.forEach( tag => 
        {
            const tagEl = document.createElement('span')
            // creating the span element in the html
            tagEl.classList.add('tag')
            // adding the class to the span
            tagEl.innerText = tag
            // Set the text content of the <span> element to the current tag
            tagsEl.appendChild(tagEl)    // Append the <span> element to the 'tagsEl' container 
        })// we have a empty div in the html
}

function randomSelect()
{
    const times = 30

    const interval = setInterval(() =>
    {
        const randomTag = pickRandomTag()// calling the function

        if(randomTag !== undefined)
        {
            highlightTag(randomTag)// calling the function 

            setTimeout(() => 
            {
                unHighlightTag(randomTag)// calling the function 
            }, 100)

        }
    }, 100);
    setTimeout(() =>
    {
        clearInterval(interval)

        setTimeout(() =>
        {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}


function pickRandomTag()
{
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag)
{
    tag.classList.add('highlight')
}
function unHighlightTag(tag)
{
  tag.classList.remove('highlight')// highlight is in the css
}
