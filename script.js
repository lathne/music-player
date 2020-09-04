const songs = [
    "beautiful village",
    "childhood nostalgia",
    "elven forest",
    "forest ventures",
    "relaxing nature",
    "western adventures"
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