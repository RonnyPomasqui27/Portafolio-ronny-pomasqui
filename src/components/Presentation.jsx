import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/home.css'
const Presentation = () => {
  return (
    <div className='presentation_continainer translate'>
      <div className="presentation_info">
        <p style={{ fontSize: '4.5rem', fontWeight: '300' }}>RONNY</p>
        <p style={{ fontSize: '5rem', fontWeight: '600' }}>POMASQUI</p>
        <p style={{ fontSize: '2rem' }}>Desarrollador front-end</p>
        <div className="presentation_anchor">
          <a href='https://drive.google.com/file/d/1a_hXHNH6MuUVxpqpUQ8ZfUlal1wbvu58/view?usp=sharing' target='_blank' id='hover'>Curriculum</a>
          <Link to={'/portafolio'} id='hover'>Portafolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;