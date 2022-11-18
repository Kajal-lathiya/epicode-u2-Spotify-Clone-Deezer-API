//format the time for h mm
function formatTime(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

async function getAllALbums() {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc1ODhjYTIyNTJhYTAwMTVkNjllYjQiLCJpYXQiOjE2Njg2NDcxMTUsImV4cCI6MTY2OTg1NjcxNX0.qtWzqEc77uBml5A3Uls6MJwHlyeoATIfr2ssavXysVU",
    },
  };

  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/412`,
    options
  );
  const albums = await response.json();
  console.log(albums);
  console.log(albums.tracklist);
}
getAllALbums();
const params = new URLSearchParams(window.location.search);
const songId = params.get("songId");
async function getRecords() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "433c07e238msh70338b5f99f1cbcp1c88a0jsn5b40e52db16c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await fetch(
    //`https://striveschool-api.herokuapp.com/api/deezer/album/73183162`, //later change for ${album id}

    `https://striveschool-api.herokuapp.com/api/deezer/album/${songId}`, //later change for ${album id}

    options
  );

  const searchList = await response.json();
  console.log(searchList);
  return searchList; // taking the album array
}

window.onload = async () => {
  const searchList = await getRecords();
  console.log(searchList);
  displayAlbum(searchList);
  displaySongs(searchList);
};

const albumdiv = document.querySelector("#albumcontainer");
const displayAlbum = async (searchList) => {
  albumdiv.innerHTML += `<div class="px-3 py-2">
  <img class="albumImg img-fluid" src="${searchList.cover_big}"/> 
    </div>
    <div class="albumDetails align-self-end pb-3">
        <p>Album</p>
       <h1>${searchList.title}</h1>
       <span>
        <img class="bandLogo" src="${searchList.artist.picture}">
       </span>
       <span ><a class="artist" href="../Artist/artist.html?songId=${
         searchList.artist.id
       }">${searchList.artist.name}</a></span>
       <span>${searchList.release_date}</span>
       <span>${searchList.nb_tracks} songs,</span>
       <span>${formatTime(searchList.duration)}</span>
     </div>                         
 </div>
 </div>`;
};

const songContainer = document.querySelector(".songList");
const displaySongs = async (searchList) => {
  const songArr = searchList.tracks.data;
  console.log(songArr);

  //   songArr.forEach(() => {
  //     const songDiv = document.createElement("div");
  //     songDiv.innerHTML = `${searchList.tracks.data.title}`;
  //     songContainer.appendChild(songDiv);
  //   });

  for (i = 0; i < songArr.length; i++) {
    const songDiv = document.createElement("div");
    songDiv.innerHTML = `<div class="d-flex justify-content-between align-items-center songlistDiv px-2">
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="numbers d-flex justify-content-flex-end px-2">
                            ${[i + 1]}
                                </div>
                        <div class="align-content-center"> 
                            <div class="fw-bold m-0 pt-2 px-2 ">${
                              songArr[i].title
                            }</div>
                            <div class="pb-2 px-2 "><a class="artistName" href="../Artist/artist.html?songId=${
                              songArr[i].artist.id
                            }">${songArr[i].artist.name}</a></div>
                            </div>
                        </div>
                        <div class="pl-4">
                        ${formatTime(songArr[i].duration)}
                        </div>
                        </div>`;
    songContainer.appendChild(songDiv);
  }
};

//extract song duration from second string
const seconds = 600;
//console.log(new Date(seconds * 1000).toISOString().slice(15, 19));

//extract album duration from second string
const albumseconds = 2313;
//console.log(new Date(albumseconds * 1000).toISOString().slice(12, 19));
