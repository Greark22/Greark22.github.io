function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Chama a função para definir um gradiente ao carregar a página
setGradient();

// Altera o gradiente a cada 3 segundos
setInterval(setGradient, 3000);