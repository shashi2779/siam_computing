import siamm from '../img/siam.png'
import React from 'react'
import './CSS/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-section'>
                    <div className='footer-part'>
                        <img className='img-footer' src={siamm} />
                        <a className='social-1' href="https://www.w3schools.com">hello@siamcomputing.com</a>
                        <p>No 30, 1st Main Road,<br></br>
                            Shastri Nagar,<br></br>
                            Adyar, Chennai,<br></br>
                            Tamil Nadu 600020
                        </p>
                        <div >
                            <a><i class="ri-facebook-fill social-media social-first"></i></a>
                            <a><i class="ri-twitter-fill social-media"></i></a>
                            <a><i class="ri-linkedin-fill social-media"></i></a>
                            <a><i class="ri-youtube-fill social-media"></i></a>
                            <a><i class="ri-google-fill social-media"></i></a>
                        </div>
                    </div>
                    <div className='footer-part'>
                        <h3 >Services</h3>
                        <div className='service-link'>
                            <a >Product strategy and consulting</a><br></br>
                            <a>MVP Development</a><br></br>
                            <a>Dedicated Product Team</a>
                        </div>
                    </div>
                    <div className='footer-part'>
                        <h3 >About</h3>
                        <div className='service-link'>
                            <a >Our Journey</a><br></br>
                            <a>Life at siam</a><br></br>
                            <a>Careers</a>
                        </div>
                    </div>
                    <div className='footer-part'>
                        <h3 >Resources</h3>
                        <div className='service-link'>
                            <a >Blogs</a><br></br>
                            <a>Case Studies</a><br></br>
                            <a>App Development Guide</a><br></br>
                            <a>Product dev guide</a>
                        </div>
                        <div className='social-responsive'>
                            <a><i class="ri-facebook-fill  "></i></a>
                            <a><i class="ri-twitter-fill "></i></a>
                            <a><i class="ri-linkedin-fill "></i></a>
                            <a><i class="ri-youtube-fill "></i></a>
                            <a><i class="ri-google-fill "></i></a>
                        </div>

                    </div>

                </div>
                <div className='copy-right'>
                    <h5>© Copyright 2023 siamcomputing. All Rights Reserved.</h5>
                </div>
                <div className='button-copy-right'><i class="ri-chat-3-line"></i>Hey,there!</div>
            </div>
        </>
    )
}

export default Footer