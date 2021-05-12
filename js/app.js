const navSlide = () =>{

          const burger = document.querySelector('.burger');
          const nav = document.querySelector('.intro__nav-list');
          const navLinks = document.querySelectorAll('.intro__nav-item');

          burger.addEventListener('click', ()=>{
                    nav.classList.toggle('nav-active');
          

          navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                              link.style.animation = '';
                    }
                    else{
                    link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7)s`;
                    }

          });
          burger.classList.toggle('toggle');

          });
}

navSlide();