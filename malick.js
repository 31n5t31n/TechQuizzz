// script.js

const questions = [
    { question: "Quelle est la première étape dans la préparation d'un tournage ?", answers: ["Trouver des acteurs", "Rédiger le script", "Choisir un lieu", "Rassembler le matériel"], correct: 1 },
    { question: "Quel est le rôle principal du réalisateur ?", answers: ["Filmer les scènes", "Superviser et diriger l'ensemble du tournage", "Monter les séquences", "Créer les effets spéciaux"], correct: 1 },
    { question: "Quelle est la fonction d'un storyboard ?", answers: ["Créer le scénario", "Planifier les prises de vue", "Éditer les scènes", "Trouver les acteurs"], correct: 1 },
    { question: "Quel est l'objectif d'un plan séquence ?", answers: ["Réduire le nombre de prises", "Capturer toute une scène sans coupure", "Changer rapidement de décor", "Ajouter des effets visuels"], correct: 1 },
    { question: "Quel est l'équipement de base pour un tournage ?", answers: ["Caméra, trépied, micro", "Drone, projecteur, dolly", "Monture, casque, filtre ND", "Clap, fond vert, maquillage"], correct: 0 },
    { question: "À quoi sert un clap dans un tournage ?", answers: ["Synchroniser l'image et le son", "Marquer le début et la fin du tournage", "Indiquer le numéro de scène", "Créer une transition"], correct: 0 },
    { question: "Quel est le rôle d'un directeur de la photographie ?", answers: ["Monter les séquences", "Gérer les effets spéciaux", "Superviser l'éclairage et le cadre", "Trouver des lieux de tournage"], correct: 2 },
    { question: "Pourquoi utilise-t-on un fond vert ?", answers: ["Ajouter des effets spéciaux", "Filtrer la lumière", "Créer une ambiance", "Supprimer les ombres"], correct: 0 },
    { question: "Qu'est-ce qu'un scénario ?", answers: ["Une liste des dialogues", "Un guide des scènes et dialogues du film", "Un plan de tournage", "Un résumé du film"], correct: 1 },
    { question: "Quelle est l'importance du son dans un film ?", answers: ["Créer une ambiance immersive", "Rendre le film plus rapide", "Atténuer les erreurs d'image", "Augmenter le budget"], correct: 0 },
    { question: "Quelle est la différence entre une lumière diffuse et une lumière dure ?", answers: ["La lumière diffuse adoucit les ombres", "La lumière dure ne crée pas d'ombres", "La lumière diffuse est plus lumineuse", "La lumière dure est plus naturelle"], correct: 0 },
    { question: "Quel logiciel est souvent utilisé pour le montage vidéo ?", answers: ["Adobe Premiere Pro", "Photoshop", "After Effects", "Audacity"], correct: 0 },
    { question: "Qu'est-ce qu'une caméra stabilisée ?", answers: ["Une caméra avec un trépied", "Une caméra équipée d'un système anti-vibrations", "Une caméra utilisée pour les plans fixes", "Une caméra utilisée pour les plans larges"], correct: 1 },
    { question: "Que signifie 'format RAW' pour une caméra ?", answers: ["Un format compressé", "Un format brut sans traitement", "Un format vidéo haute résolution", "Un format pour les effets spéciaux"], correct: 1 },
    { question: "Quel type de micro est idéal pour enregistrer des dialogues ?", answers: ["Micro canon", "Micro cravate", "Micro omnidirectionnel", "Micro dynamique"], correct: 1 },
    { question: "Comment s'appelle la technique qui consiste à filmer au ralenti ?", answers: ["Time-lapse", "Slow motion", "Hyperlapse", "Stop motion"], correct: 1 },
    { question: "Quel est le rôle du monteur ?", answers: ["Filmer les scènes", "Assembler les séquences vidéo", "Superviser les acteurs", "Créer le storyboard"], correct: 1 },
    { question: "Qu'est-ce que l'étalonnage en postproduction ?", answers: ["Ajouter des effets visuels", "Corriger et ajuster les couleurs", "Synchroniser le son et l'image", "Modifier les dialogues"], correct: 1 },
    { question: "Quelle est la résolution d'une vidéo 4K ?", answers: ["1920x1080", "3840x2160", "2560x1440", "7680x4320"], correct: 1 },
    { question: "Qu'est-ce qu'un traveling dans un tournage ?", answers: ["Un mouvement de caméra latéral", "Un zoom avant", "Un panoramique", "Une prise de vue aérienne"], correct: 0 },
    { question: "Quel est l'objectif d'un générique de début ?", answers: ["Présenter les personnages", "Capter l'attention et introduire l'équipe du film", "Résumé de l'histoire", "Augmenter la durée du film"], correct: 1 },
    // Continuez jusqu'à atteindre 100 questions
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