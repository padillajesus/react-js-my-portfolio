import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram ,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {



  return (  
    <section>

            <div className='footer'>
                        
                         <a href='https://github.com/padillajesus' target='_blank'><FontAwesomeIcon className='github' icon={faGithub} style={{color: "#ffffff", height:'50px',marginLeft:'20px',marginTop:'50px'}} /></a>
                         <a href='https://www.facebook.com/jaaaaaaay1' target='_blank'><FontAwesomeIcon className='facebook' icon={faFacebook} style={{color: "#ffffff",height:'50px',marginLeft:'20px',marginTop:'50px'}} /></a>
                         <a href='https://www.instagram.com/padillajjjj/' target='_blank'><FontAwesomeIcon className='instagram' icon={faInstagram} style={{color: "#ffffff",height:'50px',marginLeft:'20px',marginTop:'50px'}} /></a>
                        
            </div>

    </section>
  )
}

export default Footer