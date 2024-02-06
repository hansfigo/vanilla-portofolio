function strokeFillAnimation() {
    const path = document.querySelector('#svgGroup path');

    const initialStroke = path.getAttribute('stroke');

    path.setAttribute('stroke', 'none');

    const length = path.getTotalLength();

    path.setAttribute('stroke', initialStroke);

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    anime({
        targets: path,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCubic',
        duration: 1600,
        direction: 'alternate',
        loop: true,
    });
}

export const runIntro = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const loadingElement = document.getElementById("loading");

        strokeFillAnimation();

        setTimeout(() => {
            // loadingElement.style.display = "none";
            anime({
                targets: loadingElement,
                easing: 'easeOutQuart',
                top: '1000px',
                loop: true,
            });
        }, 2000);

    });
}


// document.addEventListener("DOMContentLoaded", function () {
//     const loadingElement = document.getElementById("loading");

//     runIntro();

//     const scripts = document.querySelectorAll('script[type="importmap"]');
//     let loadedScripts = 0;

//     function handleLoadStatus() {
//         loadedScripts++;
//         console.log(scripts);
//         if (loadedScripts === scripts.length) {
//             setTimeout(() => {
//                 loadingElement.style.display = "none";
//             }, 1000);
//         }
//     }

//     scripts.forEach(script => {
//         script.addEventListener("load", handleLoadStatus);
//     });
// });
