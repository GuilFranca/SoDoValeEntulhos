const cards = document.querySelectorAll('.card__nosssos__servicos');
let animacao = false;


window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const telaLarga = window.innerWidth > 768;

    if(scrollTop > 90 && telaLarga && !animacao) {
        cards.forEach(card => {
            card.classList.add('animate__animated', 'animate__backInLeft');
        });
        animacao = true;
    }
});
