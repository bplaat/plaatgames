var game = document.getElementById('game');
if (game) {
    function resize () {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            if (window.innerWidth < game.offsetWidth * window.innerHeight / game.offsetHeight) {
                game.style.transform = 'translateY(' + (window.innerHeight - game.offsetHeight *
                    (window.innerWidth / game.offsetWidth)) / 2 + 'px) scale(' + window.innerWidth / game.offsetWidth + ')';
            } else {
                game.style.transform = 'translateX(' + (window.innerWidth - game.offsetWidth *
                (window.innerHeight / game.offsetHeight)) / 2 + 'px) scale(' + window.innerHeight / game.offsetHeight + ')';
            }
        } else {
            if ((window.innerWidth - 32) < game.offsetWidth * (window.innerHeight - 88) / game.offsetHeight) {
                game.style.transform = 'translateY(' + ((window.innerHeight - 88) - game.offsetHeight *
                    ((window.innerWidth - 32) / game.offsetWidth)) / 2 + 'px) scale(' + (window.innerWidth - 32) / game.offsetWidth + ')';
            } else {
                game.style.transform = 'translateX(' + ((window.innerWidth - 32) - game.offsetWidth *
                ((window.innerHeight - 88) / game.offsetHeight)) / 2 + 'px) scale(' + (window.innerHeight - 88) / game.offsetHeight + ')';
            }
        }
    }
    resize();
    window.addEventListener('resize', resize);

    var wrapper = document.getElementById('wrapper');
    var fullscreen = document.getElementById('fullscreen');
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