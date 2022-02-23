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
            // console.log(format,fsrc);
            icode = `<div class="item"><div class="overlay"></div><video preload muted src="${fsrc}"></video></div>`;
        }
        else if(format == "image") {
            // console.log(format,fsrc);
            icode = `<div class="item"><img src="${fsrc}" loading="lazy" alt=""></div>`;
        }
        else if (format == 'youtube'){
            icode = `<iframe src="https://www.youtube.com/embed/${fsrc}?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  id="youtubevid"></iframe>`;
            
        }
    
        const galdata = document.getElementById(event).getElementsByClassName("gal")[0];
        // console.log(icode);
        galdata.innerHTML += icode;
    }

    
    const list = data.split(",");
    for (let i of list){
        i = i.split("_");
        // console.log(i);
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
            if (e[0].length >1){
                createcard(e);
            }
            else{
                
            }
        })

        done = true;
        // console.log(done);
        resolve()
    }).catch( e =>{
        reject()
    })
  });

  var presentitem ;

  promise.
      then(function () {

        // console.log('listening');
        document.querySelectorAll('.item video').forEach(vid =>{
    
            vid.onclick = () =>{
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.popup video').disablePictureInPicture = true;
                document.querySelector('.popup video').src = vid.getAttribute('src');
                document.querySelector('.popup .imgbx img').src = "";
                presentitem = vid.parentNode;
            }
        
        });
        document.querySelectorAll('.item .overlay').forEach(ov =>{
    
            ov.onclick = () =>{
                var vid = ov.parentNode.querySelector("video");
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.popup video').disablePictureInPicture = true;
                document.querySelector('.popup video').src = vid.getAttribute('src');
                document.querySelector('.popup .imgbx img').src = "";
            }
        
        });
        document.querySelectorAll('.item img').forEach(im =>{
        
            im.onclick = () =>{
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.popup .imgbx img').src = im.getAttribute('src');
                document.querySelector('.popup video').src = "";
                presentitem = im.parentNode;               
            }
        
        });
        
        document.querySelector('.popup span').onclick = () => {
            document.querySelector('.popup').style.display = 'none';
            document.querySelector('.popup video').src = "";
            document.querySelector('.popup .imgbx img').src = "";
        }
        
        
        window.onkeyup = function (event) {
            if (event.keyCode == 27) {
                document.querySelector('.popup').style.display = 'none';
                document.querySelector('.popup video').src = "";
                document.querySelector('.popup .imgbx img').src = "";
            }// left
            else if (event.keyCode == 37) {
                var tls = presentitem.parentNode.querySelectorAll(".item");
                var num = Array.prototype.indexOf.call(tls, presentitem);
                try {
                    var templs = tls[num-1].childNodes;
                    templs[templs.length-1].click();
                } catch (error) {
                    
                }
            }// right
            else if (event.keyCode == 39) {
                var tls = presentitem.parentNode.querySelectorAll(".item");
                var num = Array.prototype.indexOf.call(tls, presentitem);
                try {
                    var templs = tls[num+1].childNodes;
                    templs[templs.length-1].click();
                } catch (error) {
                    
                }
            }
        }

        
      
      }).
      catch(function () {
        //   console.log('Some error has occurred');
      });