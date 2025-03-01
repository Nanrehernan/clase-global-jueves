let boton = document.getElementById('btn-theme');

boton.addEventListener('click', (e) => {
    let body = document.body;
    body.classList.toggle('dark-mode');
    e.target.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.addEventListener('load', () => {
    let body = document.body;
    let theme = localStorage.getItem('theme');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        boton.textContent = 'Modo Claro';
    }
});


// Boton menu
let btnMenu = document.getElementById('btn-menu');
let menu = document.querySelector('nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});