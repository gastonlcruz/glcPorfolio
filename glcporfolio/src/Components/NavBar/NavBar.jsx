import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
         <nav>
          <ul className="nav-list">
            <li className="nav-item">Inicio</li>
            <li className="nav-item">Proyectos</li>
            <li className="nav-item">Educación</li>
            <li className="nav-item">Experiencia</li>
            <li className="nav-item">Contacto</li>
          </ul>
        </nav>

        </div>
    );
}

export default NavBar;