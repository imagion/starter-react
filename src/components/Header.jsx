import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = e => {
    e.preventDefault()

    setOpen(!open)
  }

  return (
    <header className='header'>
      <div className='container--full'>
        <nav className='main-nav'>
          <a href='#' className='main-nav__logo'>
            Logo
          </a>
          <button className='main-nav__toggle'>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className='main-nav__menu'>
            <ul className='main-nav__list'>
              <li className='main-nav__item'>
                <a href='#' className='main-nav__link'>
                  Home
                </a>
              </li>
              <li className='main-nav__item'>
                <a href='#' className='main-nav__link'>
                  About
                </a>
              </li>
              <li className='main-nav__item'>
                <a href='#' className='main-nav__link'>
                  Team
                </a>
              </li>
              <li className='main-nav__item'>
                <a href='#' className='main-nav__link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
