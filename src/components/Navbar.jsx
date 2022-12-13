import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././styles/home.css'
const Navbar = () => {
  const [climate, setClimate] = useState({})

  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f06ad45ebda64f08b293021632d7f2d`)
        .then(res => setClimate(res.data));
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])
  const kelvi = climate.main?.temp
  const celcius = Math.floor(kelvi - 273.15)


  return (
    <>
      <div>
        <div className="men">
          <div className="home_link2">
            <Link to='/' className='Link'>Inicio</Link>
            <Link to='/about' className='Link'>Sobre mi</Link>
            <Link to='/resumen' className='Link'>Resumen</Link>
            <Link to='/portafolio' className='Link'>Portafolio</Link>
          </div>
          {/* <i class="fa-solid fa-bars hambur "></i> */}
        </div>


        <div className='home_container translate'>
          <div className="home_link">
            <Link to='/' className='Link'>Inicio</Link>
            <Link to='/about' className='Link'>Sobre mi</Link>
            <Link to='/resumen' className='Link'>Resumen</Link>
            <Link to='/portafolio' className='Link'>Portafolio</Link>
          </div>
          <div className="climate">
            <p>{climate.sys?.country} - {climate.name}</p>
            <div className="grades">
              {/* <i class="fa-solid fa-cloud-sun"></i> */}
              <p>{celcius} °C</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;