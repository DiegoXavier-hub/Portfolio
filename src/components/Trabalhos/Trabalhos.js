import React, {useEffect, useState} from "react";
import './Trabalhos.css'

function Trabalhos(){

    const [trabalhos, setTrabalhos] = useState()

    useEffect(() =>{
        setTrabalhos(document.getElementById('Trabalhos'))
    }, [])

    function backgroundAnim(param) {
        switch (parseInt(param)){
            case 1:
                trabalhos.className = "b1"
                break;
                case 2: 
                trabalhos.className = "b2"
                break;
            case 3:
                trabalhos.className = "b3"
                break;
            case 4:
                trabalhos.className = "b4"
                break;
            case 5: 
                trabalhos.className = "b5"
                break;
            case 6:
                trabalhos.className = "b6"
                break;
            default:
                break;
        }
    }

    return(
        <section id="Trabalhos">
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