// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));
const students = [
  {
    name: "Javkhlan",
    nickname: "Javhaa",
    seedNo: "1F",
    gender: "male",
    hobby: ["gaming", "coding", "watching movie,anime", "sleeping"],
  },
  {
    name: "Munkhbold",
    seedNo: "2C",
    gender: "male",
    nickname: "muugii",
    hobby: [
      "gamer",
      "artist",
      "streamer",
      "digitalart",
      "volleyball",
      "3dmodelmaker",
    ],
  },
  {
    name: "Tsatsral",
    seedNo: "4A",
    gender: "female",
    hobby: "watch anime",
    nickname: "nottsatsa",
  },
  {
    name: "Ochirzaya",
    nickname: "Zaya",
    seedNo: "1E",
    gender: "male",
    hobby: "play-soccer",
  },
  {
    name: "Enkhbayar",
    seedNo: "5C",
    nickname: "Eba",
    gender: "male",
    hobby: ["Quiz", "movie", "reading", "cooking", "gaming", "hiking"],
  },
  {
    name: "Batmend",
    nick: "mende",
    seedNo: "4E",
    gender: "male",
    hobby: "empty",
  },
  {
    name: "Magnaibayar",
    nickname: "Magnai",
    seedNo: "2F",
    gender: "male",
    hobby: ["Riding bicycle", "reading", "watching movie, anime", "sleeping"],
  },
  {
    name: "Chimeg-Erdene",
    seedNo: "3E",
    gender: "female",
    nickname: "Chimgee",
    hobby: ["playing puzzle games", "watching movie", "volleyball", "walking"],
  },
  {
    name: "Tumen-Ulzii",
    seedNo: "3F",
    nickname: "TK",
    gender: "male",
    hobby: "sagsan bumbug",
  },
  {
    name: "Ganzaya",
    nickname: "Zaya",
    seedNo: "2D",
    gender: "female",
    ig: "zaya_bdmr",
    hobby: ["movie", "paint", "badminton"],
  },
  {
    name: "Maral",
    seedNo: "3A",
    gender: "female",
    nickname: "Marla",
    hobby: ["watching movies", "baking"],
  },
  {
    name: "Chinggis",
    age: 19,
    seedNo: "3C",
    gender: "male",
    hobby: "yuch hamaaguu hiine",
  },
  {
    name: "Ochirdari",
    nickname: "Ochko",
    seedNo: "2E",
    gender: "male",
    hobby: ["reading", "Movie"],
  },
  {
    name: "Amartuvshin",
    nickname: "Amaraa",
    seedNo: "3B",
    gender: "male",
    hobby: ["curious about everything, but not an expert in anything"],
  },
  {
    name: "Bayarjavkhlan",
    seedNo: "5B",
    gender: "male",
    nickname: "vigilante",
    hobby: ["listen to music, driving, watching movie"],
  },
  {
    name: "Бат-Очир",
    seedNo: "2A",
    gender: "эрэгтэй хө",
    hobby: [
      "сагс хааяал",
      "гүйх",
      "зохион бүтээх",
      "засварлах",
      "шинэ зүйл сурах турших",
    ],
    nickname: "надад таалагдвал хүссэнээрээ дуудоо",
  },
  {
    name: "Gantumur",
    seedNo: "1B",
    gender: "male",
    nickname: "Ganaa",
    hobby: ["Movie", "reading"],
  },
  {
    name: "Oyunbayar",
    nickname: "Omoo",
    seedNo: "4F",
    gender: "female,",
    hobby: ["reading", "movie", "outdoor walking", "traveling"],
  },
  {
    name: "Bishrelt",
    nickname: "montoo",
    seedNo: "4C",
    gender: "male",
    hobby: "mongo oloh durtai",
  },
  {
    name: "Oyunbayar",
    nickname: "Omoo",
    seedNo: "4F",
    gender: "female",
    hobby: ["reading", "movie", "outdoor walking", "traveling"],
  },
  {
    name: "Tsog",
    seedNo: "5A",
    gender: "male",
    nickname: "Gots",
    hobby: ["Travel"],
  },
];

// console.log(students);

import fs from "fs";

for (let i = 0; i < students.length; i++) {
  fs.appendFileSync("students.text", `\n ${i + 1}.`, (err) => {
    console.log(err);
  });
  Object.keys(students[i]).forEach((key) => {
    fs.appendFileSync(
      "students.text",
      `   ${key}:${students[i][key]}`,
      (err) => {
        console.log(err);
      }
    );
  });
}

// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender == "male") {
//     huis.male.push(students[i]);
//   } else {
//     huis.female.push(students[i]);
//   }
// }
// console.log(huis);
// Object.keys(huis).forEach((key) => {
//   fs.appendFileSync("students.text", `\n ${key}:${male[i][key]} `, (err) => {
//     console.log(err);
//   });
// });

// fs.writeFile("students.text", "", (err) => {
//   console.log(err);
// });
let huis = {
  male: [],
  female: [],
};
let a = [];
fs.readFile("students.text", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found:", err.path);
    } else {
      console.error("Error reading file:", err);
    }
    return;
  }
  a = data.split(`\n`);
  for (let z = 0; z < a.length; z++) {
    if (a[z].includes("gender:female")) {
      console.log(a[z]);
      huis.female = [...a[z]];
      fs.appendFileSync("students.text", `Female :${a[z]}   `, (err) => {
        console.log(err);
      });
    } else if (a[z].includes("gender:male")) {
      huis.male.push(a[z]);
      fs.appendFileSync("students.text", `Male   ${a[z]}`, (err) => {
        console.log(err);
      });
    }
  }
});

console.log(huis);
