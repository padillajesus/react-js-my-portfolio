import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    <section id='about'>
       
        <div className='container'>
               <div className='about-header'>
                  <h1>About Me</h1>
                </div>

              
              
                <h5 className='d-flex justify-content-center text-uppercase mb-3'>Career Objective</h5>
                <h6 className='text-center mb-5'> A BSIT fresh graduate seeking to acquire a job in a productive organization to help me gain real-world
                experience and also enhance my skills.</h6>
             
            
               
                  <h4 className='text-uppercase text-center'>Educational Background</h4>
                

      
                  <div className='row gy-3 mt-3'>
         
                      <div className='col col-sm-12 col-lg-6 text-center'>
                  
                              <div className='title'><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight:'5px' }}/>College</div>
                              <div className='description-about'>
                                  <p> Bachelor of Science in Information Technology <br></br>Quezon City University<br></br>San Bartolome, Quezon City <br></br>2019-2023 </p>
                              </div>
                          
                      </div>
                      <div className='col col-sm-12 col-lg-6 text-center'>
                          
                              <div className='title'><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight:'5px' }}/>Senior High School</div>
                              <div className='description-about'>
                                  <p>IT in Mobile App and Web Development   <br></br>STI College Novaliches <br></br> Novaliches, Quezon City <br></br>2017-2019 </p>   
                              </div>
                          
                      </div>
                      <div className='col col-sm-12 col-lg-6 text-center'>
                          
                              <div className='title'><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight:'5px' }}/>Junior High School </div>
                              <div className='description-about'>
                                  <p>Bagbaguin National High School <br></br>Bragados, Valenzuela City<br></br> 2012-2016</p>
                              </div>
                          
                      </div>
                      <div className='col col-sm-12 col-lg-6 text-center'>
                        
                              <div className='title'><FontAwesomeIcon icon={faGraduationCap} style={{ marginRight:'5px' }}/>Elementary</div>
                              <div className='description-about'>
                                  <p>Andres Mariano Elementary School <br></br>Bagbaguin, Valenzuela City<br></br> 2006-2012</p>
                              </div>
                          
                      </div>
                  </div>
        </div>
            
    


    </section>
  
  )
}

export default About