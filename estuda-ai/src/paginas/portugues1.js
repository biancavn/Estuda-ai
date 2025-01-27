import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portugues extends Component{
    render(){
        return(
            <div className='Portugues' s>
                <section className='imagem-fundo'style={{backgroundImage:'url(img/Portugues.svg)'}}>
                    <div style={{padding:'10%'}} ></div> 
                </section>
                <section className="margem-section" id='Assuntos'>
                    <h1 className="text-start my-4 border-bottom pb-1">Assuntos:</h1>
                    <ul className='duas-colunas'>
                        <li><Link className='link' to={'/Porques'}>O uso dos Porques.</Link></li>
                        <li><Link className='link' to={'/InterpretaçãoDeTexto'}>Interpretação de Textos</Link></li>
                        <li><Link className='link' to={'tema3.html'}>Gêneros Textuais</Link></li>
                        <li><Link className='link' to={'tema4.html'}>Figuras de Linguagem</Link></li>
                        <li><Link className='link' to={'tema5.html'}>Concordância Verbal e Nominal</Link></li>
                        <li><Link className='link' to={'tema6.html'}>Uso de Crase</Link></li>
                        <li><Link className='link' to={'tema7.html'}>Regência Verbal e Nominal</Link></li>
                        <li><Link className='link' to={'tema8.html'}>Coesão e Coerência Textual</Link></li>
                        <li><Link className='link' to={'tema9.html'}>Escolas Literárias Brasileiras</Link></li>
                        <li><Link className='link' to={'tema10.html'}>Autores Clássicos Brasileiros</Link></li>
                        <li><Link className='link' to={'tema11.html'}>Movimentos Literários Mundiais</Link></li>
                        <li><Link className='link' to={'tema12.html'}>Análise de Textos Literários</Link></li>
                    </ul>
                </section>
                <section className="margem-section" id='Assuntos'>
                    <h1 className="text-start mt-5 mb-4 me-2 border-bottom pb-1">Fórum da Disciplina:</h1>
                    <ul>
                        <li><Link className='link' to={'/ForumPorques'}>O uso dos Porques.</Link></li>
                        <li><Link className='link' to={'forum2.html'}>Autores mais importantes da literatura brasileira</Link></li>
                        <li><Link className='link' to={'forum3.html'}>Qual a diferença entre orações subordinadas e coordenadas?</Link></li>
                    </ul>
                </section>
            </div>
        );
    }
}
export default Portugues;
