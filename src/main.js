import { createNavbar } from './components/navbar.js';
import { useCursor } from './utils/cursor.js';
import { runIntro } from './utils/intro.js';
import { lerpTextPerSpace } from './utils/lerpText.js';
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


const projects = [
    {
        title: "Mikiflix",
        description: "Mikiflix a Free anime streaming site where you can watch your favourite anime online powered by Sveltekit",
        image: "static/projects/mikiflix.png",
        link: "https://github.com/hansfigo/mikiflix-v2",
    },
    {
        title: "AI-chan",
        description: "Meet Ai-chan, chatbot with a tsundere personality! Enjoy playful and entertaining conversations with a virtual friend that can be both sweet and sassy. Experience the latest in AI technology today!",
        image: "static/projects/ai.png",
        link: "https://tsundere-gpt.vercel.app/login",
    },
    {
        title: "Creature",
        description: "The medium for 3D interest and the creator",
        image: "static/projects/creature.png",
        link: "https://creature-v1.vercel.app/",
    },
];

const projectContainer = document.getElementById("project-list");

if (projectContainer) {
    projects.forEach((project) => {
        const projectElement = `
                    <a href="${project.link}" target="_blank" class="flex flex-col project-card">
                            <div class="project-image-wrapper">
                                <img src="${project.image}" alt="project-image" class="project-image">
                            </div>
                            <h3 class="project-title poppins-bold">${project.title}</h3>
                            <span class="project-description poppins-light">${project.description}</span>
                    </a> `;

        projectContainer.innerHTML += projectElement;
    });
}

var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    repeat: true,
    smartphone: {
        smooth: true
    }
});

(function () {


    scroll.on('call', (func, status) => {
        const section2Element = document.querySelector('.section-2');
        const section3Element = document.querySelector('.section-3');

        const section = {
            section2: 'section-2',
            section3: 'section-3',
        }

        if (func === section.section2) {
            if (status === 'enter') {
                section2Element.style.transition = 'all 1s ease-in-out';
                section2Element.style.opacity = '1';
            } else {
                section2Element.style.transition = 'all 300ms ease-in-out';
                section2Element.style.opacity = '0';
            }
        }

        if (func === section.section3) {
            if (status === 'enter') {
                section3Element.style.transition = 'all 1s ease-in-out';
                section3Element.style.opacity = '1';
            } else {
                section3Element.style.transition = 'all 300ms ease-in-out';
                section3Element.style.opacity = '0';
            }
        }
    });
})();


var svg = document.getElementById('my-svg');


var hamburgerPopover = document.querySelector('.hamburger-popper');


var anchors = document.querySelectorAll('.hamburger-popper a');
var desktopAnchors = document.querySelectorAll('.nav-links a');


desktopAnchors.forEach(function (anchor) {
    anchor.addEventListener('click', function () {
        var targetId = anchor.innerHTML.toLowerCase();

        var target = document.getElementById(targetId);

        if (target) {
            scroll.scrollTo(target, {
                offset: -140
            });
        }

    });
});

anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function () {

        const timeout = 10

        anime({
            targets: '#my-circle',
            scale: 0,
            translateX: 0,
            translateY: 0,
            transformOrigin: ['top', 'right'],
            duration: timeout,
        });

        const myCircle = document.getElementById('my-circle');

        if (myCircle) {

            myCircle.style.display = 'none';
        }

        hamburgerPopover.style.display = 'none';

        var targetId = anchor.innerHTML.toLowerCase();

        var target = document.getElementById(targetId);

        if (target) {
            scroll.scrollTo(target, {
                offset: -140
            });
        }

    });
});


var closeButton = document.getElementById('close-btn');


closeButton.addEventListener('click', function () {
    var hamburgerPopover = document.querySelector('.hamburger-popper');

    hamburgerPopover.style.display = 'none';

    const myCircle = document.getElementById('my-circle');

    if (myCircle) {
        myCircle.style.display = 'none';
    }

    const timeout = 100

    anime({
        targets: '#my-circle',
        scale: 0,
        translateX: 0,
        translateY: 0,
        transformOrigin: ['top', 'right'],
        duration: timeout,
    });
});


const hamburgerMenu = document.querySelector('.hamburger-menu');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function () {
        const myCircle = document.getElementById('my-circle');

        if (myCircle) {
            myCircle.style.display = 'block';
        }

        hamburgerPopover.style.display = 'flex';

        anime({
            targets: '#my-circle',
            scale: 20,
            translateX: 0,
            translateY: 0,
            transformOrigin: ['top', 'right'],
            duration: 1000,
        });
    })
}


// initializeMusicPlayer('../../static/loveit.mp3')
createRandomParticles(20)
useCursor()
animate()

