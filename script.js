const activePage = window.location.pathname;
const navLinkss = document.querySelectorAll('.nav-links a').
forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});



