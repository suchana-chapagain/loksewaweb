const activePage = window.location.pathname;
const navLinkss = document.querySelectorAll('.nav-links a').
forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});