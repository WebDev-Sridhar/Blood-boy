let menu = document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:true
});

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:450,origin:'right'});
sr.reveal('.icons',{delay:450,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
   if(darkmode.classList.contains('bx-moon')) 
    {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
}
else{
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('color');
}
};