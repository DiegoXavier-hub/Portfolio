import React, {useState} from "react";
import './Contato.css'

function Contato(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    return(
        <section id="Contato">
            <section id="formulario">
                <form action="" method="POST">

                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="Seu nome" required value={nome}
                    onChange={event=>setNome(event.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Seu email" required value={email}
                    onChange={event=>setEmail(event.target.value)}
                    />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="telefone" id="telefone" placeholder="Seu telefone" required value={telefone}
                    onChange={event=>setTelefone(event.target.value)}
                    />

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem"
                    onChange={event=>setMensagem(event.target.value)}
                    ></textarea>

                    <button type="submit">Enviar</button>

                </form>
            </section>
            <section id="image">
                <span>
                    <h1>CONTACT ME</h1>
                    <h1>DIGA OI!</h1>
                </span>
            </section>
        </section>
    )
}

export default Contato