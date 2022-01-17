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
      <ul>
        {categories.map((category) => {
          const title = category.slug.replaceAll("-", " ").toUpperCase();
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
