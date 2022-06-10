import { v4 as uuid } from "uuid";
const questionsData = [
  {
    id: uuid(),
    categoryName: "THE BATMAN",
    categoryDesc:
      "Play this quiz if you know all about the new THE BATMAN movie.",
    imgSrc:
      "https://images.hindustantimes.com/img/2022/03/04/550x309/the_batman_review_1646365281127_1646365281244.jpeg",
    points: 10,
    questions: [
      {
        id: uuid(),
        question:
          "In THE BATMAN movie , Bruce wayne was inspired by which famous real life celebrity?",
        options: [
          { id: uuid(), option: "Axel rose" },
          { id: uuid(), option: "Prince" },
          { id: uuid(), option: "Kurt Cobain" },
          { id: uuid(), option: "Bon jovi" },
        ],
        number: "1",
        points: 2,
        answer: "Kurt Cobain",
      },
      {
        id: uuid(),
        question: "What was the real name of riddler in THE BATMAN movie?",
        options: [
          { id: uuid(), option: "Edwrad Nigma" },
          { id: uuid(), option: "Arthur Fleck" },
          { id: uuid(), option: "Edwrad Nashton" },
          { id: uuid(), option: "Edward Enigma" },
        ],
        number: "2",
        points: 2,
        answer: "Edwrad Nashton",
      },
      {
        id: uuid(),
        question:
          "Name the first Gotham citizen who was murdered by the Riddler during the beginning of the movie.",
        options: [
          { id: uuid(), option: "Don Michell jr." },
          { id: uuid(), option: "Annika Koslov" },
          { id: uuid(), option: "Gil Colson" },
          { id: uuid(), option: "Falcone" },
        ],
        number: "3",
        points: 2,
        answer: "Don Michell jr.",
      },
      {
        id: uuid(),
        question: "Who got Bruce Wayne's parents murdered?",
        options: [
          { id: uuid(), option: "Joe Chill" },
          { id: uuid(), option: "Falcone" },
          { id: uuid(), option: "Edward Nashton" },
          { id: uuid(), option: "Penguin" },
        ],
        number: "4",
        points: 2,
        answer: "Falcone",
      },
      {
        id: uuid(),
        question: "What was the name of Selina friend?",
        options: [
          { id: uuid(), option: "Samantha" },
          { id: uuid(), option: "Annika Koslov" },
          { id: uuid(), option: "Jennifer" },
          { id: uuid(), option: "Ellie" },
        ],
        number: "5",
        points: 2,
        answer: "Annika Koslov",
      },
    ],
  },
  {
    id: uuid(),
    categoryName: "THE DARK KNIGHT",
    categoryDesc:
      "Play this quiz if you love the greatest comic-book movie of all time.",
    imgSrc:
      "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-dark-knight-2008/dark-knight.jpg",
    points: 10,
    questions: [
      {
        id: uuid(),
        question: "What does the Joker use as a getaway car after his heist?",
        options: [
          { id: uuid(), option: "A semi-trailer truck" },
          { id: uuid(), option: "A school bus" },
          { id: uuid(), option: "A moped" },
          { id: uuid(), option: "A Garbage truck" },
        ],
        number: "1",
        points: 2,
        answer: "A school bus",
      },
      {
        id: uuid(),
        question: "Where does Batman travel to retrieve Lau?",
        options: [
          { id: uuid(), option: "Beijing" },
          { id: uuid(), option: "Hong Kong" },
          { id: uuid(), option: "Shanghai" },
          { id: uuid(), option: "Tokyo" },
        ],
        number: "2",
        points: 2,
        answer: "Hong Kong",
      },
      {
        id: uuid(),
        question: "How did Harvey Dent get his lucky coin?",
        options: [
          { id: uuid(), option: "His father gave it to him" },
          { id: uuid(), option: "He found it" },
          { id: uuid(), option: "Rachel gave it to him" },
          { id: uuid(), option: "He created it" },
        ],
        number: "3",
        points: 2,
        answer: "His father gave it to him",
      },
      {
        id: uuid(),
        question: "What is Harvey Dent's campaign slogan?",
        options: [
          { id: uuid(), option: "Trust in Harvey Dent" },
          { id: uuid(), option: "Put your faith in harvey Dent" },
          { id: uuid(), option: "Gotham's well with Harvey Dent" },
          { id: uuid(), option: "I believe in Harvey Dent" },
        ],
        number: "4",
        points: 2,
        answer: "I believe in Harvey Dent",
      },
      {
        id: uuid(),
        question: "What is the name of the Batmobile in The Dark Knight?",
        options: [
          { id: uuid(), option: "The Rambler" },
          { id: uuid(), option: "The Tumbler" },
          { id: uuid(), option: "The Bruiser" },
          { id: uuid(), option: "The Destroyer" },
        ],
        number: "5",
        points: 2,
        answer: "The Tumbler",
      },
    ],
  },
  {
    id: uuid(),
    categoryName: "THE DARK KNIGHT RISES",
    categoryDesc:
      "Play this quiz if you believe in Bruce Wayne to climb out of the pit and rise.",
    imgSrc:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/christian_bale_in_the_dark_knight_rises.jpg",
    points: 10,
    questions: [
      {
        id: uuid(),
        question: `What is the word "Deh-Shay Bah-Sah-Rah!" mean?`,
        options: [
          { id: uuid(), option: "Get up" },
          { id: uuid(), option: "Rise" },
          { id: uuid(), option: "Death" },
          { id: uuid(), option: "Vengeance" },
        ],
        number: "1",
        points: 2,
        answer: "Rise",
      },
      {
        id: uuid(),
        question: `Which scientist is abducted by Bane in "The Dark Knight Rises"?`,
        options: [
          { id: uuid(), option: "Dr. Richter" },
          { id: uuid(), option: "Dr. Pavel" },
          { id: uuid(), option: "Dr. Mellish" },
          { id: uuid(), option: "Dr. Volkov" },
        ],
        number: "2",
        points: 2,
        answer: "Dr. Pavel",
      },
      {
        id: uuid(),
        question: `In the last scene of "The Dark Knight Rises", Alfred sees Selina and Bruce alive in which country?`,
        options: [
          { id: uuid(), option: "Spain" },
          { id: uuid(), option: "Italy" },
          { id: uuid(), option: "France" },
          { id: uuid(), option: "England" },
        ],
        number: "3",
        points: 2,
        answer: "Italy",
      },
      {
        id: uuid(),
        question: "Who is the father of Talia?",
        options: [
          { id: uuid(), option: "Jim Gordan" },
          { id: uuid(), option: "Raas al ghul" },
          { id: uuid(), option: "Harvey Dent" },
          { id: uuid(), option: "Lucius Fox" },
        ],
        number: "4",
        points: 2,
        answer: "Raas al ghul",
      },
      {
        id: uuid(),
        question:
          "Who is the only character besides Bruce Wayne to climb out of The Pit?",
        options: [
          { id: uuid(), option: "Talia" },
          { id: uuid(), option: "Bane" },
          { id: uuid(), option: "John Bennett" },
          { id: uuid(), option: "Raas al ghul" },
        ],
        number: "5",
        points: 2,
        answer: "Talia",
      },
    ],
  },
];

export { questionsData };
