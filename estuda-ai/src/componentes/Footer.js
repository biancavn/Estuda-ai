import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=>{
    return(
        <div className='footer'>
        <footer class="bg-light text-center">
            <div class="text-center p-3 text-light" style={{backgroundColor: '#64B7CC'}}>
            © 2024 Copyright<br/>
            
            <Link class="text-light" to='/'>EstudaAi.com.br</Link>
            </div>
        </footer>
        </div>  
    );
}
export default Footer;