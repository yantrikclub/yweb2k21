
        function createCard([id,img,name,designition,fb,insta,linkedin,mobile]){
            const mem = document.getElementById(id);
            let code = `
            <div class="card">
                <div class="cardcontent">
                    <div class="imgBx">
                        <img src="${img}" alt="pic">
                    </div>
                    <div class="contentBx">
                        <h3>
                            ${name}<br><span>${designition}</span>
                        </h3>
                    </div>
                </div>
                <ul class="sci">
                    <li style="--i:1">
                        <a target="_blank" rel="noopener noreferrer" href="${fb}" >
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:2">
                        <a target="_blank" rel="noopener noreferrer" href="${insta}">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:3">
                        <a target="_blank" rel="noopener noreferrer" href="${linkedin}">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:4">
                        <a target="_blank" rel="noopener noreferrer" href="tel:${mobile}">
                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>`;

            mem.innerHTML += code;

        }

        onload = fetch("../data/team/team.csv").then(res =>{
            return res.text()
        }).then(data => {
            let result = data.split(/\r?\n|\r/).map(
                e => {
                    return e.split(",");
                }
            )
            // console.log(result);
            result.forEach(e =>{
                console.log(e);
                createCard(e);
            })
        })
        
        

        
