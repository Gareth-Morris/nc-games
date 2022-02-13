import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User";
import { useContext } from "react";

const Header = () => {
  const msg = useContext(UserContext);
  return (
    <div>
      <Link to={`/`}>
        <h1>Games Emporium</h1>
      </Link>
      <p>{msg}</p>
    </div>
  );
};

export default Header;
