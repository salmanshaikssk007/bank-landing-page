// get elements
const bars = document.getElementById('bars');
const nav = document.querySelector('.nav ul');
const backDrop = document.getElementById('backdrop');
// functions 
const toggleDisplay = () =>{
    nav.classList.toggle('card');
    backDrop.classList.toggle('backdrop');
    if(nav.classList.contains('card')){
       nav.style.display = 'block';
      
       
    }else{
        nav.style.display = 'none';
       
    }
}
// events
bars.addEventListener('click',toggleDisplay);

