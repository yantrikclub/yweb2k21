let done = false;
let don2 = false;



function createcard([event,data]){
    const l = document.querySelectorAll(".container");
    let code = `
    <div class="card" id="${event}">
        <div class="title"><p>${event}</p></div>
        <hr class="tit">
        <div class="gal">
        </div>
    </div>`;

    const cont = document.getElementById("container");
    cont.innerHTML += code;
    

    function createElement([format,fsrc]){
        let icode = "";
    
        if (format == "video"){
            console.log(format,fsrc);
            icode = `<div class="item"><video preload muted src="${fsrc}"></video></div>`;
        }
        else if(format == "image") {
            console.log(format,fsrc);
            icode = `<div class="item"><img src="${fsrc}" alt=""></div>`;
        }
        else if (format == 'youtube'){
            icode = `<iframe src="https://www.youtube.com/embed/${fsrc}?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  id="youtubevid"></iframe>`;
            
        }
    
        const galdata = document.getElementById(event).getElementsByClassName("gal")[0];
        console.log(icode);
        galdata.innerHTML += icode;
    }

    
    const list = data.split(",");
    for (let i of list){
        i = i.split("_");
        console.log(i);
        createElement(i);
    };
    return don2 = true;
}







var promise = new Promise(function(resolve, reject) {
    onload = fetch("../data/gallery/gallery.csv").then(res =>{
        return res.text()
    }).then(data => {
        let result = data.split(/\r?\n|\r/).map(
            e => {
                return e.split(";");
            }
        )
        result.forEach(e =>{
            console.log(e);
            createcard(e);
        })

        done = true;
        console.log(done);
        resolve()
    }).catch( e =>{
        reject()
    })
  });
     
  promise.
      then(function () {

        console.log('listening');
        document.querySelectorAll('.item video').forEach(vid =>{
    
            vid.onclick = () =>{
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.popup video').disablePictureInPicture = true;
                document.querySelector('.popup video').src = vid.getAttribute('src');
                document.querySelector('.popup img').src = "";
            }
        
        });
        
        document.querySelectorAll('.item img').forEach(im =>{
        
            im.onclick = () =>{
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.popup img').src = im.getAttribute('src');
                document.querySelector('.popup video').src = "";
                console.log("detected esc");
                
        
            }
        
        });
        
        document.querySelector('.popup span').onclick = () => {
            document.querySelector('.popup').style.display = 'none';
            document.querySelector('.popup video').src = "";
            document.querySelector('.popup img').src = "";
        }
        
        
        window.onkeyup = function (event) {
            if (event.keyCode == 27) {
                document.querySelector('.popup').style.display = 'none';
                document.querySelector('.popup video').src = "";
                document.querySelector('.popup img').src = "";
            }
        }

        
      
      }).
      catch(function () {
          console.log('Some error has occurred');
      });

















// document.querySelectorAll('.item video').forEach(vid =>{

//     vid.onclick = () =>{
//         document.querySelector('.popup').style.display = 'block';
//         document.querySelector('.popup video').disablePictureInPicture = true;
//         document.querySelector('.popup video').src = vid.getAttribute('src');
//         document.querySelector('.popup img').src = "";
//     }

// });

// document.querySelectorAll('.item img').forEach(im =>{

//     im.onclick = () =>{
//         document.querySelector('.popup').style.display = 'block';
//         document.querySelector('.popup img').src = im.getAttribute('src');
//         document.querySelector('.popup video').src = "";
        

//     }

// });

// document.querySelector('.popup span').onclick = () => {
//     document.querySelector('.popup').style.display = 'none';
//     document.querySelector('.popup video').src = "";
//     document.querySelector('.popup img').src = "";
// }


// window.onkeyup = function (event) {
//     if (event.keyCode == 27) {
//         document.querySelector('.popup').style.display = 'none';
//         document.querySelector('.popup video').src = "";
//         document.querySelector('.popup img').src = "";
//     }
// }

