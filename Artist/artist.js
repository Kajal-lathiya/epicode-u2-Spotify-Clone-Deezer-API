fetchArtistAPI = async() => {
    const options = {
        method: 'GET'
    }
    const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412', options);
    const result = await response.json();
    const trackList = await fetchtackList(result.tracklist);
    console.log('trackList:', trackList);
    renderTracklist(trackList)
    return result;
}
fetchtackList = async(url) => {
    const options = {
        method: 'GET'
    }
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}
renderTracklist = ({ data, next }) => {
    console.log('next:', next);
    const trackList = document.getElementById('track-list');
    data.map(({ title, rank, duration, md5_image }, index) => trackList.innerHTML += `<div class="d-flex justify-content-between mt-2">
        <div class="trackTitle">
        <span>${index + 1}</span>
        <img src="https://glastonbury.davidbowie.com/images/album_cover.png" class="artistImage" />
        <span>${title}</span>
        </div>
        <p>${rank}</p>
        <p>3:34</p>
        </div>`)
    const div = document.createElement('div');
    div.textContent = 'SEE MORE'
    div.id = 'see-more'
    div.style.cursor = 'pointer'
    div.onclick = () => onClickSeeMore(next);
    trackList.appendChild(div)
}

onClickSeeMore = async(url) => {

    let myHeaders = new Headers();
    myHeaders.append("Cookie", "_abck=23BCF4BFE302D0BA10580B6A57204668~-1~YAAQLysoFzdz0l2EAQAAKlZIgAijFMmGJ4KLhT6sRLcJau1FGlqdm7TSEa08SxHtksq2YK4A0QvVVPNaTLgDaevgl/x39j0FUMPtGhyfnULtuiXCWmxamF3E4jQ5Q3qVdRJdLj+XlcFGNXrT7DDb3qNy+m9k4Vn2jkx6WFXJPoE6BXKwwTqR7cpkmC6wNzRyIiXRTvYXJJi8bmjzH1ILSdaT6lawAQuhXzgbcgQSngHLdxyrs12d0YJMcd3rb26SmNLLXT5VFxBQIkm2InffBM2HfYEYCuMvozaqntVLxNwKoaHvTqY2XzbVKkTzV6zOwXDjAqyU0kYRG4N4BVY4X4AER7p+IQpZYhuYi0j9e6KVi4Cj0zVohuc=~-1~-1~-1; ak_bmsc=2E856C9E257A3F9A56E44DACD4ACDB67~000000000000000000000000000000~YAAQLysoFzhz0l2EAQAAKlZIgBHvB6zdt2PXPyckySohTl6YhojJ3esdQHFFYEIpur4bsUmBhpMWdQLkaFDmIxt7sNqF6x/PcRM+nVG3Cbp1JpnyEdJ82c71Lh18MsSsDiJVwTkHEjEVOe7yTMAtPgggt4C6FhnPBv6kfz6eiiYF2iWjowx+n/nXxOiZovccfe0swr2Lj26mKyM41RLC42P7LwNa1VlHyr7xRlVnQfFhS9sHJvdyM1Tikvd2eCCWkp5Rzi2vNIUOAiJAQe3jgVP6lfpfNik9EV+tJROxHChwdg+adlMAQzNzf7fjr85AIPN+x1vZqENFn1fceEjrpNoXSpmd9uJMZeFD5sRPzzlH1xPUuftTRJUgtQ==; bm_sz=B975B7C5D24F7BAE59D60D1A58BD33BB~YAAQLysoFzlz0l2EAQAAKlZIgBGLXiZV512OnYhZcCG8eF/4cFLIKrQuxN+Cqqcj9GMnQOiiJ2Gay62lRsKsN7HTHLGb7IF5P7w9n6LKWZ6zyU3qEU2vWXjElj31PV+nn+KQxhDL3o9+kK5mbYyyBz/TN249YmDevwK+66l5Zq9DRLxj/X3wv57nRjrk+c82+/FUqXCSyF3o4EwHn4jcQHT9dKFaNpSp3uto71Vtm0qnvKnUleRFKnPGzv1owYpvCXfG47L46lsMQhxJPmXECVLAsxA2VvRXPf1H7G1USxp0lRE=~3486264~3491124; dzr_uniq_id=dzr_uniq_id_frfc613e1b0dfc1607ca2f4afa7a97a651b1aec7");
    const options = {
        method: 'GET',
        Headers: myHeaders
    }
    const response = await fetch('https://api.deezer.com/artist/412/top?index=5', options);
    const result = await response.json();
    return result;
}
renderartist = ({ name, picture_medium, nb_fan, radio, type }) => {
        const artistInfo = document.getElementById('artist-info');
        artistInfo.innerHTML = `<div class="bg-image" style="background-image: url(${picture_medium});">
    <div class="header row d-flex justify-content-between">
      <span
        ><i class="fa-solid fa-chevron-left chevrons"></i
        ><i class="fa-solid fa-chevron-right chevrons"></i
      ></span>
        <div class="profile-info">
            <img src="https://glastonbury.davidbowie.com/images/album_cover.png" class="profilePic" />
            <p class="userName">Diego 'Ziba bafggfd'</p>
            <i class="fa-solid fa-caret-down downArrow"></i>
        </div>
    </div>
    <div>
     ${radio && `<img src="../Assets/verified.png" class="verifiedLogo" />
        <span>Verified Artist</span>`}
        <h1 class="font40">${name}</h1>
        <p class="font-weight-bolder">${nb_fan} monthly listeners</p>
    </div>
</div>`
}
window.onload = async () => {
    const artistList = await fetchArtistAPI();
    renderartist(artistList);
}