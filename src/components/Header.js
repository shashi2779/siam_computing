import React,{useEffect,useState} from 'react'
import './CSS/Header.css'
import siam from '../img/siam.png'

function Header() {
  const [scrolled,setScrolled] = useState(false)

  let handleScroll = () =>{
     const scrollVal = window.scrollY
     console.log(scrollVal)

    // scroll value 200 ho gaye toh true pass krr diye "setScrolled" me
     if(scrollVal>200){
        setScrolled(true)
     }
     else{
        setScrolled(false)
     }
  }

  useEffect(()=>{
      
      window.addEventListener('scroll',handleScroll)
  
    },[])

  return (
    <>
    {/* scrolled ki "value = 200" k upar jaye toh "sticky-header" class lag jaye css se  */}
       <div className={`header  ${scrolled ? "sticky-header" : ''}`}>
          <nav className={`${scrolled ? "sticky-header" : ''}`}>
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