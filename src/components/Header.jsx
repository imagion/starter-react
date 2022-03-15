import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = e => {
    e.preventDefault()

    setOpen(!open)
  }

  return (
    <header>
      <div className='container--full'>
        <div className='main-nav'>
          <a href='#' className='main-nav__logo'>
            Logo
          </a>
          <nav>
            <ul className={'main-nav__list' + (open ? ' open' : '')}>
              <li className='main-nav__item'>
                <a href='#' className='main-nav__link'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='main-nav__link'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='main-nav__link'>
                  Team
                </a>
              </li>
              <li>
                <a href='#' className='main-nav__link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={'main-nav__toggle' + (open ? ' open' : '')}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
