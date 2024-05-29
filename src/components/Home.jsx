import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import { faToggleOff,faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faSun,faMoon} from '@fortawesome/free-solid-svg-icons'

import {me} from '../assets'

const Home = () => {

     const Resume = () => {
          window.open(`${process.env.PUBLIC_URL}/padillaresume.pdf`, '_blank');
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
                    Graduated of Bachelor of Science - BS in Information Technology 
                   <br></br> at Quezon City University, Aspiring to become successful in the IT industry.
               </div>
               <div className='resume'>
                    <button onClick={Resume}>View CV<FontAwesomeIcon icon={faFilePdf} style={{color: "#ffffff",marginLeft:"10px",}} /></button>
               </div>

               <div className='darkmode-content'>
                    <label>
                    <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme}/>
                    <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} style={{ height: '40px',color: isDarkTheme ? '#74C0FC' : 'FFD43B'}} />
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