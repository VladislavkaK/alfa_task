import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.scss';

const Header = () => {
    return (
          <header className="header__app" >
              <h1 className="header__app--logo" ><Link to={{pathname: "/"}} >ALFA TASK</Link></h1>
              <ul className="header__app--navbar">
                  <li><Link to={{pathname: "/login"}} >Вход</Link></li>
                  <li><Link to={{pathname: "/buttons"}} >Кпопки</Link></li>
                  <li><Link to={{pathname: "/checkboxes"}} >Чекбоксы</Link></li>
              </ul>
          </header>
    )
}

export default Header;
