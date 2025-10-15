import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCategoriesStore } from "../store/useCategoriesStore";

function Catalog() {
  const { categories, fetchCategories} = useCategoriesStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <h1 className="ml-20 mt-10">Каталог животных</h1>

      {/* {loading && <p className="flex gap-30 justify-center">Loading...</p>} */}

      <ul className="flex flex-wrap gap-30 justify-center">
        {categories.map((category) => (
          <li>
            <Link
              to={`/category/${category.title}`}
              className="relative flex flex-col items-center justify-center"
            >
              <img src={category.image} alt={category.title} className="w-110"/>
              <p className="text-2xl">{category.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Catalog;
