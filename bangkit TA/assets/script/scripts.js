const dropDown = document.querySelector('.section2');
const article = document.querySelector('.father');
const article2 = document.querySelector('.father2');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const slidesAppear = document.querySelector('.container3');
const slidesAppear2 = document.querySelector('.container4');
const footer = document.querySelector('footer');
const subMenu = document.getElementById('fav');
const subMenu2 = document.querySelector('.sub-menu-wrap');
const icon = document.getElementById('icon')
const contact = document.getElementById('contact')
const artc = document.getElementById('artc')
const chara = document.getElementById('chara')
const artc2 = document.getElementById('artc2')
const chara2 = document.getElementById('chara2')

// subMenu.addEventListener('mouseover', () => {
//   subMenu2.classList.toggle('open-menu');
// });
// subMenu2.addEventListener('mouseout', () => {
//   subMenu2.classList.toggle('open-menu');
// });

subMenu.addEventListener('click', () => {
        subMenu2.classList.toggle('open-menu');
    });

// subMenu2.addEventListener('mouseout', () => {
//     subMenu2.classList.toggle('open-menu');
// })

artc.addEventListener('click', ()=>{
  article.classList.toggle('dissapear');
  slidesAppear.classList.toggle('dissapear');
  article2.classList.toggle('dissapear');
  slidesAppear2.classList.toggle('dissapear');
  footer.classList.toggle('footer-down');
})
chara.addEventListener('click', ()=>{
  slidesAppear.classList.toggle('dissapear');
  article.classList.toggle('dissapear');
  slidesAppear2.classList.toggle('dissapear');
  article2.classList.toggle('dissapear');
  footer.classList.toggle('footer-down');
})
artc2.addEventListener('click', ()=>{
  article.classList.toggle('dissapear');
  article2.classList.toggle('dissapear');
  slidesAppear.classList.toggle('dissapear');
  slidesAppear2.classList.toggle('dissapear');
  footer.classList.toggle('footer-down');
})
chara2.addEventListener('click', ()=>{
  slidesAppear.classList.toggle('dissapear');
  slidesAppear2.classList.toggle('dissapear');
  article.classList.toggle('dissapear');
  article2.classList.toggle('dissapear');
  footer.classList.toggle('footer-down');
})

dropDown.addEventListener('click', () => {
  article.classList.toggle('dissapear');
  article2.classList.toggle('dissapear');
  slidesAppear.classList.toggle('dissapear');
  slidesAppear2.classList.toggle('dissapear');
  footer.classList.toggle('footer-down');
  contact.classList.toggle('dissapear')
  window.scrollTo(0, article.offsetTop);
});

next.addEventListener('click', () => {
  const list = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(list[0]);
});
prev.addEventListener('click', () => {
  const list = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(list[list.length - 1]);
});
next2.addEventListener('click', () => {
  const list2 = document.querySelectorAll('.item2');
  document.querySelector('.slide2').appendChild(list2[0]);
});
prev2.addEventListener('click', () => {
  const list2 = document.querySelectorAll('.item2');
  document.querySelector('.slide2').prepend(list2[list2.length - 1]);
});




console.log(next);
console.log(dropDown);
console.log(article);
console.log(subMenu);
console.log(subMenu2);
console.log(icon)
console.log(artc)
