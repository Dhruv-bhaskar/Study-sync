let nav = document.querySelector('.nav2')
let brgr = document.querySelector('.menu')

brgr.addEventListener('click', ()=>{
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }
    else{
        nav.style.display = 'none'
    }
})