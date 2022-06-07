
const glide = document.querySelector('.glide');

if(glide)
new Glide(glide, {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 30,
  hoverpause: true,
  autoplay: 2000,
  animationDuration: 800,
  animationTimingFunc: 'linear',
  breakpoints: {
    996: {
      perView: 2
    },
    768: {
      perView: 1
    },
  }
}).mount()

const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');


const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', ()=>{
  if(navLeft < 0){
    menu.classList.add('show');
    document.body.classList.add('show');
    navBar.classList.add('show')
  }
})

navClose.addEventListener('click', ()=>{
   if(navLeft < 0){
    menu.classList.remove('show');
    document.body.classList.remove('show');
    navBar.classList.remove('show')
  }
})

// Fix nav

const navBar = document.querySelector('.nav');
const navHeight = navBar.getBoundingClientRect().height;
const control = document.querySelector('.control');


window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
        navBar.classList.remove('fix-nav')
  }

  control.classList.remove('open')
})


// Colors 

const widget = document.querySelector('.widget');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})

const colors = [...document.querySelectorAll('.colors span')];
document.querySelector(':root').style.setProperty('--customColor','#ce00ff')


colors.forEach(color=>{
  color.addEventListener('click', ()=>{
    const currentColor = color.dataset.id;
    document.querySelector(':root').style.setProperty('--customColor',currentColor)

  })
})


// Scroll to link

const links = [...document.querySelectorAll('.scroll-link')]
links.map(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();

    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    const fixNav = navBar.classList.contains('fix-nav')
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0
    })
  })
})

// Typeit

new TypeIt('#type1', {
  speed: 120,
  loop: true,
  waitUntilVisible: true
}).type('Coder',{delay: 400})
.pause(500)
.delete(5)
.type('Competitive Programmer',{delay: 400})
.pause(500)
.delete(22)
.type("Developer",{delay: 400})
.pause(500)
.delete(9)
.type('Fast Learner',{delay: 400})
.pause(500)
.delete(12).go()

new TypeIt('#type2', {
  speed: 120,
  loop: true,
  waitUntilVisible: true
}).type('Coder',{delay: 400})
.pause(500)
.delete(5)
.type('Competitive Programmer',{delay: 400})
.pause(500)
.delete(22)
.type("Developer",{delay: 400})
.pause(500)
.delete(9)
.type('Fast Learner',{delay: 400})
.pause(500)
.delete(12).go()

gsap.from('.logo', {opacity: 0, duration: 1, delay: .5, y: -10})
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20})
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.5, x: -200})
gsap.from('.gyani h3', {opacity: 0, duration: 1, delay: 2, y: -50})
gsap.from('.gyani h1', {opacity: 0, duration: 1, delay:2.5, y: -45})
gsap.from('.gyani h4', {opacity: 0, duration: 1, delay: 3, y: -30})
gsap.from('.gyani a', {opacity: 0, duration: 1, delay: 3.5, y: 50})
gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 3, x: -30,stagger: .2})
gsap.from('.icons span', {opacity: 0, duration: 1, delay: 3, x: -30,stagger: .2})

AOS.init()
