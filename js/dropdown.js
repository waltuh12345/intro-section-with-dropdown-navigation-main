const dropdown = Array.from(sidebar.querySelector('.list1').children);
const mediaQuery = window.matchMedia('(min-width: 768px)');


window.addEventListener('resize', () => {
  

  dropdown.forEach(item => {
  
    item.addEventListener('click', e => {
      const target = e.target;
      const dropdown = target.closest('.dropdown');
      const content = target.nextElementSibling;
      if (window.innerWidth >= 899) {
        return
      }

      if (target.matches('button')) {
        console.log('hello');
        dropdown.classList.toggle('active');
  
        if (dropdown.classList.contains('active')) {
          animate(content,'fadeInRight');
        } else {
          animate(content,'fadeOutRight');
        }
      }
    })
  })
});


window.dispatchEvent(new Event('resize'));