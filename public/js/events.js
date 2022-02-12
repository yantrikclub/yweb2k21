
function style(num){
    if (num==1){
        return ["lcard","left","right"];
    }
    else{
        return ["rcard","right","left"];
    }
}

function createCard([id,title,img,desc,num]){
    const mem = document.getElementById(id);
    const ls = style(num);
    let code = `
    <div class="event">
        <div class="imgbx">
            <img src="${img}" alt="">
        </div>
        <div data-aos="fade-${ls[2]}" data-aos-duration="1000" class=${ls[0]}>
            <h1 data-aos="fade-${ls[1]}" data-aos-duration="1000" data-aos-delay="700">${title}</h1>
            <p data-aos="fade-${ls[1]}" data-aos-duration="1000" data-aos-delay = "1000">${desc}</p>
        </div>        
    </div>
    `;
    
    mem.innerHTML += code;

}

onload = fetch("../data/events/events.csv").then(res =>{
    return res.text()
    
}).then(data => {
    let result = data.split(/\r?\n|\r/).map(
        e => {
            return e.split(";");
        }
    )
    result.forEach(e =>{
        if(e.length>2){
            createCard(e);
        }else{
            
        }
    })
}).then(()=>{
    const evels = Array.prototype.slice.call(events.querySelectorAll(".event")).slice(4);
    evels.forEach(eve=>{
        eve.style.display = "none";
    })
})

const events = document.getElementById("events");    
const moreeve = document.getElementById("moreevents");
// const talks = document.getElementById("talks");
let show = true;
moreeve.addEventListener("click",()=>{
    if (show){
        const evels = events.querySelectorAll(".event");
        evels.forEach(eve=>{
            eve.style.display = "block";
        })
        moreeve.innerHTML = "Show less";
        show = !show;
    }else{
        const evels = Array.prototype.slice.call(events.querySelectorAll(".event")).slice(4);
        evels.forEach(eve=>{
            eve.style.display = "none";
        });
        moreeve.innerHTML = "Load More";
        show = !show;
    }
    
})
