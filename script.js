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

songList.onclick = (e) => {
    const clickedItem = e.target //each time a list item is clicked on let's call it a clicledItem
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText
    console.log(clickedItem.innerText)

    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
    document.getElementById('currentSong').innerText = clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}