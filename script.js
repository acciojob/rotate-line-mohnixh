
const line = document.getElementById('line');

let angle = 0;


function rotateLine() {

    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    
    angle += 2;
    if (angle >= 360) {
        angle = 0;
    }
}

setInterval(rotateLine, 20);