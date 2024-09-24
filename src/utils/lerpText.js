export function lerpText(text, containerId) {
    const scrollingTextElement = document.getElementById(containerId);

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        const spanElement = document.createElement('span');
        spanElement.setAttribute('data-scroll', '');
        // spanElement.setAttribute('data-scroll-direction', 'horizontal');
        spanElement.setAttribute('data-scroll-delay', (i * 0.02).toFixed(2));
        // spanElement.setAttribute('data-scroll-speed', '6');
        spanElement.textContent = char;

        if (scrollingTextElement) {
            scrollingTextElement.appendChild(spanElement);
        }
    }
}


export function lerpTextPerSpace({ text, containerId, spacing, speed, horizontal, delay }) {
    const scrollingTextElement = document.getElementById(containerId);
    const words = text.split(' ');

    words.forEach((word, index) => {
        if (scrollingTextElement) {
            const spanElement = document.createElement('span');
            spanElement.setAttribute('data-scroll', '');
            if (index == 0) {
                spanElement.setAttribute('data-scroll-delay', (0.5 * delay).toFixed(2));
            } else if (index === words.length - 1) {
                spanElement.setAttribute('data-scroll-delay', (0.5 * delay).toFixed(2));

            }
            else {
                spanElement.setAttribute('data-scroll-delay', (index * delay).toFixed(2));
            }

            if (horizontal) {
                spanElement.setAttribute('data-scroll-direction', 'horizontal');
            }
            spanElement.style.marginRight = spacing;
            spanElement.setAttribute('data-scroll-speed', speed.toString());
            spanElement.textContent = word + ' '; 

            scrollingTextElement.appendChild(spanElement);
        }

    });
}