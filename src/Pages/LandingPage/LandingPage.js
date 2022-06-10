import "./LandingPage.css";
import { BatmanQuizContainer } from "../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { rulesData } from "../../data/rulesData";
import { CategoryCard } from "../../component/Cards";
import { useQuestions } from "../../context/QuestionsContext";
const LandingPage = () => {
  const { questionsState } = useQuestions();
  return (
    <BatmanQuizContainer>
      <div className="flex-col bord-3-green">
        <div className="flex-col justify-center-flex align-center-flex quiz-title-text">
          <h2>
            Welcome to the BATMAN quiz, so you think you are a BATMAN fan if yes
            then
          </h2>
          <h2>please take our BATMAN quiz to find out!!</h2>
        </div>
        <div className="rules-section flex-col justify-center-flex align-center-flex gap-2">
          <h2>Rules</h2>
          <ol>
            {rulesData.map((rule) => {
              return <li key={rule.id}>{rule.rule}</li>;
            })}
          </ol>
        </div>
        <div className="flex-col categories-section gap-2">
          <div className="flex-row align-center-flex justify-center-flex">
            <h2>Categories</h2>
          </div>
          <div className="bord-3-green categories flex-row ">
            {questionsState.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </div>
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { LandingPage };
