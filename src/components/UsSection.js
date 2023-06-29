import React from 'react'
import './CSS/UsSection.css'
import branding from '../img/brandinggg.png'
import development from '../img/app-development.png'
import team from '../img/team.png'


function UsSection() {
  return (
    <>
      <div className='Us-section'>
        <h3 className='why-us'>Why Us.</h3>
        <div className='container'>
          <div className='container-area'>
            <img src={branding} />
            <h4>Skin in the game</h4>
            <p>We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.</p>
          </div>
          <div className='container-area'>
            <img src={development} />
            <h4>Product Mindset</h4>
            <p>We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.</p>
          </div>
          <div className='container-area'>
            <img src={team} />
            <h4>Developing for Scale</h4>
            <p>We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsSection