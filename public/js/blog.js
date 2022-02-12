const prel = document.getElementById("preloader")
setTimeout(()=>{
    // prel.parentNode.removeChild(prel);
    prel.style.display = "none";
    window.scrollTo(0,0);
},3000);
