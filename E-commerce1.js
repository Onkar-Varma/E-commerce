// const bar=document.querySelector('#bar')
// const links=document.querySelector('.nav-links')

// bar.addEventListener('click',() =>{
//     links.classList.toggle('active')
// })

const bar=document.getElementById('bar')
const links=document.getElementById('nav-links')
const close=document.getElementById('close')

if (bar){
    bar.addEventListener('click',() =>{
        links.classList.add('active')
    });
}
if (close){
    close.addEventListener('click',() =>{
        links.classList.remove('active')
    })
}