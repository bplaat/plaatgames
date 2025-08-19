window.addEventListener('load', () => {
    const game = document.getElementById('game');
    if (game) {
        function resize () {
            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                if (window.innerWidth < game.offsetWidth * window.innerHeight / game.offsetHeight) {
                    game.style.transform = 'scale(' + window.innerWidth / game.offsetWidth + ')';
                } else {
                    game.style.transform = 'scale(' + window.innerHeight / game.offsetHeight + ')';
                }
            } else {
                if ((window.innerWidth - 32) < game.offsetWidth * (window.innerHeight - 88) / game.offsetHeight) {
                    game.style.transform = 'scale(' + (window.innerWidth - 32) / game.offsetWidth + ')';
                } else {
                    game.style.transform = 'scale(' + (window.innerHeight - 88) / game.offsetHeight + ')';
                }
            }
        }
        resize();
        window.addEventListener('resize', resize);

        const wrapper = document.getElementById('wrapper');
        const fullscreen = document.getElementById('fullscreen');
        fullscreen.addEventListener('click', function (event) {
            event.preventDefault();
            this.blur();
            if (wrapper.requestFullscreen) {
                wrapper.requestFullscreen();
            } else if (wrapper.mozRequestFullScreen) {
                wrapper.mozRequestFullScreen();
            } else if (wrapper.webkitRequestFullscreen) {
                wrapper.webkitRequestFullscreen();
            } else if (wrapper.msRequestFullscreen) {
                wrapper.msRequestFullscreen();
            }
        });
    }
});
