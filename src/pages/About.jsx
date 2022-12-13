import React from 'react';
import Navbar from '../components/Navbar';
import SocialNetwork from '../components/SocialNetwork';
import '../styles/about.css'
const About = () => {
  return (
    <>
      <Navbar />
      <div className='about translate'>
        <div className="enter">
          <div className="about_Info">
            <p>Hola mi Nombre es</p>
            <h2>Ronny Daniel Pomasqui Chicaiza</h2>
            <span>y me encanta la programación</span>
          </div>
          <div className="text">
            <p>Soy una persona que siempre está dispuesta a aprender, si hay tema que no llegase a entender ten por seguro que lo investigare, soy bastante persistente, si hay algún reto al cual superar tenlo por seguro que lo solucionare.!!!
            </p>
            <br />
            <p>Me considero dedicado y creativo, siempre me encuentro en constante búsqueda de mejorar personal y profesionalmente, me divierto aprendiendo constantemente
            </p>
          </div>
          <div className="red">
            <SocialNetwork />
          </div>
        </div>

      </div>
    </>
  );
};

export default About;