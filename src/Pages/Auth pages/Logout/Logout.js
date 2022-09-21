import "../auth.css";
import { BatmanQuizContainer } from "../../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    toast.success("Logout successful!");
  }, []);
  return (
    <BatmanQuizContainer>
      <div className="flex-col logout-container justify-center-flex align-center-flex">
        <i
          className="fa-solid fa-circle-check"
          style={{ color: "var(--btn-color)" }}
        ></i>
        <h2>You are successfully logged out.</h2>
        <button
          className="primary-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back home
        </button>
      </div>
    </BatmanQuizContainer>
  );
};

export { Logout };
