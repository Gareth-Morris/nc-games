import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      console.log("Got categories");
      setCategories(categoriesFromApi);
      console.log(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <p>{category.slug}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
