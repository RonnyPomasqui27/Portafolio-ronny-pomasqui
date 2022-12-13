import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/portafolio.css'
const Portafolio = () => {
  return (
    <>
      <Navbar />
      <div className='portafolio-container translate'>
        <div className="first-section">
          <section>
            <div className="portafolio_img" >
              <div className="text-resumen">
                <h2>E-commerce</h2>
                <p>Axios - React - Css - React Router - Redux</p>
              </div>
            </div>
            <a href='https://magenta-bubblegum-a33025.netlify.app/' target='_blank'>E-commerce</a>
          </section>
          <section>
            <div className="portafolio_img2" >
              <div className="text-resumen">
                <h2>Consumo de la Api de Pokemon</h2>
                <p>React - Axios - Css - React Router - Redux</p>
              </div>
            </div>
            <a href='https://pokedex-ronnypomasqui.netlify.app/' target='_blank'>Pokedex</a>
          </section>
        </div>

        <div className="first-section">
          <section>
            <div className="portafolio_img1">
              <div className="text-resumen">
                <h2>Consumo de la API de Rick and Morty</h2>
                <p>React - Axios - Css - React Router - Redux</p>
              </div>
            </div>
            <a href='https://rick-and-morty-ronny-pomasqui.netlify.app/' target='_blank'>Rick and Morty</a>
          </section>
          <section>
            <div className="portafolio_img3">
              <div className="text-resumen">
                <h2>Pagina con tematica sobre halloween</h2>
                <p>Html - Css - Javascript - SwiperJs</p>
              </div>
            </div>
            <a href='https://halloween-rp.netlify.app/#' target='_blank'>Dulce o truco</a>
          </section>
        </div>

        <div className="first-section">
        <section>
          <div className="portafolio_img4" >
            <div className="text-resumen">
              <h2>Maquetacion E-commerce</h2>
              <p>Html - css -Javascript</p>
            </div>
          </div>
          <a href='https://e-commerce-rp.netlify.app/' target='_blank'>E-commerce</a>
        </section>

        <section>
          <div className="portafolio_img5">
            <div className="text-resumen">
              <h2>Fan page - God of war</h2>
              <p>react js - React Router - AOS - Swiper js - Css</p>
            </div>
          </div>
          <a href='https://fan-page-god-war-ragnarok-rp.netlify.app/' target='_blank'>God of war - ragnarok</a>
        </section>
      </div>
      </div>
    </>
  );
};

export default Portafolio;