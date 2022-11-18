// fetchArtistAPI = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
//       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   };
//   const response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/deezer/artist/412",
//     options
//   );
//   const result = await response.json();
//   const trackList = await fetchtackList(result.tracklist);
//   renderTracklist(trackList);
//   return result;
// };
fetchtackList = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log("result:", result);

  return result;
};

const params = new URLSearchParams(window.location.search);
const songId = params.get("songId");
fetchArtistAPI = async () => {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${songId}`,
    options
  );
  const result = await response.json();
  console.log("result--->", result);
  const trackList = await fetchtackList(result.tracklist);
  renderTracklist(trackList);
  return result;
};
fetchtackList = async (url) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
renderTracklist = ({ data, next }) => {
  console.log("data:", data);
  const trackList = document.getElementById("track-list");
  data.map(
    ({ title, rank, duration, album }, index) =>
      (trackList.innerHTML += `<div class="d-flex justify-content-between mt-2">
        <div class="trackTitle">
        
        <span class="indexonhover">${index + 1}</span>
        
        <img src=${album.cover_xl} class="artistImage"/>
        <span class="songname">${title}</span>
        </div>
        <p>${rank}</p>
        <p>${duration}</p>
        </div>`)
  );

  const div = document.createElement("div");
  div.textContent = "SEE MORE";
  div.id = "see-more";
  div.style.cursor = "pointer";
  div.onclick = () => onClickSeeMore(next);
  trackList.appendChild(div);
};

onClickSeeMore = async (url) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "_abck=23BCF4BFE302D0BA10580B6A57204668~-1~YAAQLysoFzdz0l2EAQAAKlZIgAijFMmGJ4KLhT6sRLcJau1FGlqdm7TSEa08SxHtksq2YK4A0QvVVPNaTLgDaevgl/x39j0FUMPtGhyfnULtuiXCWmxamF3E4jQ5Q3qVdRJdLj+XlcFGNXrT7DDb3qNy+m9k4Vn2jkx6WFXJPoE6BXKwwTqR7cpkmC6wNzRyIiXRTvYXJJi8bmjzH1ILSdaT6lawAQuhXzgbcgQSngHLdxyrs12d0YJMcd3rb26SmNLLXT5VFxBQIkm2InffBM2HfYEYCuMvozaqntVLxNwKoaHvTqY2XzbVKkTzV6zOwXDjAqyU0kYRG4N4BVY4X4AER7p+IQpZYhuYi0j9e6KVi4Cj0zVohuc=~-1~-1~-1; ak_bmsc=2E856C9E257A3F9A56E44DACD4ACDB67~000000000000000000000000000000~YAAQLysoFzhz0l2EAQAAKlZIgBHvB6zdt2PXPyckySohTl6YhojJ3esdQHFFYEIpur4bsUmBhpMWdQLkaFDmIxt7sNqF6x/PcRM+nVG3Cbp1JpnyEdJ82c71Lh18MsSsDiJVwTkHEjEVOe7yTMAtPgggt4C6FhnPBv6kfz6eiiYF2iWjowx+n/nXxOiZovccfe0swr2Lj26mKyM41RLC42P7LwNa1VlHyr7xRlVnQfFhS9sHJvdyM1Tikvd2eCCWkp5Rzi2vNIUOAiJAQe3jgVP6lfpfNik9EV+tJROxHChwdg+adlMAQzNzf7fjr85AIPN+x1vZqENFn1fceEjrpNoXSpmd9uJMZeFD5sRPzzlH1xPUuftTRJUgtQ==; bm_sz=B975B7C5D24F7BAE59D60D1A58BD33BB~YAAQLysoFzlz0l2EAQAAKlZIgBGLXiZV512OnYhZcCG8eF/4cFLIKrQuxN+Cqqcj9GMnQOiiJ2Gay62lRsKsN7HTHLGb7IF5P7w9n6LKWZ6zyU3qEU2vWXjElj31PV+nn+KQxhDL3o9+kK5mbYyyBz/TN249YmDevwK+66l5Zq9DRLxj/X3wv57nRjrk+c82+/FUqXCSyF3o4EwHn4jcQHT9dKFaNpSp3uto71Vtm0qnvKnUleRFKnPGzv1owYpvCXfG47L46lsMQhxJPmXECVLAsxA2VvRXPf1H7G1USxp0lRE=~3486264~3491124; dzr_uniq_id=dzr_uniq_id_frfc613e1b0dfc1607ca2f4afa7a97a651b1aec7"
  );
  const options = {
    method: "GET",
    Headers: myHeaders,
  };
  const response = await fetch(
    "https://api.deezer.com/artist/412/top?index=5",
    options
  );
  const result = await response.json();
  return result;
};
renderartist = ({ name, picture_xl, nb_fan, radio, type }) => {
  const artistInfo = document.getElementById("artist-info");
  artistInfo.innerHTML = `<div class="bg-image" style="background-image: url(${picture_xl}); ">
    <div class="header row d-flex justify-content-between">
      <span
        ><i class="fa-solid fa-chevron-left chevrons"></i
        ><i class="fa-solid fa-chevron-right chevrons"></i
      ></span>
      
  <div class="mr-3 d-flex align-items-center">
  <div class="mr-2"><button
  type="button"
  class="btn btn-outline-dark text-light"
  style="border-radius: 20px"
>
  Upgrade
</button></div>
  <span class="d-flex mr-3 p-2" id="nav-user">
    <span class="d-flex align-items-center">
      <img
        src="https://i.pinimg.com/564x/08/35/96/083596835424340eda90439fd20e5ee9.jpg"
        style="width: 30px; height: 30px; border-radius: 50%"
      />

      &nbsp;&nbsp;Gh0stxt&nbsp;&nbsp;<i
        class="fa-solid fa-caret-down"
      ></i>
    </span>
  </span></div>
    </div>
    <div class="ml-3 mt-2">
     ${
       radio &&
       `<img src="../Assets/verified.png" class="verifiedLogo" />
        <span>Verified Artist</span>`
     }
        <h1 class="font40">${name}</h1>
        <p class="font-weight-bolder">${nb_fan} monthly listeners</p>
    </div>
</div>`;

  const artistPick = document.getElementById("artistPick");
  const divNode = document.createElement("div");
  divNode.className = "d-flex";
  divNode.classList.add = "mt-2";
  divNode.innerHTML = ` <div class="d-flex mt-3"><img src=${picture_xl} class="image60" style="border-radius: 50%;" />
<div class="ml-2">
  <div class="artistPic">
      <img src="https://i.pinimg.com/564x/08/35/96/083596835424340eda90439fd20e5ee9.jpg" class="image20" />
      <span class="fontsize12">Posted by ${name}</span>
  </div>
  <h6 class="font-weight-bolder fontsize12">${name}</h6>
  <p class="fontsize12">Playlist</p>
</div></div>`;
  artistPick.appendChild(divNode);
};
window.onload = async () => {
  const artistList = await fetchArtistAPI();
  renderartist(artistList);
};
