import React from 'react'
import './CSS/LandingPage.css'
import slazzerr from '../img/slazzermain.png'
import nvya from '../img/Navya.png'
import xcode from '../img/Xcode-logo.png'



function LandingPage() {
    return (
        <>
            <div className='landing-all'>
                <div className='landingpage'>
                    <div className='landing-content'>
                        <h1>Startups need to scale fast. We get it.</h1>
                        <div className='landing-imggg'>
                            <img src={slazzerr} />
                        </div>

                        <p>Our skin in the game philosophy enables multiple iterations, lower cash burn and a faster road to product-market fitment.</p>
                        <a>Get in touch with an expert</a>
                    </div>
                    <div className='landing-img'>
                        <img src={slazzerr} />
                    </div>
                </div>
                <div className='landing-company'>
                    <div className='company-img company-img-1' ><img src={nvya} /></div>
                    <div className='company-img' ><img src={xcode} /></div>
                    <div className='company-img' ><img src={nvya} /></div>
                    <div className='company-img' ><img src={xcode} /></div>
                    <div className='company-img' ><img src={nvya} /></div>
                    <div className='company-img' ><img src={xcode} /></div>
                </div>
            </div>
        </>
    )
}

export default LandingPage