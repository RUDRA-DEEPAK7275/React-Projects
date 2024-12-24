import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../Assets/Logos/Logo1.png'

function Topnav() {
    return (
        <div className='header'>
            <div className='navbar navbar-expand-lg topnav0 '>
                <div className='container-fluid nav1'>

                    {/* coursera logo */}
                  
                  

                    <Link className='coursera_logo' to="/dashboard">
                        <img src={Logo1} alt='' style={{ width: '160px', height: '30px' }} />
                    </Link>
                    
                        
                 

                   
                    <form action="">
                        <span className='Sicon0'>
                            <Link className='Sicon1' to = './search'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </Link>
                    
                     </span>
                        {/* Search-bar */}
                        <input className='nav_Search_bar' type="text" placeholder='Explore What you want to learn ?'/>
                    </form>

                    <div className='nav_ls_btn '>
                        <Link to='/signup'><button className='nav_signup_btn nav_btn'>Sign up</button></Link>
                        <Link to='/'><button className='nav_login_btn nav_btn'>Log in</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topnav