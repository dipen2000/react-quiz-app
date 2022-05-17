import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ category }) => {
  const { categoryName, categoryDesc, points, imgSrc } = category;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/category/${categoryName}`)}
      className="flex-col category-card-container bord-3-blue curs-point"
    >
      <div className="category-thumbnail-container bord-3-red">
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
