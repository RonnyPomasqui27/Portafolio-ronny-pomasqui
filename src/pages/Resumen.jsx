import React from 'react';
import Navbar from '../components/Navbar';
import '../../src/styles/resumen.css';

const Resumen = () => {
  return (
    <>
      <Navbar />
      <div className='resumen_container'>
        <div className="resumen_software">
          <h4 className='sub'>Habilidades en Software</h4>
          <div className="skills">
            <div className="img_resumen">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png' alt="html logo" />
              <p style={{ fontSize: '0.9rem' }}>Html</p>
            </div>
            <div className="img_resumen">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css logo" />
              <p style={{ fontSize: '0.9rem' }}>Css</p>
            </div>
            <div className="img_resumen">
              <img src="https://forkpoint.com/wp-content/uploads/js-logo.png" alt="javascript logo" />
              <p style={{ fontSize: '0.9rem' }}>Js</p>
            </div>
            <div className="img_resumen">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react logo" />
              <p style={{ fontSize: '0.9rem' }}>React</p>
            </div>
            <div className="img_resumen">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png" alt="visual basic logo" />
              <p style={{ fontSize: '0.9rem' }}>VB.net</p>
            </div>
            <div className="img_resumen">
              <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/author-images/progress-blog-default-logo-transparent.png?sfvrsn=c1207fac_1" alt="telerik logo" />
              <p style={{ fontSize: '0.9rem' }}>Telerik</p>
            </div>
          </div>
          <div className="lenguajes">
            <h4 className='sub'>Lenguajes</h4>
            <div className="leng_container">
              <p style={{ fontSize: '1rem' }}>Español : Nativo</p>
              <p style={{ fontSize: '1rem' }}>Ingles : B1</p>
            </div>
          </div>
          <div className="lenguajes">
            <h4 className='sub'>Habilidades</h4>
            <div className="leng_container">
              <p style={{ fontSize: '1rem' }}>Trabajo en equipo, Dispuesto a aprender, Adaptabilidad...</p>
            </div>
          </div>
        </div>
        <div className="experience_container">
          <h4 className='sub'>Experiencia</h4>
          <div className="first">
            <div className="experience">
              <i class="fa-solid fa-microchip icon"></i>
              <div className="info">
                <span style={{ color: 'white', fontSize: '0.8rem' }}>2021-2022</span>
                <h4 style={{ color: 'white' }}>Desarrollador con Visual Basic .net</h4>
                <p style={{ fontSize: '1rem' }}>Vteksoftfin</p>
              </div>
            </div>
            <div className="experience">
              <i className="fa-solid fa-shop icon" ></i>
              <div className="info">
                <span style={{ color: 'white', fontSize: '0.8rem' }}>2020-2021</span>
                <h4 style={{ color: 'white' }}>Atención al cliente y cajero</h4>
                <p style={{ fontSize: '1rem' }}>Broos shop</p>
              </div>
            </div>
          </div>
          <div className="lenguajes">
            <h4 className='sub'>Educación</h4>
            <div className="experience2">
              <i className="fa-solid fa-school icon" ></i>
              <div className="info">
                <a href="https://drive.google.com/file/d/1S9Swb0FZktMK8iljS4nJCuuDghlF08mV/view?usp=sharing" target='blank' className='anchore'>
                  <span style={{ color: 'white', fontSize: '0.8rem' }}>2020</span>
                  <h4 style={{ color: 'white' }}>institucion educativa fiscal cumbaya</h4>
                  <p style={{ fontSize: '1rem' }}>Quito-Ecuador</p>
                </a>
              </div>
            </div>
            <div className="experience2">
              <i className="fa-solid fa-code icon" ></i>
              <div className="info">
                <a href="https://certificates.academlo.com/en/verify/99468418538409" target='blank' className='anchore'>
                  <span style={{ color: 'white', fontSize: '0.8rem' }}>2022</span>
                  <h4 style={{ color: 'white' }}>Fundamentos de Desarrollo Web</h4>
                  <p style={{ fontSize: '1rem' }}>Academlo</p>
                </a>
              </div>
            </div>
            <div className="experience2">
              <i class="fa-solid fa-desktop icon" style={{ fontSize: '1.4rem' }}></i>
              <div className="info">
                <a href="https://certificates.academlo.com/en/verify/12667677394225" target='blank' className='anchore'>
                  <span style={{ color: 'white', fontSize: '0.8rem' }}>2022</span>
                  <h4 style={{ color: 'white' }}>Desarrollo de Aplicaciones Web con React</h4>
                  <p style={{ fontSize: '1rem' }}>Academlo</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="resumen_add">
          <h4 className='sub'>Que puedo hacer ?</h4>
          <div className="leng_container">
            <p style={{ fontSize: '1rem', wordSpacing: '5px' }}>- Paginas web totalmente responsive</p>
            <p style={{ fontSize: '1rem', wordSpacing: '5px' }}>- Consumo de apis con react y axios</p>
            <p style={{ fontSize: '1rem', wordSpacing: '5px' }}>- uso de GIT HUB</p>
            <p style={{ fontSize: '1rem', wordSpacing: '5px' }}>- Mantenimiento de equipos de computo</p>
          </div>

          <div className="form_container">
            <form action="" className='form'>

              <div className='div'>
                <label htmlFor="">Nombre :  </label>
                <input type="text" />
              </div>
              <div className='div'>
                <label htmlFor="">Correo :  </label>
                <input type="text" />
              </div>
              <div className='div'>
                <label htmlFor="">Mensaje :  </label>
                <input type="text" />
              </div>

              <div className="div">
                <button className='submit'>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </>
  );
};

export default Resumen;