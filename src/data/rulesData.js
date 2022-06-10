import { v4 as uuid } from "uuid";
const rulesData = [
  {
    id: uuid(),
    rule: "You will have 5 questions.",
  },
  {
    id: uuid(),
    rule: "The right answer will give you 2 points, Wrong will add 0 to your total.",
  },
  {
    id: uuid(),
    rule: "To clear the Quiz, you will have to answer all questions correctly",
  },
];

export { rulesData };
