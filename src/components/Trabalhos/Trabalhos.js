import React, {useEffect} from "react";
import './Trabalhos.css'

function Trabalhos(){

    let trabalhos

    useEffect(() =>{
        trabalhos = document.getElementById('Trabalhos')
    }, [])

    function backgroundAnim(param) {
        switch (parseInt(param)) {
            case 1:
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-1-min.jpg?token=GHSAT0AAAAAABWM6ZBJVBNPUWCAUYPV33PAYXWY7VQ')"
                break;
            case 2: 
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-2-min.jpg?token=GHSAT0AAAAAABWM6ZBJYWAAAAD4AP72T3AQYXWZAXA')"
                break;
            case 3:
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-3-min.jpg?token=GHSAT0AAAAAABWM6ZBIGN64YTI6OZWZJA26YXWZA2A')"
                break;
            case 4:
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-4-min.jpg?token=GHSAT0AAAAAABWM6ZBJVXWDFXB7VNUFXPNUYXWZBGA')"
                break;
            case 5: 
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-5-min.jpg?token=GHSAT0AAAAAABWM6ZBIL5S5QQQQBIDTKDMCYXWZBJA')"
                break;
            case 6:
                trabalhos.style.backgroundImage = "url('https://raw.githubusercontent.com/DiegoXavier-hub/images-portfolio/master/tech-6-min.jpg?token=GHSAT0AAAAAABWM6ZBIV4ZJIIDSIIEQNIKSYXWZBLQ')"
                break;
            default:
                break;
        }
    }



    return(
        <section id="Trabalhos" className="Trabalhos">
            <div>
                <section className="work" onMouseOver={()=> backgroundAnim(1)}>
                    
                </section>
                <section className="work" onMouseOver={()=> backgroundAnim(2)}>
                    
                </section>
                <section className="work" onMouseOver={()=> backgroundAnim(3)}>
                    
                </section>
            </div>
            <div>
                <section className="work" onMouseOver={()=> backgroundAnim(4)}>
                    
                </section>
                <section className="work" onMouseOver={()=> backgroundAnim(5)}>
                    
                </section>
                <section className="work" onMouseOver={()=> backgroundAnim(6)}>
                    
                </section>
            </div>
        </section>
    )
}

export default Trabalhos