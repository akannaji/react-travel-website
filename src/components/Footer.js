import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='footer-input' />
                </form>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to={process.env.PUBLIC_URL + '/sign-up'}>How it works</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Testimonials</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Careers</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Investors</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Terms of Service</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to={process.env.PUBLIC_URL + '/'}>Contact</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Support</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Destinations</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to={process.env.PUBLIC_URL + '/'}>Submit Video</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Ambassadors</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Agency</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Influencer</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to={process.env.PUBLIC_URL + '/'}>Instagram</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Facebook</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Youtube</Link>
                    <Link to={process.env.PUBLIC_URL + '/'}>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" className='social-logo'>
                        TRVL <i className='fa-solid fa-rocket' />
                    </Link>
                </div>
                <small className='website-rights'>TRVL 2020</small>
                <div className='social-icons'>
                    <Link 
                        className='social-icon-link facebook' 
                        to={process.env.PUBLIC_URL + '/'} 
                        target='_blank' 
                        aria-label='facebook'>
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link 
                        className='social-icon-link instagram' 
                        to={process.env.PUBLIC_URL + '/'} 
                        target='_blank' 
                        aria-label='Instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link 
                        className='social-icon-link youtube' 
                        to={process.env.PUBLIC_URL + '/'} 
                        target='_blank' 
                        aria-label='Youtube'>
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link 
                        className='social-icon-link twitter' 
                        to={process.env.PUBLIC_URL + '/'} 
                        target='_blank' 
                        aria-label='Twitter'>
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link 
                        className='social-icon-link linkedin' 
                        to={process.env.PUBLIC_URL + '/'} 
                        target='_blank' 
                        aria-label='LinkedIn'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer