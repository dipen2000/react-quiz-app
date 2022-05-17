import { v4 as uuid } from "uuid";
const questionsData = [
  {
    id: uuid(),
    categoryName: "THE BATMAN",
    categoryDesc:
      "Play this quiz if you know all about the new THE BATMAN movie.",
    imgSrc:
      "https://images.hindustantimes.com/img/2022/03/04/550x309/the_batman_review_1646365281127_1646365281244.jpeg",
    points: 5,
  },
  {
    id: uuid(),
    categoryName: "THE DARK KNIGHT",
    categoryDesc:
      "Play this quiz if you love the greatest comic-book movie of all time.",
    imgSrc:
      "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-dark-knight-2008/dark-knight.jpg",
    points: 5,
  },
  {
    id: uuid(),
    categoryName: "THE DARK KNIGHT RISES",
    categoryDesc:
      "Play this quiz if you believe in Bruce Wayne to climb out of the pit and rise.",
    imgSrc:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/christian_bale_in_the_dark_knight_rises.jpg",
    points: 5,
  },
];

export { questionsData };
