import React from "react"
import "./Home.css"

function Home(){
    const tags = ["<html>", "<body>", "<h1>", "</h1>", "<p>", "</p>"]
    return(
        <section id="Home" className="main">
            <span className="code-tags">{tags[0]}</span><br/>
            <span className="code-tags">{tags[1]}</span><br/>
            <span className="code-tags">{tags[2]}</span>
            <h1>Olá,<br/>Meu nome é Diego,<br/>Bem Vindo!<span className="code-tags">{tags[3]}</span></h1>
            <span className="code-tags">{tags[4]}</span>
            <p>Desenvolvedor Front-end</p>
            <span className="code-tags">{tags[5]}</span><br/>
            <a href="#Contato">Contate me!</a>
        </section>
    )
}

export default Home