import { useState } from 'react';
import '../App.css';
import './Header.css';
// import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Header = () => {
    /* ================================ Toggle Menu ================================ */
    const [Toggle, showMenu] = useState(false);
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <Link to="/" className="nav__logo">FLAVOR FINDER</Link>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav">
                            <li className="nav__">
                                <Link to="/" className="nav__link active-link">
                                    {/* <BiIcons.BiHouseDoorFill className="nav__icon" /> */}
                                    Home
                                </Link>
                            </li>

                            <li className="nav__">
                                <Link to="/Recipe" className="nav__link">
                                    {/* <BiIcons.BiBook className="nav__icon" /> */}
                                    Recipe
                                </Link>
                            </li>

                            <li className="nav__">
                                <Link to="/Drinks" className="nav__link">
                                    {/* <BiIcons.BiGlass className="nav__icon" />  */}
                                    Drinks
                                </Link>
                            </li>

                            <li className="nav__">
                                <Link to="/Contact" className="nav__link">
                                    {/* <BiIcons.BiPhone className="nav__icon" />  */}
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* <BiIcons.BiX className="nav__close" onClick={() => showMenu(!Toggle)}>Close</BiIcons.BiX> */}
                        <i className="nav__close" onClick={() => showMenu(!Toggle)}>Close</i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        Open
                        {/* <BiIcons.BiList className="bi-list" /> */}
                    </div>
                </nav>
            </header>
        </>
    );
}
