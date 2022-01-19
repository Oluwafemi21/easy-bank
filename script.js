const openBtn = document.getElementById('open');   
const closeBtn = document.getElementById('close');   
const navUl = document.getElementById('nav-links');
const menuBg = document.getElementById('mobile-bg');
const imgMockup =  document.getElementById('img-mockup');

openBtn.addEventListener('click',()=>{
    closeBtn.classList.remove('hidden');
    openBtn.classList.add('hidden');
    navUl.classList.add('mobile-nav');
    menuBg.classList.add('mobile-bg');
    imgMockup.classList.add('hidden');
})


closeBtn.addEventListener('click',()=>{
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
    navUl.classList.remove('mobile-nav');
    menuBg.classList.remove('mobile-bg');
    imgMockup.classList.remove('hidden');
})