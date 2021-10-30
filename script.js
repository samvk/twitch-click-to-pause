const observer = new MutationObserver(() => {
    const videoOverlay = document.querySelector('[data-a-target="player-overlay-click-handler"]');
    const video = document.querySelector('video');
    if (videoOverlay && video) {
        let singleClickTrigger;
        videoOverlay.addEventListener('click', event => {
            console.log('CLICK')
            if (event.detail === 1) {
                singleClickTrigger = setTimeout(() => {
                    console.log('REALclick');
                    if (!video.paused) {
                        video.pause();
                    }
                }, 200);
            }
        });

        videoOverlay.addEventListener('dblclick', () => {
            clearTimeout(singleClickTrigger);
        });
    }
});
observer.observe(document, {
  childList: true,
  subtree: true,
});
