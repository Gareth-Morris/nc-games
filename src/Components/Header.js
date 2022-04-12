import { Link } from "react-router-dom";
import logo from "../img/logo-mobile.png";
import logoTablet from "../img/logo-tablet.png";
import logoLaptop from "../img/logo-laptop-2.png";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`}>
        <picture className="logo">
          <source media="(min-width: 1024px)" srcSet={logoLaptop}/>
          <source media="(min-width: 768px)" srcSet={logoTablet}/>
          <img src={logo} className="logo"/>
        </picture>
      </Link>
    </div>
  );
};

export default Header;
