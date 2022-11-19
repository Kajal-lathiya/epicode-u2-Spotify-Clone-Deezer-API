//variables
const topsidecards = document.querySelector("#topsidecards");
const midsidecards = document.querySelector("#midsidecards");
const bottomsidecards = document.querySelector("bottomsidecards");
//--------------------------------------------//
//-------------- SONGS -----------------------//
async function getAlbums() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=pop%20smoke`,
    options
  );

  const listOfSearchAlbums = await response.json();
  return listOfSearchAlbums; //                                                       listOfSearchAlbums
}

const fillPageAlbums = function (listOfSearchAlbums) {
  topsidecards.innerHTML = "";
  for (i = 0; i < 10; i++) {
    topsidecards.innerHTML += `<div class="col" id="top-buttons">
    <div class="background-card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
                src="${listOfSearchAlbums.data[i].album.cover_medium}"
                class="img-fluid rounded-start aspect-ratio-one-to-one" style="width: 100%"
                alt="..."
              />
          </div>
          <div class="col-md-8 d-flex align-items-center">
          <div class="card-body d-flex align-items-center justify-content-between">
              <p class="card-title text-truncate">${listOfSearchAlbums.data[i].album.title}</p>
              <a href="/Album/album.html?songId=${listOfSearchAlbums.data[i].album.id}"><i class="fa-solid fa-circle-play fa-2xl"></i></a>
          </div>
        </div>
    </div>
  </div>
</div>`;
  }
};

async function getArtists() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/464`,
    options
  );
  const response2 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/482`,
    options
  );
  const response3 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/13`,
    options
  );
  const response4 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/412`,
    options
  );
  const response5 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/4841158`,
    options
  );
  const response6 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/1184`,
    options
  );
  const response7 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/458`,
    options
  );
  const response8 = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/45177881`,
    options
  );
  let listOfSearchArtists = await response.json();
  let listOfSearchArtists2 = await response2.json();
  let listOfSearchArtists3 = await response3.json();
  let listOfSearchArtists4 = await response4.json();
  let listOfSearchArtists5 = await response5.json();
  let listOfSearchArtists6 = await response6.json();
  let listOfSearchArtists7 = await response7.json();
  let listOfSearchArtists8 = await response8.json();
  return [
    listOfSearchArtists,
    listOfSearchArtists2,
    listOfSearchArtists3,
    listOfSearchArtists4,
    listOfSearchArtists5,
    listOfSearchArtists6,
    listOfSearchArtists7,
    listOfSearchArtists8,
  ];
}
const fillPageArtists = function ([
  listOfSearchArtists,
  listOfSearchArtists2,
  listOfSearchArtists3,
  listOfSearchArtists4,
  listOfSearchArtists5,
  listOfSearchArtists6,
  listOfSearchArtists7,
  listOfSearchArtists8,
]) {
  for (i = 0; i < 3; i++) {}
  midsidecards.innerHTML = "";
  //useless loop
  midsidecards.innerHTML = ` <div class="col">
    <div class="card" id="darker">
      <a href="/Artist/artist.html?songId=${listOfSearchArtists.id}"><img
        src="${listOfSearchArtists.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists.name}</h5>
        <div
        class="d-flex align-items-baseline justify-content-between"
      >
        <p class="card-text">Chill lofi hip-hop mix.</p>
        <i class="fa-solid fa-play 2-xl"></i>
      </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists2.id}"><img
        src="${listOfSearchArtists2.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists2.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists3.id}"><img
        src="${listOfSearchArtists3.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists3.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists4.id}"><img
        src="${listOfSearchArtists4.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists4.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists5.id}"><img
        src="${listOfSearchArtists5.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists5.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists6.id}"><img
        src="${listOfSearchArtists6.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists6.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists7.id}"><img
        src="${listOfSearchArtists7.picture_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists7.name}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
  midsidecards.innerHTML += ` <div class="col">
    <div class="card" id="darker">
    <a href="/Artist/artist.html?songId=${listOfSearchArtists8.id}"><img
        src="${listOfSearchArtists8.cover_xl}"
        class="img-fluid p-2"
        id="rounded"
        style="height: 100%; min-width: 100%;"
        alt="..."
      /></a>
      <div class="card-body">
        <h5 class="card-title">${listOfSearchArtists8.title}</h5>
        <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p class="card-text">Chill lofi hip-hop mix.</p>
                      <i class="fa-solid fa-play 2-xl"></i>
                    </div>
      </div>
    </div>
  </div>
    `;
};

//-------------- 3rd Row/Bottom Side/Podcasts------------//
// async function getPlaylists() {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
//       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   };
//   const response1 = await fetch(
//     `https://www.deezer.com/en/playlist/9478727382`,
//     options
//   );
//   const response2 = await fetch(
//     `https://www.deezer.com/en/playlist/1306931615`,
//     options
//   );
//   const response3 = await fetch(
//     `https://www.deezer.com/en/playlist/10857536122`,
//     options
//   );
//   const response4 = await fetch(
//     `https://www.deezer.com/en/playlist/7584355422`,
//     options
//   );
//   const response5 = await fetch(
//     `https://www.deezer.com/en/playlist/10331644722`,
//     options
//   );
//   const response6 = await fetch(
//     `https://www.deezer.com/en/playlist/1908130662`,
//     options
//   );

//   const listOfGenres1 = await response1.json();
//   const listOfGenres2 = await response2.json();
//   const listOfGenres3 = await response3.json();
//   const listOfGenres4 = await response4.json();
//   const listOfGenres5 = await response5.json();
//   const listOfGenres6 = await response6.json();
//   return [
//     listOfGenres1,
//     listOfGenres2,
//     listOfGenres3,
//     listOfGenres4,
//     listOfGenres5,
//     listOfGenres6,
//   ];
// }
// const fillPagePlaylists = function ([
//   listOfGenres1,
//   listOfGenres2,
//   listOfGenres3,
//   listOfGenres4,
//   listOfGenres5,
//   listOfGenres6,
// ]) {
//   bottomsidecards.innerHTML = "";
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres1.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres2.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres3.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres4.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres5.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
//   bottomsidecards.innerHTML += `
//     <div class="col-xl-2">
//       <div class="card" id="darker">
//         <img
//           src="${listOfGenres6.picture_big}"
//           class="card-img-top p-2"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Chill</h5>
//           <p class="card-text">Chill lofi hip-hop mix.</p>
//         </div>
//       </div>
//     </div>`;
// };

window.onload = async () => {
  const listOfSearchAlbums = await getAlbums();
  fillPageAlbums(listOfSearchAlbums);

  const listOfSearchArtists = await getArtists();
  fillPageArtists(listOfSearchArtists);

  const listOfGenres = await getPlaylists();
  console.log(listOfGenres);
  fillPagePlaylists(listOfGenres);
};
