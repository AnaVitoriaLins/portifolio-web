document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#c04b6c';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#d1577f';
    });
});
