import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="header-container">
      <ul className="unOrder">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Header
