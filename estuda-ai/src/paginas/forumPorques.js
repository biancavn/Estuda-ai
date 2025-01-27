import React from 'react';
import Navegador from '../componentes/navegador';


function ForumPorques() {
  return (
    <div className='forumPorques'>
      <section className='margem-section'>
      <h1 className=" mt-5 me-mb-2">Título: Dicas para melhorar a redação no ENEM?</h1>
      <h4 className=" me-mb-2 border-bottom pb-1">Forum de português</h4>


      </section>
      <main>
        <section>

          <div class="alert container mt-3"  role="alert">
            <section class="pesquisa-comentario m-4">
              <div>
                <img class="img-fluid user" src="img/user.png" alt="Imagem que representa o usuário"
                  style={{width: '100px'}}/>
              </div>

              <div>
                <p class="comentario me-ms-3 p-4">
                  Olá, pessoal! Estou me preparando para o ENEM e sempre fico insegura com a redação. Alguém tem dicas ou
                  estratégias
                  para organizar as ideias e escrever uma redação bem estruturada? Quais são os pontos principais que vocês
                  priorizam?
                  Agradeço desde já!
                </p>
              </div>
            </section>

            <section class="pesquisa-comentario m-4">
              <div>
                <p class="comentario fonte me-ms-3 p-4">
                  Oi! Para começar, é importante dominar o formato dissertativo-argumentativo. Eu sempre começo lendo
                  atentamente a proposta
                  e destacando as palavras-chave. Depois, faço um pequeno rascunho com três partes: introdução,
                  desenvolvimento (com dois argumentos
                  principais) e conclusão. Outra coisa que ajuda é ler redações nota 1000 de anos anteriores para entender o
                  que os corretores valorizam.
                </p>
              </div>
              <div>
                <img class="img-fluid user" src="img/user.png" alt="Imagem que representa o usuário"
                  style={{width: '100px'}}/>
              </div>
            </section>

            <section class="pesquisa-comentario m-4">
              <div>
                <img class="img-fluid user" src="img/user.png" alt="Imagem que representa o usuário"
                  style={{width: '100px'}}/>
              </div>

              <div>
                <p class="comentario fonte me-ms-3 p-4">
                  Oi, tudo bem? Uma dica que funciona muito pra mim é criar um banco de repertórios socioculturais. Por
                  exemplo,
                  anotar filmes, livros, ou notícias que podem ser usados em vários temas. Além disso, treinar a escrita
                  toda
                  semana com temas variados me ajudou muito. Ah, não esqueça de revisar bem os textos pra evitar erros de
                  gramática e coerência!
                </p>
              </div>
            </section>
          </div>
        </section>
        <Navegador anterior='' disciplina='\portugues' seguinte=''/>
      </main>
    </div>
  );
}

export default ForumPorques;