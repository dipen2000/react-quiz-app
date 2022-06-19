import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(
    sessionStorage.getItem("category") || ""
  );
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
