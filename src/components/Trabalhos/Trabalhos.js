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
                trabalhos.style.backgroundImage = "url('https://emdiabetes.com.br/wp-content/uploads/2017/09/breve.jpg')"
                break;
            case 2: 
                trabalhos.style.backgroundImage = "url('http://www.petdoctor.com.br/wp-content/uploads/2021/04/10RacasDeCaesMaisPopularesNoBrasil-Topo-Abr21.jpg')"
                break;
            case 3:
                trabalhos.style.backgroundImage = "url('https://uploads.metropoles.com/wp-content/uploads/2022/05/02141436/conheca_as_racas_de_cachorros_mais_inteligentes_widexl-600x400.jpg')"
                break;
            case 4:
                trabalhos.style.backgroundImage = "url('https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3.jpg')"
                break;
            case 5: 
                trabalhos.style.backgroundImage = "url('https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg')"
                break;
            case 6:
                trabalhos.style.backgroundImage = "url('https://s2.glbimg.com/_bDnKvOpodO6FkZL8zJ0BFDtyAA=/e.glbimg.com/og/ed/f/original/2020/10/30/jamie-street-utre5dcgeyg-unsplash.jpg')"
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