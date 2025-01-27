import React from "react";

function Navegador({anterior, disciplina, seguinte}){
    return(
    <div className="margem-section">
      <div class="row align-items-center ">
        <div class="col-4 text-start">
          {anterior && (<a href={anterior} class="link">Página Anterior</a>)}
        </div>

        <div class="col-4 text-center">
          {disciplina && (<a href={disciplina} class="link">Matéria</a>)}
        </div>
          
        <div class="col-4 text-end">
          {seguinte && (<a href={seguinte} class="link">Página Seguinte</a>)}
        </div>
          
      </div>
    </div>
    );
}
export default Navegador;