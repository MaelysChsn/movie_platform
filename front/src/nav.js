import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from './assets/images/logo_imdb.svg';
import { FaMoon } from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import {useSelector, useDispatch} from 'react-redux';
import {selectUser} from "./redux/userSlice";
import logout from "./redux/userSlice";

export default function Nav({setTheme, theme, setUpdate}){

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const [cookies, removeCookie] = useCookies(['hetic_email', 'hetic_token']);

  console.log('user', user);

  const themeToggle = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  const handleDisconnect = (e) => {
      document.cookie = 'hetic_token'+'=; Max-Age=-99999999;';
      document.cookie = 'hetic_email'+'=; Max-Age=-99999999;';
      console.log('disconnect');
      dispatch(logout());
      setUpdate(false);
  }


  return(
    <nav className={`navbar navbar-expand-lg navbar-light ${theme}`}>
      <img src={logo} alt="" width="80px"/>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Films</Link>
          </li>

        </ul>

        <ul className="navbar-nav">
          <li className="nav-item switch_input">
            <label className="switch">
              <input type="checkbox" onChange={() => themeToggle()} />
              <span className="slider round"></span>
            </label>
          </li>
          {
            !user ?
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            :
              <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={handleDisconnect}>Logout <FiLogOut style={{marginLeft:"10px"}}/></Link>
              </li>
          }
        </ul>
      </div>
    </nav>
  )
}
