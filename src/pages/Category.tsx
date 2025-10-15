import { useParams} from "react-router-dom";
import { useCategoriesStore } from "../store/useCategoriesStore";

function Category() {
  const { categories } = useCategoriesStore();
  const { categoryId } = useParams();

  const category = categories.find((category) => category.title === categoryId);

  if (!category) {
    return <p>Категория не найдена</p>
  }

  return (
    <>
      <h1>{category.title}</h1>
      <ul className="flex flex-wrap gap-30 justify-center">
        {category.animals.map((animal) => (
          <li>
            <div className="w-100 bg-purple-100 p-5">
              <p className="text-xl">Имя: {animal.name}</p>
              <p className="text-l">Возраст: {animal.age}</p>
              <p className="text-l">Порода: {animal.breed}</p>
              <img src={animal.image} alt={animal.name} />
              <p className="text-l">{animal.description}</p>
              <p className="text-xl">Цена: {animal.price}p</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
