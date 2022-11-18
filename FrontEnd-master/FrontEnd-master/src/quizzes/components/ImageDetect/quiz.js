import Bag from "./images/bag.jpg";
import Apple from "./images/apple.png"
import Spoon from "./images/spoon.png"
import Bird from "./images/bird.png";
import Three from "./images/three.jpg";
import Duck from "./images/duck.jpg";


export const quiz = {
  quizTitle: "Image Identification Quiz",
  quizSynopsis:
    "In this quiz, you have to select the name of the object with the image. You will get 4 options for each image. Also you will get points upon completion.",
  nrOfQuestions: "6",
  questions: [
    {
      question: "Identify the Given Object",
      questionType: "text",
      questionPic:
        Bag, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["daϱ", "bag", "dag", "baϱ"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "Name this Fruit",
      questionType: "text",
      questionPic:
        Apple, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["apple", "applɘ", "ɒpple", "aqqlɘ"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "Identify the Given Object",
      questionType: "text",
      questionPic:
        Spoon, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["ƨpoon", "spoon", "ƨqoon", "ƨpoon"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "Identify the Given Animal",
      questionType: "text",
      questionPic:
        Bird, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["dird", "dirb", "bird", "biɹd"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },

    {
      question: "Identify the Given Number",
      questionType: "text",
      questionPic:
        Three, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["Ɉhɿee", "thrǝǝ", "tμreǝ", "three"],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },

    {
      question: "Identify the Given Animal",
      questionType: "text",
      questionPic:
        Duck, // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: ["duck", "duɔk", "buck", "ducʞ"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
   
    // {
    //   question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //   questionType: "photo",
    //   answerSelectionType: "single",
    //   answers: [
    //     "https://dummyimage.com/600x400/000/fff&text=A",
    //     "https://dummyimage.com/600x400/000/fff&text=B",
    //     "https://dummyimage.com/600x400/000/fff&text=C",
    //     "https://dummyimage.com/600x400/000/fff&text=D",
    //   ],
    //   correctAnswer: "1",
    //   messageForCorrectAnswer: "Correct answer. Good job.",
    //   messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //   explanation:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   point: "20",
    // },
   
  ],
  appLocale: {
    landingHeaderText: "<questionLength> Questions",
    question: "Question",
    startQuizBtn: "Start Quiz",
    resultFilterAll: "All",
    resultFilterCorrect: "Correct",
    resultFilterIncorrect: "Incorrect",
    nextQuestionBtn: "Next",
    resultPageHeaderText:
      "You have completed the quiz. You got <correctIndexLength> out of <questionLength> questions.",
  },
};
