const sounds = ['rain', 'wind', 'beach', 'forest', 'fire']

sounds.forEach(sound => { // sound is the placeholder for the array elements 
    const btn = document.createElement('button')// we are creating the button in the html // for every loop the sound place changes accordingly
    btn.classList.add('btn') // and adding the class btn 
    btn.innerText =sound // the inner text will be the sound like ( rain )

    btn.addEventListener('click', () => { // adding the click event 
        stopSongs() // calling the stop method 
        document.getElementById(sound).play() // playing the current song / sound 
    })
    document.getElementById('buttons').appendChild(btn) // the div we first created with id = buttons we are calling and appending the child btn 
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)// creating the song var for the id= sound

        song.pause()
        song.currentTime = 0;
    })
}