import React from 'react'
import { DS_courses } from '../Data&Details/DS_Data'
import { Gpt_courses } from '../Data&Details/Gpt_Data'
import { SS_courses } from '../Data&Details/SS_Data'
import { Trd_courses } from '../Data&Details/Trd_Data'
import { WD_courses } from '../Data&Details/WD_Data'
import Rating from '@mui/material/Rating';
// import { light } from '@mui/material/styles/createPalette'

function Main() {
    const Trd_display = Trd_courses.slice(0,4)
    const DS_display = DS_courses.slice(0, 4)
    const Gpt_display = Gpt_courses.slice(0, 4)
    const SS_display = SS_courses.slice(0, 4)
    const WD_display = WD_courses.slice(0,4)
    return (
        <>
            <br />
            <br/>
            <br />
            <h2 style={{ WebkitTextFillColor: 'Blue', textAlign: 'start', fontWeight:'bolder' }}>Trending Courses</h2>
            <br />
           
            <div className='main_content0 mc'>
               
                
                {
                    
                    Trd_display.map((a) => {
                        return (
                            <div className='course_content0 mc1'>
                               

                                <img src={a.images} alt='' style={{ borderRadius: '5px' }} />

                                <p style={{fontWeight:'bold'}}>{a.title.slice(0, 30)}
                                    {a.title.slice(30, 70)}</p>

                                <p style={{fontWeight:'light'}}>{a.instructor.slice(0, 30)}
                                    {a.instructor.slice(30,70)}
                                </p>
                                <p><Rating name="size-medium" defaultValue={4.5} /></p>
                                <p>{a.price}</p>


                            </div>

                        )
                    })
                }
            </div>

            <br />
            <h2 style={{ WebkitTextFillColor: 'Blue', textAlign: 'start', fontWeight: 'bolder' }}>ChatGPT Courses</h2>
            <br/>

            <div className='main_content1 mc'>

                {
                    Gpt_display.map((a) => {
                        return (
                            <div className='course_content1 mc1'>
                                <img src={a.images} alt='' style={{ borderRadius: '5px' }} />
                                <p style={{ fontWeight: 'bold' }}>{a.title.slice(0, 30)}
                                    {a.title.slice(30, 70)}</p>
                                <p style={{ fontWeight: 'light' }}>{a.instructor.slice(0, 30)}
                                    {a.instructor.slice(30, 70)}
                                </p>
                                <p><Rating name="size-medium" defaultValue={4} /></p>
                                <p>{a.price}</p>


                            </div>

                        )
                    })
                }

            </div>  
            
            <br />
            <h2 style={{ WebkitTextFillColor: 'Blue', textAlign: 'start', fontWeight: 'bolder' }}>Data Science Courses</h2>
            <br />
            
    <div className='main_content2 mc'>      
            {
              DS_display.map((a) => {
                      return (
                          <div className='course_content2 mc1'>
                              <img src={a.images}  alt='' style={{borderRadius:'5px'}}/>
                              <p style={{ fontWeight: 'bold' }}>{a.title.slice(0, 30)}
                                  {a.title.slice(30, 70)}</p>
                              <p style={{ fontWeight: 'light' }}>{a.instructor.slice(0, 30)}
                                  {a.instructor.slice(30, 70)}
                              </p>
                              <p><Rating name="size-medium" defaultValue={4} /></p>
                              <p>{a.price}</p>
                             
                             
                          </div>
                      
                      )
                  })
            }
            </div>

            <br />
            <h2 style={{ WebkitTextFillColor: 'Blue', textAlign: 'start', fontWeight: 'bolder' }}>Web Development Courses</h2>
            <br />

            <div className='main_content3 mc'>

                {
                    WD_display.map((a) => {
                        return (
                            <div className='course_content3 mc1'>
                                <img src={a.images} alt='' style={{ borderRadius: '5px' }} />
                                <p style={{ fontWeight: 'bold' }}>{a.title.slice(0, 30)}
                                    {a.title.slice(30, 70)}</p>
                                <p style={{ fontWeight: 'light' }}>{a.instructor.slice(0, 30)}
                                    {a.instructor.slice(30, 70)}
                                </p>
                                <p>
                                    <Rating name="size-medium" defaultValue={4} />
                                </p>
                                <p>{a.price}</p>
                            </div>

                        )
                    })
                }

            </div>

            <br />
            <h2 style={{ WebkitTextFillColor: 'Blue', textAlign: 'start', fontWeight: 'bolder' }}>Soft Skills Courses</h2>
            <br/>
    
            <div className='main_content4 mc'>

                {
                    SS_display.map((a) => {
                        return (
                            <div className='course_content4 mc1'>
                                <img src={a.images} alt='' style={{ borderRadius: '5px' }} />
                                <p style={{ fontWeight: 'bold' }}>{a.title.slice(0, 30)}
                                    {a.title.slice(30, 70)}</p>
                                <p style={{ fontWeight: 'light' }}>{a.instructor.slice(0, 30)}
                                    {a.instructor.slice(30,70)}
                                </p>
                                <p> 
                                    <Rating name="size-medium" defaultValue={4} />
                               </p>
                                <p>{a.price}</p>


                            </div>

                        )
                    })
                }

            </div>
        </>
          )
    
}

export default Main
