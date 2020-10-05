var menu = document.querySelector(".mobile-menu__list");
var menuBtn = document.querySelector(".humburger__btn");
console.log(menuBtn)





menuBtn.addEventListener('click', () => {
console.log('1')
  if (!menuBtn.classList.contains('is-active')) {
    menu.style.display = 'flex';
   // menu.style.transform = 'translateY(500px)';
    console.log(menuBtn.style.marginTop)
    menuBtn.classList.add('is-active');
    menu.classList.add('is-active');
  }

  else {
    menuBtn.classList.remove('is-active');
    menu.style.display = 'none';
  }
}, false);





// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 768) {
//       menuBtn.classList.remove("is-active");
//       menu.style.display = 'flex';
//   }
//   else {
//     menu.style.display = 'none';
//   }
// });
