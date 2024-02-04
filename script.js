let container = document.getElementById("eminem");
console.log(container)
let subContainerEm = document.querySelector(".sub-container.eminem");
subContainerEm.className = "d-flex align-items-center";

let subContainerMet = document.querySelector(".sub-container.metallica");
subContainerMet.className = "d-flex align-items-center";

let subContainerQueen = document.querySelector(".sub-container.queen");
subContainerQueen.className = "d-flex align-items-center";

let searchBar = document.getElementById("searchField");

let btnSearch = document.getElementById("button-search");

let modalBody = document.querySelectorAll(".modal-body");

let modalTitle = document.querySelectorAll(".modal-title");


function loadData(string) {
    //fet
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + string)
        .then((response) => response.json())
        .then((result) => {
            if (string === "eminem") {
                createHtml(result)
            } else if (string === "metallica") {
                createHtml2(result)
            } else if (string === "queen") {
                createHtml3(result)
            }
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
    subContainerEm.appendChild(myImg);
    let album = array.album.title;
    let myAlbum = document.createElement("div");
    myAlbum.innerText = album;
    myAlbum.className = "m-5";
    subContainerEm.appendChild(myAlbum);
    let modalBtn = document.createElement("button");
    modalBtn.style.display = "block";
    modalBtn.style.margin = "auto";
    modalBtn.style.marginTop = "20px";
    modalTitle[0].innerText = album;
    modalTitle[0].style.color = "black";
    modalBtn.innerText = "Brani";
    modalBtn.className = "btn btn-outline-light";
    modalBtn.setAttribute("data-toggle", "modal");
    modalBtn.setAttribute("data-target", "#emModal");
    myAlbum.appendChild(modalBtn);
    for (const songs of allArray) {
        console.log(songs.title)
        let allSongs = songs.title;
        let myli = document.createElement("li");
        myli.innerText = allSongs;
        myli.style.color = "black";
        modalBody[0].appendChild(myli);
    }
}

function createHtml2(result) {
    //scrivo html
    let allArray = result.data;
    console.log(allArray)
    let array = result.data[0];
    console.log(array)
    // container.style.display = "block";
    let picEm = array.artist.picture;
    let myImg = document.createElement("img");
    myImg.src = picEm;
    subContainerMet.appendChild(myImg);
    let album = array.album.title;
    let myAlbum = document.createElement("div");
    myAlbum.innerText = album;
    myAlbum.className = "m-5";
    subContainerMet.appendChild(myAlbum);
    let modalBtn = document.createElement("button");
    modalBtn.style.display = "block";
    modalBtn.style.margin = "auto";
    modalBtn.style.marginTop = "20px";
    modalTitle[1].innerText = album;
    modalTitle[1].style.color = "black";
    modalBtn.innerText = "Brani";
    modalBtn.className = "btn btn-outline-light";
    modalBtn.setAttribute("data-toggle", "modal");
    modalBtn.setAttribute("data-target", "#metModal");
    myAlbum.appendChild(modalBtn);
    for (const songs of allArray) {
        console.log(songs.title)
        let allSongs = songs.title;
        let myli = document.createElement("li");
        myli.innerText = allSongs;
        myli.style.color = "black";
        modalBody[1].appendChild(myli);
    }
}


function createHtml3(result) {
    //scrivo html
    let allArray = result.data;
    console.log(allArray)
    let array = result.data[0];
    console.log(array)
    // container.style.display = "block";
    let picEm = array.artist.picture;
    let myImg = document.createElement("img");
    myImg.src = picEm;
    subContainerQueen.appendChild(myImg);
    let album = array.album.title;
    let myAlbum = document.createElement("div");
    myAlbum.innerText = album;
    myAlbum.className = "m-5";
    subContainerQueen.appendChild(myAlbum);
    let modalBtn = document.createElement("button");
    modalBtn.style.display = "block";
    modalBtn.style.margin = "auto";
    modalBtn.style.marginTop = "20px";
    modalTitle[2].innerText = album;
    modalTitle[2].style.color = "black";
    modalBtn.innerText = "Brani";
    modalBtn.className = "btn btn-outline-light";
    modalBtn.setAttribute("data-toggle", "modal");
    modalBtn.setAttribute("data-target", "#queenModal");
    myAlbum.appendChild(modalBtn);
    for (const songs of allArray) {
        console.log(songs.title)
        let allSongs = songs.title;
        let myli = document.createElement("li");
        myli.innerText = allSongs;
        myli.style.color = "black";
        modalBody[2].appendChild(myli);
    }
}

btnSearch.addEventListener("click", () => {
    loadData(searchBar.value)
    subContainerEm.innerHTML = "";
    subContainerMet.innerHTML = "";
    subContainerQueen.innerHTML = "";
})