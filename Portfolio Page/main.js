let menubtn =document.querySelector('.menu-btn')
let closebtn   =document.querySelector('.cls-btn')
let menu = document.querySelector('.nav-bar')  
menubtn.addEventListener('click',()=>{
     menu.classList.toggle('active')
})
closebtn.addEventListener('click',()=>{
    menu.classList.remove('active')
})
 