const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function hideOrShowContactForm(){
    const contactForm = document.getElementById('contact_form');
    if (!contactForm) {
        return;
    }
    
    if (contactForm.getAttribute("hidden") != null) {
        contactForm.removeAttribute("hidden");
    } else {
        contactForm.setAttribute("hidden", true);
    }
}