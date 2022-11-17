// async function getAllALbums() {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc1ODhjYTIyNTJhYTAwMTVkNjllYjQiLCJpYXQiOjE2Njg2NDcxMTUsImV4cCI6MTY2OTg1NjcxNX0.qtWzqEc77uBml5A3Uls6MJwHlyeoATIfr2ssavXysVU",
//     },
//   };

//   const response = await fetch(
//     `https://striveschool-api.herokuapp.com/api/deezer/q`,
//     options
//   );
//   const albums = await response.json();
//   console.log(albums);
// }
// getAllALbums();
async function getRecords() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "433c07e238msh70338b5f99f1cbcp1c88a0jsn5b40e52db16c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, //later change for ${album id}
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
  <img class="albumImg img-fluid" src="${searchList.cover_medium}"/> 
    </div>
    <div class="albumDetails align-self-end pb-3">
        <p>${searchList.record_type}</p>
       <h1>${searchList.title}</h1>
       <span>
        <img class="bandLogo" src="${searchList.artist.picture}">
       </span>
       <span>${searchList.artist.name}</span>
       <span>${searchList.release_date}</span>
       <span>${searchList.nb_tracks} songs,</span>
       <span>${searchList.duration}</span>
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
    songDiv.innerHTML = `<div class="d-flex justify-content-between align-items-center songlistDiv">
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="p-2">
                            ${[i + 1]}
                                </div>
                        <div class="align-content-center"> 
                            <div class="fw-bold m-0 pt-2 px-2 ">${
                              songArr[i].title
                            }</div>
                            <div class="pb-2 px-2 artistName">${
                              songArr[i].artist.name
                            }</div>
                            </div>
                        </div>
                        <div>
                        ${songArr[i].duration}
                        </div>
                        </div>`;
    songContainer.appendChild(songDiv);
  }
};
