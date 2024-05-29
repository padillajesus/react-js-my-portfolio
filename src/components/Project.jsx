import React, { useEffect } from 'react';
// import { project } from '../constants'
import 'venobox/dist/venobox.css';
import VenoBox from 'venobox';

import studiovb from '../assets/images/studiovb.png'
import studiovb1 from '../assets/images/studiovb1.png'
import studiovb2 from '../assets/images/studiovb2.png'
import studiovb3 from '../assets/images/studiovb3.png'
import studioasp from '../assets/images/studioasp.png'
import asp1 from '../assets/images/asp1.png'
import asp2 from '../assets/images/asp2.png'
import asp3 from '../assets/images/asp3.png'
import capstone from '../assets/images/capstone.png'
import capstone1 from '../assets/images/capstone1.png'
import capstone2 from '../assets/images/capstone2.png'
import capstone3 from '../assets/images/capstone3.png'



const Project = () => {

  useEffect(() => {

    new VenoBox({
      selector: '.my-image',
      numeration: true,
      infinigall: true,
      spinner: 'swing',
    });
    
  }, []);


  
  return (

    <section id="project">


            <div className='project'>
                <h1 className='text-uppercase text-center'>Projects</h1>
            </div>
           

          <div className='container mt-5'>
              <div className='row'>
               
                    {/* <div className='card-container'>
                                {project.map((project) => (
                                  <div className='image-container border shadow-lg'>
                                        <img src={project.image} alt={project.title}/>
                                        <div className='card-title'>
                                            <h4 className='text-center text-capitalize mt-3'>{project.title}</h4>
                                        </div>
                                        <div className='card-body'>
                                              <h6 className='mx-3'>Description: {project.description}</h6>
                                              <h6 className='mx-3'>Role: {project.role}</h6>
                                              <h6 className='mx-3'>Language: {project.languageused}</h6>
                                            
                                        </div>
                                    </div>
                                ))}
                    </div> */}
                        {/* capstone */}
                        <div className='col-12 col-md-4 col-lg-4'>
                              <div className='card-container'>
                                      
                                      <div className='image-container border shadow-lg'>
                                            
                                      
                                            <a class="my-image" data-gall="capstone-gallery" href={capstone}>
                                              <img src={capstone} alt="capstone"/>
                                              <span class="hover-text">Click to see other images</span>
                                            </a>
                                            <a class="my-image d-none" data-gall="capstone-gallery" href={capstone1}>
                                              <img src={capstone1} alt="capstone1"/>
                                            </a>
                                            <a class="my-image d-none" data-gall="capstone-gallery" href={capstone2}>
                                              <img src={capstone2} alt="capstone2"/>
                                            </a>
                                            <a class="my-image d-none" data-gall="capstone-gallery" href={capstone3}>
                                              <img src={capstone3} alt="capstone3"/>
                                            </a>
                  
                                    
                                            <div className='card-title'>
                                                <h4 className='text-center text-capitalize mt-3'>Web-Based Management Information System of Brgy Sta. Lucia</h4>
                                           
                                            </div>
                                              <div className='card-body'>
                                                  <small className='mx-3'>A capstone system project designed for resident to request document online, monitoring resident's blotter, community announcements and other services of barangay.<br></br></small>
                                                  <small className='mx-3'>Role: Front & Back-end Developer<br></br></small>
                                                  <small className='mx-3'>Language: HTML5,CSS3,Javascript,Bootstrap 5, PHP(Laravel Framework)</small>
                                                
                                            </div>


                                       </div>
                                    
                              </div>
                        </div>

                        {/* studio vb*/}
                        <div className='col-12 col-md-4 col-lg-4'>
                              <div className='card-container'>
                                  
                                      <div className='image-container border shadow-lg'>
                                            <a class="my-image" data-gall="studiovb-gallery" href={studiovb}>
                                              <img src={studiovb} alt="studiovb"/>
                                              <span class="hover-text">Click to see other images</span>
                                            </a>
                                            <a class="my-image d-none" data-gall="studiovb-gallery" href={studiovb1}>
                                              <img src={studiovb1} alt="studiovb1"/>
                                            </a>
                                            <a class="my-image d-none" data-gall="studiovb-gallery" href={studiovb2}>
                                              <img src={studiovb2} alt="studiovb2"/>
                                            </a>
                                            <a class="my-image d-none" data-gall="studiovb-gallery" href={studiovb3}>
                                              <img src={studiovb3} alt="studiovb3"/>
                                            </a>
                                        
                                            <div className='card-title m-1'>
                                                <h4 className='text-center text-capitalize mt-3'>Studio Reservation in VB.net</h4>
                                            </div>

                                            <div className='card-body'>
                                                  <small className='mx-3'>The Studio Reservation system is a desktop application designed to process of reserving studio for many purposes like video shoots, rehearsals, and more. Developed using Visual Basic .NET, this system provides a seamless experience for both administrators and users.<br></br></small>
                                                  <small className='mx-3'>Role: Front & Back-end Developer </small>
                                                  <small className='mx-3'>Language: Visual Basic.net, MariaDB </small>
                                                  
                                            </div>
                                      </div>
                                    
                              </div>
                        </div>

                        {/* studio asp */}
                        <div className='col-12 col-md-4 col-lg-4'>
                              <div className='card-container'>

                                  <div className='image-container border shadow-lg'>

                                                    <a class="my-image" data-gall="studioasp-gallery" href={studioasp}>
                                                      <img src={studioasp} alt="studioasp"/>
                                                      <span class="hover-text">Click to see other images</span>
                                                    </a>
                                                    <a class="my-image d-none" data-gall="studioasp-gallery" href={asp1}>
                                                      <img src={asp1} alt="asp1"/>
                                                    </a>
                                                    <a class="my-image d-none" data-gall="studioasp-gallery" href={asp2}>
                                                      <img src={asp2} alt="asp2"/>
                                                    </a>
                                                    <a class="my-image d-none" data-gall="studioasp-gallery" href={asp3}>
                                                      <img src={asp3} alt="asp3"/>
                                                    </a>
                                          
                                                  
                                                  <div className='card-title m-3'>
                                                      <h4 className='text-center text-capitalize mt-3'>Studio Reservation in ASP.net</h4>
                                                  </div>
                                                  <div className='card-body'>
                                                        <small className='mx-3'>Is a system designed Developed on the ASP.NET framework,  this system provides a seamless experience for both studio managers and clients, offering a centralized platform to manage reservations efficiently.<br></br></small>
                                                        <small className='mx-3'>Role: Front & Back-end Developer </small>
                                                        <small className='mx-3'>Language: HTML5,CSS3,Javascript,MSSQL,C#</small>
                                                      
                                                  </div>
                                  </div>
                                
                              </div>
                              
                        </div>
                          
              </div>

             
          </div>
    </section>

  )
}

export default Project