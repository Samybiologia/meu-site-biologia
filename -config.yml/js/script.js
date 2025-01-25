document.querySelectorAll('h2').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Você clicou em: ' + item.textContent);
    });
});

document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('mouseenter', () => {
        section.style.transition = 'background-color 0.3s ease';
        section.style.backgroundColor = '#d9534f';
        section.style.color = '#fff';
    });
    section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = '';
        section.style.color = '';
    });
});
