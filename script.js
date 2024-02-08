
var handle = true;
var x = window.matchMedia("(max-width: 700px)");
let myFunction = () => {
    if (handle == true)
        closeHandle();
    else 
        openHandle(x);

    handle = !handle;
}

function openHandle(x) {
    const sb = document.querySelector('#side-nav');
    const mc = document.querySelector('.main-content');
    const hm = document.querySelector('#hamburger-menu');
    // const hl = document.querySelector('#handle-logo');
    // h1.style.display="block";
    hm.style.display="none";
    sb.style.display = "block";
    if(x.matches)
    {
        sb.style.width = "50%";
    }
    else{
    sb.style.width = "22%";
    }
    // sb.style.width = "22%";
    // sb.display.overflow="hidden";
    mc.style.width = "100%";
}

function closeHandle() {
    const sb = document.querySelector('#side-nav');
    const mc = document.querySelector('.main-content');
    const hm = document.querySelector('#hamburger-menu');
    // const hl = document.querySelector('#handle-logo');
    // h1.style.display="none";
    hm.style.display="block";
    sb.style.display = "none";
    mc.style.width = "100%";
}
