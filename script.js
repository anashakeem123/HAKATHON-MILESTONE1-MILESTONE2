var buttonToggle = document.getElementById('toggle');
var get = document.getElementById('get');

buttonToggle.addEventListener("click", function () {
    if (get.style.display === 'none') {
        get.style.display = 'block';
    } else {
        get.style.display = 'none';
    }
});

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": {
            "value": 0.5,
            "anim": { "enable": false }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": { "enable": false }
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none"
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    }
});
