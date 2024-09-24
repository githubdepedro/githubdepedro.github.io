
function start() {
    let theTitle=document.querySelector('h1');
    theTitle.addEventListener('click', title);
}//end start
function title(){
    let theTitle=document.querySelector('h1');
    theTitle.setAttribute('color','red');
    theTitle.innerHTML="United States";
}
window.addEventListener('load', start);