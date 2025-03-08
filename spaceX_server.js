const btn = document.getElementById('menu-btn');
const menu_div = document.getElementById('menu-div');
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll('.counter'); 
let scrollStart = false;

btn.addEventListener('click',navToggle);

document.addEventListener('scroll', scrollPage)
function scrollPage(){
const scrollPos=window.scrollY;

if(scrollPos>100 && !scrollStart){
    countUp();
    scrollStart= true;
}
else if(scrollPos<100 && scrollStart)
{
    reset()
    scrollStart = false;
}
}

function navToggle(){
    btn.classList.toggle('open')
    menu_div.classList.toggle('open')
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle("show-menu")
}

function countUp(){
    counters.forEach((counter)=>{
        counter.innerText = '0';
        
        const updateCounter= () =>{
            //get count target
            const target = parseInt(counter.getAttribute('data-target'))
            // get current value
            const c = parseInt(counter.innerText);
           
            const increment =target/100;

            if (c<target){
                counter.innerText=`${Math.ceil(c+increment)}`;
                setTimeout(updateCounter,10);
            }
            else{
                counter.innerText= target;
            }
        } ;
        updateCounter()
    })
}
function reset(){
    counters.forEach((counter)=>(counter.innerHTML='0'));
}