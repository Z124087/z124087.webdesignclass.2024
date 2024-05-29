// script.js
let currentAngleX = 0;
let currentAngleY = 0;

function rotateCube(face) {
    switch (face) {
        case 'front':
            currentAngleX = 0;
            currentAngleY = 0;
            break;
        case 'back':
            currentAngleX = 0;
            currentAngleY = 180;
            break;
        case 'left':
            currentAngleX = 0;
            currentAngleY = -90;
            break;
        case 'right':
            currentAngleX = 0;
            currentAngleY = 90;
            break;
        case 'top':
            currentAngleX = -90;
            currentAngleY = 0;
            break;
        case 'bottom':
            currentAngleX = 90;
            currentAngleY = 0;
            break;
    }
    document.querySelector('.cube').style.transform = `rotateX(${currentAngleX}deg) rotateY(${currentAngleY}deg)`;
}
