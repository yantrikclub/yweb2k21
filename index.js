var slide_index = 4;  


function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("slideShow");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "flex";  
}  

const prev = document.querySelectorAll("#leftcnt");
const next = document.querySelectorAll("#rightcnt");


next.forEach(btn=>{
    btn.addEventListener("click",e=>{
        nextSlide(1);
    })
})

prev.forEach(btn=>{
    btn.addEventListener("click",e=>{
        nextSlide(-1);
    })
})

displaySlides(slide_index);  


function swapshow(){
    nextSlide(1);
    nextSlide2(1);
    setTimeout(() => {
        swapshow();
    }, 6000);
}



var slide_index2 = 3;  


function nextSlide2(n) {  
    displaySlides2(slide_index2 += n);  
}  

function currentSlide2(n) {  
    displaySlides2(slide_index2 = n);  
}  

function displaySlides2(n) {  
    var i;  
    var slides = document.getElementsByClassName("slideShow2");  
    if (n > slides.length) { slide_index2 = 1 }  
    if (n < 1) { slide_index2 = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index2 - 1].style.display = "flex";  
}  

const prev2 = document.querySelectorAll("#leftcnt2");
const next2 = document.querySelectorAll("#rightcnt2");


next2.forEach(btn=>{
    btn.addEventListener("click",e=>{
        nextSlide2(1);
    })
})

prev2.forEach(btn=>{
    btn.addEventListener("click",e=>{
        nextSlide2(-1);
    })
})

displaySlides2(slide_index2);  



const upevents = document.getElementById("upevents");

function upeveload(){
    fetch("data/index/upevents.csv").then(res =>{
        return res.text()
    }).then(data => {
        let result = data.split(/\r?\n|\r/).map(
            e => {
                return e.split(",");
            }
        )
        result.forEach(e =>{
            if (e.length > 2){
                let code = `
                <div class="card">
                    <div class="imgbx"><img src="${e[0]}" alt=""></div>
                    <div class="info">
                        <div class="name">${e[1]}</div>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> Date: ${String(e[2])}
                        <br><i class="fa fa-clock-o" aria-hidden="true"></i> Time: ${String(e[3])} </p>
                    </div>
                </div>
                `;
                upevents.innerHTML += code;
            } else{
                
            }
            
        })
    })
}

