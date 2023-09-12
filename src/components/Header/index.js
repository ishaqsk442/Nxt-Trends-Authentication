// Write your JS code here
import './index.css'
import {FiMenu} from 'react-icons/fi'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          className="website-logo"
          src="https://www.logosvgpng.com/wp-content/uploads/2018/03/shopify-logo-vector.png"
          alt="website logo"
        />
        <div className="link-login-cont">
          <div>
            <a className="Link" href="start free trail">
              start free trail
            </a>
          </div>
          <div>
            <button type="button" className="nav-mobile-btn">
              <FiMenu className="nav-bar-img" />
            </button>
          </div>
        </div>
      </div>

      <div className="nav-content nav-bar-large-container">
        <div className="logo-list">
          <img
            className="website-logo"
            src="https://www.logosvgpng.com/wp-content/uploads/2018/03/shopify-logo-vector.png"
            alt="website logo"
          />
          <div className="nav-menu">
            <select className="nav-menu-item">
              <option>Solutions</option>
            </select>

            <p className="nav-menu-item">Pricing</p>

            <select className="nav-menu-item">
              <option>Solutions</option>
            </select>
          </div>
        </div>
        <ul className="login-desktop-btn">
          <li>
            <button type="button" className="login-button-option">
              Login
            </button>
          </li>
          <li>
            <button type="button" className="free-trail-desktop-btn">
              Start Free rail
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
export default Header
