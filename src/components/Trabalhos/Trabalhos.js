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
                trabalhos.classList.remove('b2')
                trabalhos.classList.remove('b3')
                trabalhos.classList.remove('b4')
                trabalhos.classList.remove('b5')
                trabalhos.classList.remove('b6')
                trabalhos.classList.add('b1')
                break;
            case 2: 
                trabalhos.classList.remove('b1')
                trabalhos.classList.remove('b3')
                trabalhos.classList.remove('b4')
                trabalhos.classList.remove('b5')
                trabalhos.classList.remove('b6')
                trabalhos.classList.add('b2')
                break;
            case 3:
                trabalhos.classList.remove('b1')
                trabalhos.classList.remove('b2')
                trabalhos.classList.remove('b4')
                trabalhos.classList.remove('b5')
                trabalhos.classList.remove('b6')
                trabalhos.classList.add('b3')
                break;
            case 4:
                trabalhos.classList.remove('b1')
                trabalhos.classList.remove('b2')
                trabalhos.classList.remove('b3')
                trabalhos.classList.remove('b5')
                trabalhos.classList.remove('b6')
                trabalhos.classList.add('b4')
                break;
            case 5: 
                trabalhos.classList.remove('b1')
                trabalhos.classList.remove('b2')
                trabalhos.classList.remove('b3')
                trabalhos.classList.remove('b4')
                trabalhos.classList.remove('b6')
                trabalhos.classList.add('b5')
                break;
            case 6:
                trabalhos.classList.remove('b1')
                trabalhos.classList.remove('b2')
                trabalhos.classList.remove('b3')
                trabalhos.classList.remove('b4')
                trabalhos.classList.remove('b5')
                trabalhos.classList.add('b6')
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