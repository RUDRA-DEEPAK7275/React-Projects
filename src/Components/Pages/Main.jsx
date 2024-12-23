import React from 'react'
import { DS_courses } from '../Data&Details/DS_Data'
import { Gpt_courses } from '../Data&Details/Gpt_Data'
import { SS_courses } from '../Data&Details/SS_Data'

function Main() {
    const DS_display = DS_courses.slice(0, 4)
    const Gpt_display = Gpt_courses.slice(0, 4)
    const SS_display = SS_courses.slice(0,4)
    return (
      <>
    <div className='main_content2 mc'>      
            {
              DS_display.map((a) => {
                      return (
                          <div className='course_content2 mc1'>
                              <img src={a.images}  alt='' style={{borderRadius:'5px'}}/>
                              
                              <p>{a.title.slice(0,20)}</p>
                            
                              <p>{a.instructor.slice(0, 20)}</p>
                              <p>{a.rating}</p>
                              <p>{a.price}</p>
                             
                             
                          </div>
                      
                      )
                  })
            }
    </div>
      
    <div className='main_content1 mc'>
          
              {
              Gpt_display.map((a) => {
                      return (
                          <div className='course_content1 mc1'>
                              <img src={a.images}  alt='' style={{borderRadius:'5px'}}/>
                              
                              <p>{a.title.slice(0,20)}</p>
                            
                              <p>{a.instructor.slice(0, 20)}</p>
                              <p>{a.rating}</p>
                              <p>{a.price}</p>
                             
                             
                          </div>
                      
                      )
                  })
              }

            </div>

            <div className='main_content3 mc'>

                {
                    SS_display.map((a) => {
                        return (
                            <div className='course_content3 mc1'>
                                <img src={a.images} alt='' style={{ borderRadius: '5px' }} />

                                <p>{a.title.slice(0, 20)}</p>

                                <p>{a.instructor.slice(0, 20)}</p>
                                <p>{a.rating}</p>
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
