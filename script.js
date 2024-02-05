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
                createHtml(result, 0)
            } else if (string === "metallica") {
                createHtml(result, 1)
            } else if (string === "queen") {
                createHtml(result, 2)
            }
        })
        .catch((error) => console.log("error detected :", error))
}

function createHtml(result, artistIndex) {
    //scrivo html
    let allArray = result.data;
    console.log(allArray)
    let array = result.data[0];
    console.log(array)

    let subContainer;
    let modalTitleIndex;

    // container.style.display = "block";
    if (artistIndex === 0) {
        subContainer = subContainerEm;
        modalTitleIndex = 0;
    } else if (artistIndex === 1) {
        subContainer = subContainerMet;
        modalTitleIndex = 1;
    } else if (artistIndex = 2) {
        subContainer = subContainerQueen;
        modalTitleIndex = 2;
    }
    let pic = array.artist.picture;
    let myImg = document.createElement("img");
    myImg.src = pic;
    subContainer.appendChild(myImg);
    let album = array.album.title;
    let myAlbum = document.createElement("div");
    myAlbum.innerText = album;
    myAlbum.className = "m-5";
    subContainer.appendChild(myAlbum);
    let modalBtn = document.createElement("button");
    modalBtn.style.display = "block";
    modalBtn.style.margin = "auto";
    modalBtn.style.marginTop = "20px";
    modalTitle[modalTitleIndex].innerText = album;
    modalTitle[modalTitleIndex].style.color = "black";
    modalBtn.innerText = "Brani";
    modalBtn.className = "btn btn-outline-light";
    modalBtn.setAttribute("data-toggle", "modal");
    modalBtn.setAttribute("data-target", `#${result.data[0].artist.name.toLowerCase()}Modal`);
    myAlbum.appendChild(modalBtn);
    for (const songs of allArray) {
        console.log(songs.title)
        let allSongs = songs.title;
        let myli = document.createElement("li");
        myli.innerText = allSongs;
        myli.style.color = "black";
        modalBody[modalTitleIndex].appendChild(myli);
    }
}


btnSearch.addEventListener("click", () => {
    loadData(searchBar.value.toLowerCase())
    subContainerEm.innerHTML = "";
    subContainerMet.innerHTML = "";
    subContainerQueen.innerHTML = "";
})