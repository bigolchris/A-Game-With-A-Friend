import "./startup/startpop.js";
import "./startup/gamescreen.js";

// Player Stats variables
let players = [];

let playerStats = {
  name: "",
  health: 100,
  intelligence: 7,
  strength: 5,
  insight: 6,
  engineering: 4,
  stealth: 9,
};

let points = 10;

let playerName = document.querySelector(".char-input").value;

let newPlayer = document.querySelector(".create-character");

let intelStat = document.querySelector(".intelligence-stat");
let strengthStat = document.querySelector(".strength-stat");
let insightStat = document.querySelector(".insight-stat");
let engStat = document.querySelector(".engineering-stat");
let stealthStat = document.querySelector(".stealth-stat");

intelStat.innerHTML = playerStats.intelligence;
strengthStat.innerHTML = playerStats.strength;
insightStat.innerHTML = playerStats.insight;
engStat.innerHTML = playerStats.engineering;
stealthStat.innerHTML = playerStats.stealth;

let pointDisplay = document.querySelector(".points");

pointDisplay.innerHTML = points;

let subGroup = document.querySelector(".btn-group");

subGroup.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("str-sub"));

  let statChange = 0;
  const el = e.target;
  let stat = el.getAttribute("data-stat");
  console.log(stat);

  if (el.classList.contains("sub-btn")) {
    if (points >= 15) {
      return;
    }
    statChange = -1;
  } else if (el.classList.contains("add-btn")) {
    if (points <= 0) {
      return;
    }

    // points -= statChange;
    statChange = 1;
  }

  const statEl = document.querySelector(`.${stat}-stat`);
  playerStats[stat] += statChange;
  statEl.innerText = playerStats[stat];

  points -= statChange;
  pointDisplay.innerHTML = points;
  console.log(points);
});

newPlayer.addEventListener("click", () => {
  playerStats.name += document.querySelector(".char-input").value;
  console.log(playerName);
  players.push(playerStats);
  console.log(players);
});
