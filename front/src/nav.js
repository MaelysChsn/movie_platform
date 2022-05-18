import { Link } from "react-router-dom";
import logo from './assets/images/logo_imdb.svg';
export default function Nav({setTheme, theme}){


    const themeToggle = () => {
      theme === 'light' ? setTheme("dark") : setTheme("light");
    }

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="" width="80px"/>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Films</Link>
          </li>

        </ul>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <label class="switch">
              <input type="checkbox" onChange={() => themeToggle()} />
              <span class="slider round"></span>
              Theme
            </label>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
