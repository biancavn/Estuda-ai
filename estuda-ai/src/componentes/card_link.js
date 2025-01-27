import React from "react";
import { Link } from "react-router-dom";

function Card_link({ titulo, link, cor}) {
  const linkStyle = {
    textDecoration: "none", // Remove o sublinhado
    color: "inherit",
     // Mantém a cor original
  };

  return (
    <Link to={link} style={linkStyle}>
      <div className="card m-1 p-1" style={{ width: "180px", borderRadius:'50px', border:'none', display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor:cor|| '#fff'}}>
        <div className="row g-0">
          <div className="col text-center">
            <div className="card-body">
              <Link class="nav-link active text-white" to="/" style={{fontSize:'20px', fontWeight:'bold'}}>{titulo}</Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card_link;