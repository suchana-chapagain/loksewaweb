const navLinkEls = document.querySelectorAll('.nav-links a');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    // Exclude links with href="#"
    if(navLinkEl.getAttribute('href') !== '#' && (windowPathname === navLinkPathname || (windowPathname === '/index.html' && navLinkPathname === '/'))) {
        navLinkEl.classList.add('active');
    }
});



