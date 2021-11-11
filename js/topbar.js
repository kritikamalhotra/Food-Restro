responsive = document.querySelector('.responsive')
navbarr = document.querySelector('.navbarr')
navlist = document.querySelector('.nav-list')



responsive.addEventListener('click', ()=>{

    navbarr.classList.toggle('h-nav')
    navlist.classList.toggle('v-class')
})


