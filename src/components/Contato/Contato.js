import React, {useState} from "react";
import './Contato.css'

function Contato(){
    
    if(localStorage.getItem('isModalOpen') === undefined || localStorage.getItem('isModalOpen') === undefined) {
        localStorage.setItem('isModalOpen', "true");
    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const [isModalOpen, setIsModalOpen] = useState(localStorage.getItem('isModalOpen'));
    const [imge, setIMGE] = useState('https://cdn-icons-png.flaticon.com/512/2950/2950315.png');
    const [tittle, setTittle] = useState('Sucesso!');
    const [description, setDescription] = useState('Recebi sua mensagem, entrarei em contato logo logo...');
    
    function validarForm(){
        let valid = true
        if (nome.length<=2){
            document.getElementById("nome").className = "badInput"
            valid = false
        } else {
            document.getElementById("nome").className = ""
        }
        if(!emailRegex.test(email)){
            document.getElementById("email").className = "badInput"
            valid = false
        } else {
            document.getElementById("email").className = ""
        }
        if(telefone.length<=7){
            document.getElementById("telefone").className = "badInput"
            valid = false
        } else {
            document.getElementById("telefone").className = ""
        }
        if(mensagem.length<=3){
            document.getElementById("mensagem").className = "badInput"
            valid = false
        } else {
            document.getElementById("mensagem").className = ""
        }
        return valid
    }

    function enviarEmail() {
        if(validarForm()){
            document.getElementById("form").submit()
            localStorage.setItem('isModalOpen', "true")
            setIsModalOpen("true")
        }
    }

    return(
        <section id="Contato">
            <section id="formulario">
                <form action="https://api.staticforms.xyz/submit" method="POST" id="form">
                    <input type="hidden" name="accessKey" value="7e16d549-3c0f-41f8-acb1-797c7faa94eb"/>
                    <input type="hidden" name="redirectTo" value="https://diego-xavier.vercel.app/#Contato"></input>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="name" id="nome" placeholder="Seu nome" required value={nome}
                    onChange={event=>setNome(event.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="seuemail@mail.com" required value={email}
                    onChange={event=>setEmail(event.target.value)}
                    />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="phone" id="telefone" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" placeholder="(00) 0000-0000" required value={telefone}
                    onChange={event=>setTelefone(event.target.value)}
                    />

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="message" required value={mensagem}
                    onChange={event=>setMensagem(event.target.value)}
                    ></textarea>

                    <button type="button" onClick={()=>enviarEmail()}>Enviar</button>

                </form>
            </section> 
            <section id="image">
                <span>
                    <h1>CONTACT ME</h1>
                    <h1>DIGA OI!</h1>
                </span>
            </section>

            {isModalOpen === "true" ? 
                <>
                    <section id="modal" onClick={()=>setIsModalOpen("false")}>
                        <div id="dialog">
                            <img src={imge} alt="Imagem: Um coração dentro de uma carta"/>
                            <h1>{tittle}</h1>
                            <p>{description}</p>
                        </div>
                    </section>
                </>
            : null}
        </section>
    )
}

export default Contato