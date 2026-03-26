const carrusel = document.querySelector('.tarjetas')
carrusel.addEventListener('wheel', function(evento) {
    carrusel.scrollLeft += evento.deltaY
})
document.getElementById('boton-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('menu-active')
})
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    }
})
const botones = document.querySelectorAll('button[data-genero]')
const tarjetas = document.querySelectorAll('.tarjeta')
botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const genero = boton.getAttribute('data-genero')
        tarjetas.forEach(function(tarjeta) {
           if (genero === 'todos') {
    tarjeta.style.display = 'block'
} else if (tarjeta.getAttribute('data-genero').includes(genero)) {
    tarjeta.style.display = 'block'
} else {
    tarjeta.style.display = 'none'
}
})
    })
})