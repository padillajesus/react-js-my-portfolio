import React from 'react'
import  {skills}  from '../constants'



const Skill = () => {


  return (
    <section id='skills'>
                     

          
              <div className='container'>     

                    <div className='tech-stack'>
                          <h1 className='text-uppercase text-center'>Tech Stack</h1>
                    </div>
                 
                    <div className='row'>
                            <div className='d-flex skill-card'>
                                        {skills.map((skill) => (
                                           <div className='skill-image mx-auto gx-3 mt-5'>
                                                  <img src={skill.icon} alt={skill.name}/>
                                                  <div className='skill-name d-flex justify-content-center'>{skill.name}</div>
                                           </div>
                                          
                                          ))}      
                            </div>
                    </div>
              </div>
    </section>
  )
}

export default Skill