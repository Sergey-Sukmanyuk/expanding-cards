const cards = document.querySelectorAll('.card');

const removeActiveClass = () => {
    cards.forEach(item => item.classList.remove('active'))
}

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        removeActiveClass();
    
        e.target.classList.add('active');
    });
})