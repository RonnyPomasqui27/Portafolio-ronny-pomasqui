import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/home.css'

const SocialNetwork = () => {
  return (
    <div className='social_container translate'>
      <div className="social">
        {/* <a href='https://www.facebook.com/arironny27/' className='net' target='blank'><i className="fa-brands fa-facebook"></i></a>
        <a href='https://www.instagram.com/ronny_daniel_27/' className='net' target='blank'><i className="fa-brands fa-instagram"></i></a> */}
        <a href='https://www.linkedin.com/in/pomasqui-ronny-46ab6a219/' target='blank' className='net'><i className="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/RonnyPomasqui27' target='blank' className='net'><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  );
};

export default SocialNetwork;