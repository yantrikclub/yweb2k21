// 
// id,img,name,designition,fb,insta,linkedin,mobile
        function createCard([name,id,img,designition,insta,linkedin,fb,mobile]){
            const mem = document.getElementById(id);
            let codem = ""
            let codei = ""
            let codel = ""
            let codef = ""
            // if (mobile != "javascript:void(0);"){
            //     codem = `<li style="--i:4">
            //     <a href="${mobile}"  >
            //         <i class="fa fa-phone-square" aria-hidden="true"></i>
            //     </a>
            // </li>`
            // }
            if (linkedin != "javascript:void(0);"){
                codel = `<li style="--i:3">
                <a target="_blank"  href="${linkedin}" >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
            </li>`
            }
            if (insta != "javascript:void(0);"){
                codei = `<li style="--i:2">
                <a target="_blank"  href="${insta}" >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </li>`
            }
            if (fb != "javascript:void(0);"){
                codef = `  <li style="--i:1">
                        <a target="_blank" href="${fb}"  >
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                    </li>`
            }
            let code = `
            <div class="card">
                <div class="cardcontent">
                    <div class="imgBx" id="imgBxoutline">
                        <img src="${img}" alt="pic">
                    </div>
                    <div class="contentBx">
                        <h3>
                            ${name}<br><span>${designition}</span>
                        </h3>
                    </div>
                </div>
                <ul class="sci">
                    ${codef}
                    ${codei}
                    ${codel}
                    ${codem}
                </ul>
            </div>`;

            mem.innerHTML += code;
            console.log(code)

        }

        onload = fetch("../data/team/team.csv").then(res =>{
            return res.text()
        }).then(data => {
            let result = data.split(/\r?\n|\r/).map(
                e => {
                    return e.split(",");
                }
            )
            console.log(result);
            result.forEach(e =>{
                console.log(e);
                if (e.length > 2){
                    createCard(e);
                }else{

                }
            })
        })
        
        
        

        
