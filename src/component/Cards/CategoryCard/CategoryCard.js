import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../../context/categoryContext";
const CategoryCard = ({ category }) => {
  const { categoryName, categoryDesc, points, imgSrc } = category;
  const { setCategory } = useCategory();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setCategory(categoryName);
        navigate(`/category/${categoryName}`);
      }}
      className="flex-col category-card-container  curs-point gap-1"
    >
      <div className="category-thumbnail-container">
        <img className="img-resp" src={imgSrc} alt={`${categoryName} img`} />
      </div>
      <div className="flex-col gap-1">
        <strong>{categoryName}</strong>
        <div className="flex-col">
          <p>{categoryDesc}</p>
          <h3>{points} points</h3>
        </div>
      </div>
    </div>
  );
};

export { CategoryCard };
