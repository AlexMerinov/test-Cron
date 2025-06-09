document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

});

document.addEventListener('DOMContentLoaded', () => {
    const { body } = document;
    const jsMenuBurger = document.querySelector('.js-menu-burger');
    let winTop = 0;

    jsMenuBurger?.addEventListener('click', (e) => {
        e.preventDefault();

        const html = document.documentElement;
        const isMenuVisible = body.classList.toggle('menu-show');

        if (isMenuVisible) {
            winTop = window.scrollY;
            body.style.top = `-${winTop}px`;
            body.style.setProperty('--wintop', `${winTop}px`);
        } else {
            html.classList.add('scroll-smooth-disabled');
            window.scrollTo(0, winTop);
            html.classList.remove('scroll-smooth-disabled');
            body.style.removeProperty('top');
            body.style.removeProperty('--wintop');
        }
    });
}, { once: true });