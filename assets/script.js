const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');
const storedData = localStorage.getItem('playlistData');
const playlistId = localStorage.getItem('playlistId');
const playlistTitle = localStorage.getItem('playlistTitle');
const data = JSON.parse(storedData);

data.forEach((video, i) => {
    let video_element = `
    <div class="video" data-id="${video.id}">
      <img src="images/entertainment-control-button-play.png" alt="">
      <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
      <h3 class="title">${video.title}</h3>
      <p class="time">${video.duration}</p>
    </div>
  `;
    video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/entertainment-control-button-pause-2.png';

videos.forEach(selected_video => {
    selected_video.onclick = () => {
        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/entertainment-control-button-play.png';
        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/entertainment-control-button-pause-2.png';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        let videoId = extractYouTubeVideoId(match_video.link);
        let youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
        main_video.src = youtubeEmbedUrl;
        main_video_title.innerHTML = match_video.title;
    };
});

// Function to extract the YouTube video ID from the link
function extractYouTubeVideoId(url) {
    let videoId = '';
    let match = url.match(/[?&]v=([^?&]+)/);
    if (match) {
        videoId = match[1];
    } else {
        // Handle alternative formats (e.g., youtu.be/VIDEO_ID)
        match = url.match(/youtu\.be\/([^?&]+)/);
        if (match) {
            videoId = match[1];
        }
    }
    return videoId;
}