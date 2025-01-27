import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Menu =() =>{
  return(
    
    <header data-spy="scroll" data-target=".navbar" data-offset="50">
    <nav id="navbar" class="navbar navbar-expand-lg" style={{backgroundColor: '#64B7CC'}}>
        <div class="container">
        <a class="navbar-brand text-white" style={{fontWeight: 'bold'}} href="/">
        <img 
            src="img/logoestudaai.png" 
            alt="Logo do nosso site" 
            width="35" style={{paddingInlineEnd: '10px'}}/>
            Estuda AÍ</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item me-3">
                    <Link class="nav-link text-white" to="/">Inicio</Link>
                    </li>
                    <li class="nav-item me-3">
                      <a class="nav-link text-white" href="/#disciplinas">Disciplinas</a>
                    </li>
                    <li class="nav-item me-3">
                      <a class="nav-link text-white" href="/#redacao">Redação</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#provas">Provas</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
    );
}
export default Menu;