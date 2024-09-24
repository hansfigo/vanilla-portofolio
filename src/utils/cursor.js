export function useCursor() {
    const cursor = document.querySelector(".cursor");
    var isMouseMoving = false;

    let timer

    function handleIdle() {
        isMouseMoving = false;
        anime({
            targets: '#cursor',
            borderRadius: '99rem',
            scale: 1
        });
    }


    function resetTimer() {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(handleIdle, 20);
    }


    function throttle(callback, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                callback.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    function animateCursor(e) {
        requestAnimationFrame(() => {
            anime({
                targets: '#cursor',
                top: e.pageY - 18,
                left: e.pageX - 18,
                duration: 1000
            });
        });
    }

    window.onmousemove = throttle(animateCursor, 50);

    window.addEventListener("click", () => {
        anime({
            targets: '#cursor',
            scale: 2,
            duration: 80
        });

        setTimeout(() => {
            anime({
                targets: '#cursor',
                scale: 1,
                duration: 10
            });
        }, 300)

    });

}
