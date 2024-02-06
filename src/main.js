import { createNavbar } from './components/navbar.js';
import { useCursor } from './utils/cursor.js';
import { runIntro } from './utils/intro.js';
import { lerpText, lerpTextPerSpace } from './utils/lerpText.js';
import { initializeMusicPlayer } from './utils/musicPlayer.js';
import { createRandomParticles } from './utils/particle.js';
import { animate } from './utils/three-js.js';

runIntro();

lerpTextPerSpace({
    text: "Don't Boo me , i know i'm not a Pro 👻",
    containerId: "hero-main-text",
    spacing: "0.8rem",
    speed: 6,
    delay: 0.2,
});

lerpTextPerSpace({
    text: "Hans Figo | Junior Frontend Developer",
    containerId: "hero-name",
    spacing: "0.4rem",
    speed: 2.5,
    delay: 0.05,
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");
    const navbar = createNavbar("navbar");

    if (navbar) {
        navbarContainer.appendChild(navbar);
    }
});

(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        repeat: true,
        smartphone: {
            smooth: true
        }
    });

    scroll.on('call', (func, status) => {
        const section2Element = document.querySelector('.section-2');

        console.log(status);
        if (section2Element) {
            if (status === 'enter') {
                section2Element.style.transition = 'all 1s ease-in-out';
                section2Element.style.opacity = '1';
            } else {
                section2Element.style.transition = 'all 300ms ease-in-out';
                section2Element.style.opacity = '0';
            }
        }
    });
})();

initializeMusicPlayer('../../static/loveit.mp3')

var svg = document.getElementById('my-svg');

let svgToggle = false

svg.addEventListener('click', function () {

    if (svgToggle) {
        svgToggle = !svgToggle
        anime({
            targets: '#my-svg',
            scale: 1,
            translateX: 0, // Setel ke 0 agar tidak bergeser
            translateY: 0, // Setel ke 0 agar tidak bergeser
            transformOrigin: ['top', 'right'], // Tetapkan titik pusat transformasi ke pojok kanan atas
            duration: 1000, // Durasi animasi dalam milidetik
        });
    } else {
        svgToggle = !svgToggle
        anime({
            targets: '#my-svg',
            scale: 100,
            translateX: 0, // Setel ke 0 agar tidak bergeser
            translateY: 0, // Setel ke 0 agar tidak bergeser
            transformOrigin: ['top', 'right'], // Tetapkan titik pusat transformasi ke pojok kanan atas
            duration: 1000, // Durasi animasi dalam milidetik
        });
    }

})


createRandomParticles(20)
useCursor()
animate()

