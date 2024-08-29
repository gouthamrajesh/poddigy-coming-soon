document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.reel-video');

    // Pause all videos initially
    videos.forEach(video => {
        video.pause();
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Play the video when it comes into view
                video.play();
            } else {
                // Pause the video and reset to the start when it goes out of view
                video.pause();
                video.currentTime = 0;
            }
        });
    }, {
        threshold: 0.5 // Adjust this to play video when 50% of it is in view
    });

    // Observe each video
    videos.forEach(video => {
        observer.observe(video);
    });
});
