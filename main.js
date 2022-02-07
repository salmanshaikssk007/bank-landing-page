// get elements
const bars = document.getElementById('bars');
const nav = document.querySelector('.nav ul');
// functions 
const toggleDisplay = () =>{
    nav.classList.toggle('card');
    if(nav.classList.contains('card')){
       nav.style.display = 'block';
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }else{
        nav.style.display = 'none';
        document.body.style.backgroundColor = '#fafafa';
    }
}
// events
bars.addEventListener('click',toggleDisplay);

