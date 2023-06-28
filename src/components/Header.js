import React from 'react'
import './CSS/Header.css'
import siam from '../img/siam.png'

function Header() {
  return (
    <>
       <div>
          <nav>
            <img src={siam}/>
            <ul>
               <li>Services<i class="ri-arrow-down-s-fill arrow-btn"></i></li>
               <li>Skills<i class="ri-arrow-down-s-fill arrow-btn "></i></li>
               <li>About<i class="ri-arrow-down-s-fill arrow-btn"></i></li>
               <li>Resources<i class="ri-arrow-down-s-fill arrow-btn"></i></li>
               <a className='button'>Book a free call</a>
            </ul>
            <div className='menu'><i class="ri-menu-line"></i></div>
          </nav>
      </div>
    </>
  )
}

export default Header