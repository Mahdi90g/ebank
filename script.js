let lis1 = document.querySelector('.option-service')
let ser1=document.querySelector('#service');
ser1.addEventListener('click',(e)=>{
    e.target.style.color = 'red'
    lis1.style.display='block'
    
    

})
document.addEventListener('click',(event)=>{
    if (! lis1.contains(event.target) && ! ser1.contains(event.target)){lis1.style.display='none',ser1.style.color='white'} 
})




   
document.querySelector('.item1').addEventListener('mouseenter',(e)=>{
    
    e.target.style.color='white'
    e.target.style.transitionDuration='1s'
    e.target.style.width='150px'
    e.target.style.borderColor='blueviolet'


})
document.querySelector('.item1').addEventListener('mouseleave',(e)=>{
    
    e.target.style.color='black'
    e.target.style.width='40px'
    e.target.style.borderColor='white'

})
document.querySelector('.item2').addEventListener('mouseenter',(e)=>{
    
    e.target.style.color='white'
    e.target.style.transitionDuration='1s'
    e.target.style.width='150px'
    e.target.style.borderColor='blueviolet'

})
document.querySelector('.item2').addEventListener('mouseleave',(e)=>{
    
    e.target.style.color='black'
    e.target.style.width='40px'
    e.target.style.borderColor='white'

})
document.querySelector('.item3').addEventListener('mouseenter',(e)=>{
    
    e.target.style.color='white'
    e.target.style.transitionDuration='0.7s'
    e.target.style.width='150px'
    e.target.style.borderColor='blueviolet'

})
document.querySelector('.item3').addEventListener('mouseleave',(e)=>{
    
    e.target.style.color='black'
    e.target.style.width='40px'
    e.target.style.borderColor='white'

})

let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let nextbt = document.querySelector('.next');
let pervbt = document.querySelector('.perv');

let curent = 0;
const slidewidth = slides[0].offsetwidth;

function moveslide(index){
    const translateX = -index * slidewidth;
    slider.style.transform = translateX($ [translateX])
}




