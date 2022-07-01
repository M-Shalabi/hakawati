import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Scrollspy from 'react-scrollspy'

export default function Navbar() {
  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  const CLoseMenuTrigger  = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  const stickyHeader = () => {}
  return (
    <>
    
    <header className='header-area formobile-menu header--fixed default-color'>
          <div className='header-wrapper' id='header-wrapper'>
            <div className='header-left'>
              <div className='logo'>
                <a href='/'>
                  <img className='logo-1' src='./assets/images/logo/haka-logo-light.png' alt='Logo Images' />
                  <img className='logo-2' src='./assets/images/logo/haka-logo-dark.png' alt='Logo Images' />
                </a>
              </div>
            </div>
            <div className='header-right'>
              <nav className='mainmenunav d-lg-block'>
                <Scrollspy
                  className='mainmenu'
                  items={["home", "about", "portfolio", "team", "testimonial", "blog", "contact"]}
                  currentClassName='is-current'
                  offset={-200}>
                  <li>
                    <a href='#home'>Home</a>
                  </li>
                  <li>
                    <a href='#about'>About</a>
                  </li>
                  <li>
                    <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li>
                    <a href='#team'>Team</a>
                  </li>
                  <li>
                    <a href='#testimonial'>Testimonial</a>
                  </li>
                  <li>
                    <a href='#blog'>Blog</a>
                  </li>
                  <li><a href="#contact">Contact</a></li>
                </Scrollspy>
              </nav>

              {/* Start Humberger Menu  */}
              <div className='humberger-menu d-block d-lg-none pl--20'>
                <span onClick={ menuTrigger} className='menutrigger text-white'>
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className='close-menu d-block d-lg-none'>
                <span onClick={ CLoseMenuTrigger} className='closeTrigger'>
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
    
    </>
  )
}
