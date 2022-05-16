import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='navbar'>
      <div className='container--full'>
        <div className='navbar-wrap'>
          <a href='/' className='navbar__logo'>
            Logo
          </a>
          <button
            className={`navbar__toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-main${open ? ' open' : ''}`}>
            <nav className='navigation'>
              <ul className='navigation__menu'>
                <li className='navigation__item'>
                  <NavLink
                    to='/'
                    className='navlink'
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/about'
                    className='navlink'
                    onClick={() => setOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/team'
                    className='navlink'
                    onClick={() => setOpen(false)}
                  >
                    Team
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/contact'
                    className='navlink'
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
