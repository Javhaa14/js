// import gradient from "gradient-string";

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import figlet from "figlet";
import {
  rainbow,
  vice,
  fruit,
  pastel,
  passion,
  cristal,
} from "gradient-string";
let score = 0;
let playerName = "";
const checkAnswer = async (answer, correctAnswer) => {
  const spinner = createSpinner("Checking your answer...").start();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (answer === correctAnswer) {
    spinner.success({ text: "Correct! 🎉" });
    score++;
  } else {
    spinner.error({ text: "Wrong answer! ❌" });
  }
};
const askName = async () => {
  const { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: vice("What is your name?"),
  });
  playerName = name;
  console.log(fruit(`\nHello, ${playerName}! Welcome to the Quiz Game! 🚀\n`));
};
const question1 = async () => {
  const answer1 = await inquirer.prompt({
    type: "list",
    name: "q1",
    message: pastel("What is the capital of France?"),
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
  });
  await checkAnswer(answer1.q1, "Paris");
};
const question2 = async () => {
  const answer2 = await inquirer.prompt({
    type: "list",
    name: "q2",
    message: cristal("Which language runs in a web browser?"),
    choices: ["Python", "C++", "Java", "JavaScript"],
  });
  await checkAnswer(answer2.q2, "JavaScript");
};
const question3 = async () => {
  const answer3 = await inquirer.prompt({
    type: "list",
    name: "q3",
    message: fruit("Who developed the theory of relativity?"),
    choices: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Marie Curie",
    ],
  });
  await checkAnswer(answer3.q3, "Albert Einstein");
};
const displayCongrats = () => {
  const congratsText = score === 3 ? "YOU ACED IT!" : "BETTER LUCK NEXT TIME!";
  figlet(congratsText, (err, data) => {
    if (err) {
      console.log("Something went wrong with figlet...");
      console.dir(err);
      return;
    }
    console.log(passion(data));
  });
};
const startQuiz = async () => {
  await askName();
  await question1();
  await question2();
  await question3();
  console.log(
    rainbow.multiline(`\n${playerName}, your final score is: ${score}/3`)
  );
  displayCongrats();
};
startQuiz();
// console.log(
//   gradient(["cyan", "pink", "red", "blue", "yellow", "pink"])("Hello world!")
// );

// let name = "";
// const asuult1 = async () => {
//   const answers = await inquirer
//     .prompt([
//       {
//         name: "name",
//         type: "input",
//         message: "What is ur name?",
//         choices: ["Hulan", "bat", "alimaa"],
//       },
//     ])
//     .then((answers) => {
//       name = answers.name;
//       console.log(`hi ${name}`);
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//       } else {
//       }
//     });
// };
// const asuult2 = async () => {
//   const answers = await inquirer
//     .prompt([
//       {
//         name: "too",
//         type: "checkbox",
//         message: `${name},1+1 hed ve?`,
//         choices: [1, 11, 2],
//       },
//     ])
//     .then((answers) => {
//       {
//         const spinner = createSpinner("").start();

//         setTimeout(() => {
//           if (answers.too == 2) {
//             spinner.success("Zuv bn");
//           } else {
//             spinner.error("buruuu");
//           }
//         }, 600);
//       }
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//       } else {
//       }
//     });
// };
// let hool = "";
// const asuult3 = async () => {
//   const answers = await inquirer
//     .prompt([
//       {
//         name: "hool",
//         type: "list",
//         message: `${name},Yamar mongol hoolond durtai ve?`,
//         choices: [
//           "tsuivan",
//           "buuz",
//           "banshtai tsai",
//           "huushuur",
//           "horhog",
//           "boodog",
//         ],
//       },
//     ])
//     .then((answers) => {
//       {
//         if (answers.hool == choices) {
//           console.log(`${answers.hool} nd durtai bh nee`);
//           hool = answers.hool;
//         } else {
//         }
//       }
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//       } else {
//       }
//     });
// };

// await asuult1();
// await asuult2();
// await asuult3();
