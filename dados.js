const box = document.querySelector('.box');
const colors = [
    'linear-gradient(90deg, red, yellow)',
    'linear-gradient(90deg, blue, green)',
    'linear-gradient(90deg, pink, purple)',
    'linear-gradient(90deg, orange, cyan)',
];

let index = 0;

setInterval(() => {
    box.style.background = colors[index];
    index = (index + 1) % colors.length;
}, 2000);
const box = document.getElementById('bouncingBox');

        box.addEventListener('click', () => {
            box.style.animation = 'bounce 0.5s forwards';

            setTimeout(() => {
                box.style.animation = '';
            }, 500);
        });