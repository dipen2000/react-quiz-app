import "./ResultPage.css";
import { BatmanQuizContainer } from "../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { useCategory } from "../../context/categoryContext";
import { useQuestions } from "../../context/QuestionsContext";
import { getTotalPoints } from "../../utils/getTotalPoints";
import { useAnswers } from "../../context/answersContext";
import { AnswerCard } from "../../component/Cards";
import { useNavigate } from "react-router-dom";
const ResultPage = () => {
  const navigate = useNavigate();
  const { category, setCategory } = useCategory();
  const { questionsState } = useQuestions();
  const { answerState, setAnswer } = useAnswers();

  const categoryObj = questionsState.find(
    (obj) => obj.categoryName === category
  );

  const totalPoints = getTotalPoints(categoryObj.questions, answerState);

  const playAgainHandler = () => {
    setCategory("");
    setAnswer({ 1: "", 2: "", 3: "", 4: "", 5: "" });
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <BatmanQuizContainer>
      <div className="flex-col gap-2">
        <div className="flex-row justify-center-flex align-center-flex">
          <h2>{category}</h2>
        </div>
        <div className="flex-row justify-center-flex align-center-flex">
          <h2>Total : {totalPoints}/10</h2>
        </div>
        <div className="flex-row justify-center-flex align-center-flex">
          <h2>Solutions</h2>
        </div>
        <div className="flex-col gap-2">
          {categoryObj.questions.map((question) => {
            return <AnswerCard key={question.id} question={question} />;
          })}
        </div>
        <div className="flex-row justify-center-flex align-center-flex gap-2">
          <button className="play-again-btn" onClick={playAgainHandler}>
            Play again
          </button>
          <button className="play-again-btn twitter-color flex-row align-center-flex gap-1">
            <i className="fa-brands fa-twitter"></i>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Hey 👋 everyone, I scored ${totalPoints} out of 10 on the ${category} quiz.

Let's see how much you will score? Play today.`
              )}&url=${encodeURIComponent(
                "https://batquiz-2.netlify.app/"
              )}&via=DipenChavda2`}
            >
              Share on twitter
            </a>
          </button>
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { ResultPage };
