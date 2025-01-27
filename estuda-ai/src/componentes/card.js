import React from "react";
import { Link } from "react-router-dom";

function Card({ titulo, imagem, link, cor}) {
  const linkStyle = {
    textDecoration: "none", // Remove o sublinhado
    color: "inherit",
     // Mantém a cor original
  };

  return (
    <Link to={link} style={linkStyle}>
      <div className="card p-1" style={{ width: "300px", borderRadius:'1px', border:'none', height:'120px', display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor:cor|| '#fff'}}>
        <div className="row ">
          <div className="col text-center">
            <div className="card-body">
              <h5 className="card-title" style={{color:'#FFFF'}}>{titulo}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;