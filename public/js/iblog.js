const prel = document.getElementById("preloader")

setTimeout(() => {
    const content = document.getElementById("data");
    ["font","h1","h2","h3"].forEach(tag =>{
        content.querySelectorAll(tag).forEach(e=>{
            const s = window.getComputedStyle(e).getPropertyValue("font-size");
            e.style.lineHeight = `calc(0.4em + ${s})`;
            e.style.margin = "0.5em 0"
        })
    })
}, 1500);
setTimeout(()=>{
    prel.style.display = "none";
    window.scrollTo(0,0);
},3000);

