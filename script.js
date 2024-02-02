let container = document.getElementById("eminem");
console.log(container)

let modalBtn = document.getElementById("em-modal")

let modalBody = document.querySelector(".modal-body");
console.log(modalBody)


function loadData(string) {
    //fet
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + string)
        .then((response) => response.json())
        .then((result) => {
            createHtml(result)
        })
        .catch((error) => console.log("error detected :", error))
}

function createHtml(result) {
    //scrivo html
    let allArray = result.data;
    console.log(allArray)
    let array = result.data[0];
    console.log(array)
    // container.style.display = "block";
    let picEm = array.artist.picture;
    let myImg = document.createElement("img");
    myImg.src = picEm;
    container.appendChild(myImg);
    let album = array.album.title;
    let myAlbum = document.createElement("span");
    myAlbum.innerText = album;
    container.appendChild(myAlbum);
    for (const songs of allArray) {
        console.log(songs.title)
        let allSongs = songs.title;
        let myli = document.createElement("li");
        myli.innerText = allSongs;
        myli.style.color = "black";
        modalBody.appendChild(myli);
    }
}

loadData('eminem')