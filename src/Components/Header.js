import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={`/`}>
        <h1>Games Emporium</h1>
      </Link>
    </div>
  );
};

export default Header;
