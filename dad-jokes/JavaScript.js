const jokeE1 = document.getElementById('joke')  // here we are taking the joke from html 
const jokeBtn = document.getElementById('jokeBtn') // here we are taking the jokeBtn from the html

jokeBtn.addEventListener('click', generateJoke) // here we are adding the click event and calling the generate()

generateJoke()
//using async/await

async function generateJoke() // this is the asynchronous function for await 
{
    const config = { // http request 
        headers: {
            Accept: 'application/json',// the client accepts the json file 
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config) //here we are fetching the web and calling the config

    const data = await res.json()// storing the res.json in the data 
    
    jokeE1.innerHTML = data.joke// adding the data to the class joke by the inner html
}

