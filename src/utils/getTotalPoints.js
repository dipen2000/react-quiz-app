const getTotalPoints = (questions, answersObj) => {
  return questions.reduce((acc, curr) => {
    if (curr.answer === answersObj[curr.number]) {
      acc += curr.points;
    }
    return acc;
  }, 0);
};

export { getTotalPoints };
