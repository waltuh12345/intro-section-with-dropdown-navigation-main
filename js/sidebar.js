const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('#menu-toggle-btn');
const body = document.querySelector('body');


const animate = (elem,animation) => {
  return new Promise((resolve, reject) => {
    //elem.style.visibility = visibility;

    
    
    elem.style.animation = `${animation} 1s`;
    
    
    const handleAnimation = (e) => {
      elem.style.animation = '';
      resolve('Animation Ended');
    }
    
    elem.addEventListener('animationend', handleAnimation, {once:true});
    /*
    if (visibility === 'hidden') {
      setTimeout(() => {
        elem.style.visibility = 'hidden';
      },1000)
    }
    */

  })
}


const addClassName = (elem,name) => elem.classList.add(name);

menuToggle.addEventListener('click', e => {
  const sideBarContainer = sidebar.querySelector('.sidebar-container');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('hide');
  body.classList.toggle('scroll-disabled');

  if (menuToggle.classList.contains('active')) {
    animate(sidebar,'fadeIn');
    animate(sideBarContainer,'fadeInRight');
  } else {
    animate(sidebar,'fadeOut')
    animate(sideBarContainer,'fadeOutRight');
  }
})