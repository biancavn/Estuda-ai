import React from 'react';
import Navegador from '../componentes/navegador';

function Porques() {
  return (
    <div className='porques'>
      <section className='margem-section-conteudo'>
        <h1 className=" mt-5 me-mb-2 border-bottom pb-1">O uso dos porques</h1>
        <p className='mb-4'>O correto uso dos porquês é importante na hora de escrever. As formas “por que”, “por quê”, “porque” e “porquê” são empregadas segundo o sentido que se espera de um enunciado.</p>
        <div class="clearfix">
            <iframe class="col-md-6 float-md-end mb-3 ms-md-5" width="760" height="415" src="https://www.youtube.com/embed/AQfHQP-JLcA?si=NqDXESBUbHfPb6Ja" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Na língua portuguesa, temos quatro formas de usar a palavra <strong>"porquê"</strong>: <strong>por que</strong>, <strong>porque</strong>, <strong>porquê</strong> e <strong>por quê</strong>. Cada um desses casos possui um <strong>uso específico</strong> e serve para diferentes funções dentro da frase. A compreensão de suas diferenças é essencial para o domínio da norma culta da língua.</p>
            
            <h3>Uso de "Por Que" (Separado e Sem Acento)</h3>
            <p><strong>"Por que"</strong> é utilizado quando temos uma <strong>pergunta</strong> (direta ou indireta) e significa <strong>"por qual razão" ou "por qual motivo"</strong>.</p>
            
            <h4>Função</h4>
            <ul>
                <li><strong>"Por que"</strong> é a junção da preposição "por" com o pronome interrogativo "que", e é sempre usado em frases <strong>interrogativas</strong>.</li>
                <li>Ele é usado em <strong>perguntas diretas</strong> (quando o discurso é direto) ou <strong>perguntas indiretas</strong> (quando a frase não é uma pergunta direta, mas sim uma pergunta embutida na estrutura da frase).</li>
            </ul>
            
            <h4>Exemplos</h4>
            <ul>
                <li><strong>Pergunta direta:</strong> Por que você não veio ontem?</li>
                <li><strong>Pergunta indireta:</strong> Gostaria de saber por que você não veio ontem.</li>
            </ul>
        
            <h3>Uso de "Porque" (Junto e Sem Acento)</h3>
            <p><strong>"Porque"</strong> é utilizado para indicar <strong>causa ou explicação</strong>. Ele é uma <strong>conjunção causal</strong>, ou seja, liga orações e <strong>explica o motivo ou a razão</strong> da ação expressa.</p>
            
            <h4>Função</h4>
            <ul>
                <li><strong>"Porque"</strong> é usado em frases <strong>explicativas</strong> ou <strong>causais</strong>, geralmente para dar uma <strong>resposta</strong> ou <strong>justificar</strong> algo que foi dito antes.</li>
                <li>A conjunção <strong>porque</strong> sempre vem <strong>ligando</strong> duas orações, sendo que a oração que vem depois de "porque" traz a explicação ou a causa.</li>
            </ul>
            
            <h4>Exemplos</h4>
            <ul>
                <li>Eu não fui à escola porque estava doente.</li>
                <li>Ela não foi ao trabalho porque precisava descansar.</li>
            </ul>
        
            <h3>Uso de "Porquê" (Junto e Com Acento)</h3>
            <p><strong>"Porquê"</strong> é um <strong>substantivo</strong> e sempre aparece com um <strong>artigo ou pronome</strong> que o acompanha. Ele é usado quando estamos nos referindo a <strong>um motivo ou razão</strong>, ou seja, quando falamos sobre o que é a causa de algo.</p>
            
            <h4>Função</h4> 
            <ul>
                <li>Quando falamos sobre o motivo de algo, usamos <strong>"porquê"</strong> com acento, pois ele é um <strong>substantivo</strong>.</li>
                <li>O "porquê" sempre será <strong>precedido por um artigo</strong> ("o", "a", "os", "as") ou algum outro determinante (como "um", "uma", etc.).</li>
            </ul>
        
            <h4>Exemplos</h4>
            <ul>
                <li>Não entendi o porquê de tanta reclamação.</li>
                <li>O porquê de sua decisão ainda é um mistério para todos.</li>
            </ul>
        
            <h3>Uso de "Por Quê" (Separado e Com Acento)</h3>
            <p><strong>"Por quê"</strong> é usado <strong>quando aparece no final da frase interrogativa</strong>. O acento é necessário porque o "quê" está <strong>isolado</strong>, funcionando como um <strong>pronome interrogativo</strong> que encerra a pergunta.</p>
            
            <h4>Função</h4>
            <ul>
                <li>Quando usamos "por quê", a palavra <strong>"quê"</strong> recebe o acento porque ele está <strong>isolado no final</strong> de uma frase interrogativa.</li>
                <li>Isso acontece porque <strong>"quê"</strong> é uma palavra tônica e, por ser a última da frase, precisa do acento para marcar a <strong>ênfase na interrogação</strong>.</li>
            </ul>
            
            <h4>Exemplos</h4>
            <ul>
                <li>Você sabe por quê ele saiu tão cedo?</li>
                <li>Não entendo por quê ela não me respondeu.</li>
            </ul>
            
            <h3>Resumo das Regras de Uso dos "Porquês"</h3>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Forma</th>
                            <th>Tipo de Uso</th>
                            <th>Exemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Por que</td>
                            <td>Pergunta direta ou indireta</td>
                            <td>Por que você não veio ontem?</td>
                        </tr>
                        <tr>
                            <td>Porque</td>
                            <td>Explicação ou causa</td>
                            <td>Ele não veio porque estava cansado.</td>
                        </tr>
                        <tr>
                            <td>Porquê</td>
                            <td>Substantivo (razão, motivo)</td>
                            <td>O porquê de sua atitude não ficou claro.</td>
                        </tr>
                        <tr>
                            <td>Por quê</td>
                            <td>Pergunta no final da frase</td>
                            <td>Você sabe por quê ela saiu mais cedo?</td>
                        </tr>
                    </tbody>
                </table>  

                <h4>Outros links:</h4>
                <ul>
                    <li><a href="https://pafianos.blogspot.com/2016/01/duvidas-da-lingua-o-uso-dos-porques.html"
                        target="_blank" class="link">Pafianos: O uso dos porques.</a>
                    </li>
                    <li><a href="https://brasilescola.uol.com.br/gramatica/por-que.htm"
                        target="_blank" class="link"> Brasil Escola: o uso dos porques e exercícios.</a>
                    </li>
                    <li><a href="https://www.todamateria.com.br/exercicios-sobre-o-uso-dos-porques-com-gabarito-comentado/"
                        target="_blank" class="link"> Exercícios</a>
                    </li>
                </ul>
        </div>
        <div class="text-center mt-3 md-5">
        <img src="img/usoPorq.png" style={{maxWidth: '100%', borderRadius:'30px'}} alt="Uso dos porques"/>
        </div>

      </section>

        <Navegador anterior='' disciplina='/portugues' seguinte='/InterpretaçãoDeTexto'/>

    </div>
  );
}

export default Porques;
