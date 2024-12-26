const questions = [
  { 
    "question": "Dans quel jeu vidéo trouve-t-on le personnage de Master Chief ?", 
    "answers": ["Halo", "Call of Duty", "Destiny", "Gears of War"], 
    "correct": 0 
  },
  { 
    "question": "Quel est le nom du méchant principal dans la saga *Harry Potter* ?", 
    "answers": ["Sirius Black", "Draco Malfoy", "Voldemort", "Dumbledore"], 
    "correct": 2 
  },
  { 
    "question": "Dans quel film voit-on un vaisseau appelé le *Millennium Falcon* ?", 
    "answers": ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"], 
    "correct": 1 
  },
  { 
    "question": "Dans quel jeu vidéo doit-on survivre face à des zombies tout en récoltant des ressources ?", 
    "answers": ["Minecraft", "Resident Evil", "The Last of Us", "DayZ"], 
    "correct": 3 
  },
  { 
    "question": "Quel personnage de jeu vidéo est une archéologue célèbre ?", 
    "answers": ["Nathan Drake", "Lara Croft", "Ellie", "Aloy"], 
    "correct": 1 
  },
  { 
    "question": "Quel est le nom du sorceleur dans la série et le jeu *The Witcher* ?", 
    "answers": ["Geralt de Rivia", "Ragnar Lothbrok", "Jaskier", "Eredin"], 
    "correct": 0 
  },
  { 
    "question": "Quel film de super-héros a rapporté plus de 2 milliards de dollars au box-office ?", 
    "answers": ["The Dark Knight", "Avengers: Endgame", "Spider-Man: No Way Home", "Black Panther"], 
    "correct": 1 
  },
  { 
    "question": "Dans quel univers trouve-t-on des anneaux qui contrôlent les autres races ?", 
    "answers": ["Game of Thrones", "The Lord of the Rings", "Dune", "The Wheel of Time"], 
    "correct": 1 
  },
  { 
    "question": "Quel jeu en monde ouvert se déroule dans un univers médiéval fantastique avec des dragons ?", 
    "answers": ["The Elder Scrolls V: Skyrim", "The Legend of Zelda", "Dark Souls", "World of Warcraft"], 
    "correct": 0 
  },
  { 
    "question": "Dans *Breaking Bad*, quel est le pseudonyme de Walter White ?", 
    "answers": ["Heisenberg", "Gus Fring", "Saul Goodman", "Mike Ehrmantraut"], 
    "correct": 0 
  }
];
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score").innerText = score;
  //document.getElementById("restart-button").style.display = "none";
  document.getElementById("next-button").style.display = "none";
  // Mélange et sélectionne 10 questions aléatoires
  selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  
  showQuestion();
  updateProgressBar();
}

function showQuestion() {
  const question = selectedQuestions[currentQuestionIndex];
  document.getElementById("question-text").innerText = question.question;
  
  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = ''; // Réinitialise les boutons de réponse
  
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add('answer-button');
    button.onclick = () => selectAnswer(index, button);
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedIndex, button) {
  const question = selectedQuestions[currentQuestionIndex];
  
  if (selectedIndex === question.correct) {
    score++;
    document.getElementById("score").innerText = score;
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
    const correctButton = document.querySelectorAll('#answer-buttons button')[question.correct];
    correctButton.classList.add('correct');
  }
  
  document.querySelectorAll('#answer-buttons button').forEach(btn => btn.disabled = true);
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
    updateProgressBar();
    document.getElementById("next-button").style.display = "none";
  } else {
    showFinalScore();
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
  progressBar.style.width = progressPercentage + '%';
}

function showFinalScore() {
  document.getElementById("question-container").innerHTML = `<h2>Quiz terminé !</h2><p>Score final : ${score} / ${selectedQuestions.length}</p>`;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("restart-button").style.display = "block";
}

// Lance le quiz dès le chargement de la page
startQuiz();
