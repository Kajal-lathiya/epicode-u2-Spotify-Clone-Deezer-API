//variables
const recents = document.getElementById("recentsearches");
const containerofsearch = document.getElementById("containerofsearch");
let input = document.getElementById("floatingInput");
let inputvalue = document.getElementById("floatingInput").value;
//
input.addEventListener("keyup", getSearch);
async function getSearch(e) {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc1ODhjYTIyNTJhYTAwMTVkNjllYjQiLCJpYXQiOjE2Njg2NDcxMTUsImV4cCI6MTY2OTg1NjcxNX0.qtWzqEc77uBml5A3Uls6MJwHlyeoATIfr2ssavXysVU",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${e.target.value}`,
    options
  );
  const listOfSearch = await response.json();
  return listOfSearch; //                                                       listOfSearchAlbums
}
const fillPageSearch = function (listOfSearch) {
  recents.innerHTML = "";
  for (i = 0; i < 10; i++) {
    containerofsearch.innerHTML += `<div class="col" id="top-buttons">
      <div class="background-card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                  src="${listOfSearch.data[i].album.cover_medium}"
                  class="img-fluid rounded-start aspect-ratio-one-to-one" style="width: 100%"
                  alt="..."
                />
            </div>
            <div class="col-md-8 d-flex align-items-center">
            <div class="card-body d-flex align-items-center justify-content-between">
                <p class="card-title text-truncate">${listOfSearch.data[i].album.title}</p>
                <a href="/Album/album.html?songId=${listOfSearch.data[i].album.id}"><i class="fa-solid fa-circle-play fa-2xl"></i></a>
            </div>
          </div>
      </div>
    </div>
  </div>`;
  }
};
// function searchURL(){
//     window.location = "http://www.myurl.com/search/" + (input text value);
//   }

//                      JS  FOR CARDS
{
  /*
<div class="row g-3" id="midsidecards">
  <h3>Top Result</h3>
  <div class="col">
    <div class="card" id="darker" style="max-width: 30vw">
      <img
        src="https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600"
        class="img-fluid rounded-start p-2"
        style="height: 25%; width: 25%"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Song</h5>
        <p class="card-text">Lorem ipsum...</p>
      </div>
    </div>
  </div>
</div>
<div class="row" style="width: 60vw">
  <h3>Songs</h3>
  <div
    class="d-flex justify-content-between align-items-center songlistDiv px-2"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div class="numbers d-flex justify-content-flex-end px-2">
        ${[i + 1]}
      </div>
      <div class="align-content-center">
        <div class="fw-bold m-0 pt-2 px-2">${ songArr[i].title }</div>
        <div class="pb-2 px-2 artistName">
          ${ songArr[i].artist.name }
        </div>
      </div>
    </div>
    <div class="pl-4">${songArr[i].duration}</div>
  </div>
</div>
 */
}
