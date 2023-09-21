let quizApp = [
  {
    quest: "how long does it take to learn javascript ?",
    a: "1 year",
    b: "2 year",
    c: "3 year",
    correct: "b",
  },
  {
    quest: "who is the founder of js ?",
    a: "brandan eich",
    b: "jordan",
    c: "jonathan",
    correct: "a",
  },
  {
    quest: "best programming language ?",
    a: "java",
    b: "javascript",
    c: "python",
    correct: "b",
  },
  {
    quest: "founder of apple ?",
    a: "steve jobs",
    b: "mark zuck",
    c: "bill gates",
    correct: "a",
  },
];
let question = document.getElementById("question");
let a_option = document.getElementById("a_quest");
let b_option = document.getElementById("b_quest");
let c_option = document.getElementById("c_quest");
let submit = document.getElementById("submitBtn");
let answers = document.querySelectorAll("input");
let result = document.querySelector("#quiz_res");

let curQuest = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deSelect();
  let currentQuiz = quizApp[curQuest];
  question.innerText = currentQuiz.quest;
  a_option.innerText = currentQuiz.a;
  b_option.innerText = currentQuiz.b;
  c_option.innerText = currentQuiz.c;
}

let resp = null;

function getSelected() {
  answers.forEach((answer) => {
    if (answer.checked) {
      resp = answer.id;
    }
  });
  return undefined;
}

function deSelect() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

submit.addEventListener("click", () => {
  getSelected();

  if (resp) {
    if (resp === quizApp[curQuest].correct) {
      score++;
    }
    curQuest++;
    if (curQuest < quizApp.length) {
      loadQuiz();
    } else {
      result.innerHTML = `
      <h1 class="result"> you answered ${score}/${
        quizApp.length
      } questions <br/> ${score * 5} ball ${
        score > 3 ? `🥳` : score <= 3 && score >= 2 ? `🙂` : `😐`
      }</h1>`;
    }
  } else {
  }
});

