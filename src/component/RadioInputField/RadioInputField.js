import "./RadioInputField.css";
const RadioInputField = ({ option, name }) => {
  return (
    <div className="option bord-3-purple flex-row gap-1 align-center-flex">
      <input name={name} type="radio" id={option.id} required />
      <label htmlFor={option.id}>{option.option}</label>
    </div>
  );
};

export { RadioInputField };
