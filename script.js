const songs = [
    "beautiful-village.mp3",
    "childhood-nostalgia.mp3",
    "elven-forest.mp3",
    "forest-ventures.mp3",
    "relaxing-nature.mp3",
    "western-adventures.mp3"
]
//creating an ordered list of items with each of my songs
const createSongList = () => {
    const list = document.createElement('ol')

    for(let i = 0; i <songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())

//playing songs when clicked 
songList.onclick = (e) => {
    const clickedItem = e.target //each time a list item is clicked on let's call it a clickedItem
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText
    console.log(clickedItem.innerText)

//displaying currently playing song
    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
    document.getElementById('currentSong').innerText = clickedItem.innerText

    player.load()
    player.play()
}

//play and pause controls
const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}

//volume slider
const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

//progress bar 
const updateProgress = () => {
    //if statement because there was an "Uncaught type error" on the browser
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}