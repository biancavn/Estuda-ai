import React from 'react';
import Navegador from '../componentes/navegador';

function Interpretacao() {
  return (
    <div className='porques'>
      <section className='margem-section-conteudo'>
        <h1 className=" mt-5 me-mb-2 border-bottom pb-1">Interpretação de Texto</h1>
        <p className='mb-4'>Interpretação de texto é o processo de compreensão e de percepção dos detalhes explícitos e implícitos de um texto, além do ato de explicar um texto após a sua compreensão.</p>
        <div class="clearfix">
            <iframe class="col-md-6 float-md-end mb-3 ms-md-5" width="660" height="315" src="https://www.youtube.com/embed/XsN0e_xPyNI?si=jzjT3oYB6ID-_4i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>A ação de interpretar textos – sejam eles de quaisquer tipos: notícias, propagandas, discursos, entre outros – envolve, em primeiro lugar, a prática da leitura. Portanto, a primeira dica para a interpretação correta é ler: leia o texto ao menos duas vezes.</p>
            <p>Na primeira leitura, busque compreender o que está sendo dito, sobre que assunto está se falando. Na segunda leitura, observe como o texto é construído, quais são as estratégias utilizadas para alcançar seu objetivo.</p>
            <p>Tendo feito as duas leituras, você poderá identificar como os parágrafos ou os outros elementos textuais se relacionam. Algumas possibilidades são relações de oposição (ou falsa oposição, vale a pena tomar cuidado!), de conclusão ou mesmo de continuação. Perceber qual é a conexão entre as ideias apresentadas é essencial para uma interpretação eficaz.</p>
            <p>Outro recurso interessante é sublinhar as principais ideias apresentadas em cada parágrafo, ou seja, o tópico frasal. Você pode, também, escrever ao lado de cada parágrafo qual é a informação mais importante nele contida. Assim, você conseguirá localizar rapidamente os principais aspectos do tema.</p>
            <p>É essencial ter em mente que todo texto tem um propósito, ou seja, um objetivo. Uma propaganda, por exemplo, tem o objetivo de convencer o leitor sobre um produto, promovendo sua compra. Uma carta de leitor, endereçada a um jornal, pode expressar uma crítica ou um elogio a uma reportagem. E assim sucessivamente.</p>
            <p>Perceba que, junto da intenção do texto, tem-se o enunciador e o interlocutor do texto. O enunciador é aquele quem fala. No caso de uma propaganda, quem fala é o anunciante de um produto, que deseja vendê-lo. Essa propaganda é direcionada, por sua vez, a um público, ou seja, a um interlocutor. Todos esses elementos, então, são importantes para conseguir apreender adequadamente o sentido de um texto.</p>

            <h3>Principais problemas de interpretação de texto</h3>
            <p>Há três principais problemas no que se refere à interpretação de texto. São eles: , redução e contradição.</p>
            
            <h4>Extrapolação</h4>
            <p>A extrapolação ocorre quando o leitor foge daquilo que é dito no texto. Nesse caso, a interpretação feita está além do que é permitido pelo texto. Deve-se ressaltar que extrapolar é diferente de inferir. A inferência é a dedução de algo dentro dos limites do texto, enquanto a extrapolação ultrapassa esses limites.</p>
            
            <h4>Redução</h4>
            <p>A redução consiste em atentar-se a um único elemento do texto, desconsiderando sua totalidade. Assim, parte grande do tema abordado é negligenciada, e o foco permanece em uma parte restrita dele.</p>

            <h4>Contradição</h4>
            <p>Por fim, a contradição se refere a entender exatamente o contrário do que está expresso no texto. Para evitar esse problema, deve-se ter muita atenção durante as leituras.</p>

                <h4>Outros links:</h4>
                <ul>
                    <li><a href="https://pafianos.blogspot.com/2016/01/duvidas-da-lingua-o-uso-dos-porques.html"
                        target="_blank" class="link">Pafianos: O uso dos porques.</a>
                    </li>
                    <li><a href="https://brasilescola.uol.com.br/gramatica/por-que.htm"
                        target="_blank" class="link"> Brasil Escola: o uso dos porques e exercícios.</a>
                    </li>
                    <li><a href="https://www.editoraopirus.com.br/uploads/bh/materiais/redacao/bh-redacao-3serie-e-extensivo-5f0746b12b248.pdf"
                        target="_blank" class="link"> Exercícios</a>
                    </li>
                </ul>
        </div>
        <div class="text-center mt-3 md-5">
        <img src="img/dicas-interpretacao-texto.webp" style={{maxWidth: '100%', borderRadius:'30px'}} alt="Uso dos porques"/>
        </div>

      </section>

        <Navegador anterior='/Porques' disciplina='/portugues' seguinte='tema2.html'/>

    </div>
  );
}

export default Interpretacao;
