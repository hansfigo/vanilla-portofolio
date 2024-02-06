export function createRandomParticles(numParticles) {
    for (var i = 0; i < numParticles; i++) {
        var particle = document.createElement('div');
        particle.className = 'particle';


        var randomScrollSpeed = Math.floor(Math.random() * (30 - 4 + 1)) + 4;
        var scrollSpeedString = randomScrollSpeed.toString();

        // Menentukan posisi acak
        var xPos = Math.random() * window.innerWidth;
        var yPos = Math.random() * window.innerHeight;

        // Menentukan warna acak
        var color = getRandomColor();
        particle.style.backgroundColor = color;
        particle.setAttribute('data-scroll', '');
        particle.setAttribute('data-scroll-speed', scrollSpeedString);
        particle.style.position = 'absolute';
        particle.style.left = xPos + 'px';
        particle.style.top = yPos + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.classList.add('particle');

        var randomAnimationDuration = Math.floor(Math.random() * (6 - 2 + 1)) + 2;

        particle.style.animationDuration = randomAnimationDuration + 's';

        document.getElementById('particles').appendChild(particle);
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


