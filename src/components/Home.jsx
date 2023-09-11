import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff,faToggleOn } from '@fortawesome/free-solid-svg-icons'

import {me} from '../assets'

const Home = () => {

     const openResume = () => {
          window.open('./MyResume.pdf', '_blank')
     }

          const [isDarkTheme, setIsDarkTheme] = useState(false);

          const setDarkmode = () =>{
               document.querySelector("body").setAttribute('data-theme','dark')
               setIsDarkTheme(true);
          }
          const setLightmode = ()  => {
               document.querySelector("body").setAttribute('data-theme','light')
               setIsDarkTheme(false);
          }
      
          const toggleTheme = (e) => {
               if(e.target.checked) 
                  setDarkmode();
               else
                  setLightmode(); 
          }
    
  return (
     <section id='home'>
       <div className='container mt-5'>
               <div className='greeting'>
                    Hi, I'm
               </div>
               <div className='name'>
                    Jesus Padilla
               </div>
               <div className='description'>
                    A fresh graduate of Bachelor of Science in Information Technology 
                   <br></br> at Quezon City University.
               </div>
               <div className='resume'>
                    <button onClick={openResume}>View CV<FontAwesomeIcon icon={faFilePdf} style={{color: "#ffffff",marginLeft:"10px",}} /></button>
               </div>

               <div className='darkmode-content'>
                    <label>
                    <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme}/>
                    <FontAwesomeIcon icon={isDarkTheme ? faToggleOn : faToggleOff} style={{ height: '50px' }}/>
                    </label>
                </div>
                    
              

               <div className='picture'>
                    <img src={ me } alt='gradpic'/>
               </div>
          
       </div>
     </section>
    
  )
}

export default Home