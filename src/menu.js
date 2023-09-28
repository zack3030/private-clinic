const mobileMenu = () =>{

    /* declare and initialize class names to variable*/ 
    
    const menuBar = document.querySelector('.header__bar');
    const closeBar = document.querySelector('.close');
    const mobileLinks = document.querySelectorAll('.header__link-mobile');
    const nav = document.querySelector('.nav__menu');


    /* when menuBar is clicked */

    menuBar.addEventListener('click',()=>{
        nav.classList.add('open-nav')
        document.body.style.overflow='hidden'
    })

    /* when closeBar is clicked */

    closeBar.addEventListener('click',()=>{
        nav.classList.remove('open-nav')
    })

    /* when when  link is clicked */

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('open-nav'); // Close the mobile menu
          document.body.style.overflow = ''; // Restore the overflow property
        });
      });


}




export default mobileMenu;