import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <h2>All your favourite board games reviewed</h2>
      <h3>Choose a Category:</h3>
      <ul className="navbar">
        {categories.map((category) => {
          const title = category.slug.replaceAll("-", " ");
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <p className="navlist">{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
