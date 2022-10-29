const menu_icon=document.getElementById('menu-icon')
const side_nav=document.querySelector('.nav');
const close_btn=document.querySelector('.close-btn');
menu_icon.addEventListener('click',()=>{
    side_nav.style.right=0;
})

close_btn.addEventListener('click',()=>{
    side_nav.style.right='-200px'
})