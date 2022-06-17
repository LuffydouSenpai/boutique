import MenuBtn from "../MenuBtn/MenuBtn";

import "./Menu.css";

function Menu(props) {
    return (
        <nav className ="navigationWrapper">
            {/* <div className="logoWrapper">
                <span className="stylish">Stylish</span>
                <span className="logo">logo</span>
            </div> */}

            <ul className ="navigation">
                <li className ="parent">
                    <MenuBtn>Home</MenuBtn> {/* props.title = innerText props.children = innerHTML */}
                </li>
                <li className ="parent">
                   <MenuBtn>Musique <i className="fa-solid fa-file-audio"></i></MenuBtn>
                </li>
                <li className ="parent" id="servise" onClick={props.action}>
                    {/* declaration d'envent sur un element */}
                    <MenuBtn >Panier <i className="fa-solid fa-cart-shopping"></i></MenuBtn>
                </li>
            </ul>
        </nav>

    );
}

export default Menu;