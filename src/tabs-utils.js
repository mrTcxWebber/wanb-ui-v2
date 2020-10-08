let prev = Date.now();


function fallback(fn) {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

const root = window

const iRaf = root.requestAnimationFrame || fallback;

const iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
    return iRaf.call(root, fn);
}

// double raf for animation
function doubleRaf(fn) {
    raf(() => {
        raf(fn);
    });
}

function cancelRaf(id) {
    iCancel.call(root, id);
}

let scrollLeftRafId = 0;

/*
scroller: HTMLElement,
to: number,
duration: number
*/
export function scrollLeftTo(scroller, to, duration) {
    cancelRaf(scrollLeftRafId);

    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 0.3 : Math.round((duration * 1000) / 16); // 0.3s 19 1秒内要移动多少次

    function animate() {
        scroller.scrollLeft += (to - from) / frames; // 每帧移动

        if (++count < frames) {
            scrollLeftRafId = raf(animate);
        }
    }

    animate();
}