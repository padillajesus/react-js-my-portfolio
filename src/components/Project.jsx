import React from 'react'
import { project } from '../constants'



const Project = () => {
  

  
  return (

    <section id='project'>


            <div className='project'>
                <h1 className='text-uppercase text-center'>Projects</h1>
            </div>
           

          <div className='container mt-5'>
              <div className='row'>
                    <div className='card-container'>
                                {project.map((project) => (
                                  <div className='image-container border shadow-lg'>
                                        <img src={project.image} alt={project.title}/>
                                        <div className='card-title'>
                                            <h4 className='text-center text-uppercase'>{project.title}</h4>
                                        </div>
                                        <div className='card-body'>
                                              <h6 className='mx-3'>Description: {project.description}</h6>
                                              <h6 className='mx-3'>Role: {project.role}</h6>
                                              <h6 className='mx-3'>Language: {project.languageused}</h6>
                                            
                                        </div>
                                    </div>
                                ))}
                      </div>
              </div>
          </div>
    </section>

  )
}

export default Project