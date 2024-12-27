// script.js

// Liste de 100 questions
const questions = [
  { "question": "Quel langage est considéré comme le premier langage de programmation ?", answers: ["Fortran", "Cobol", "Ada", "C"], correct: 0 },
  { "question": "Quel était le premier ordinateur programmable ?", answers: ["ENIAC", "Z1", "UNIVAC", "IBM 701"], correct: 1 },
  { "question": "Quel langage est considéré comme le premier langage de programmation ?", "answers": ["Fortran", "Cobol", "Ada", "C"], "correct": 0 },
  { "question": "Quel est le créateur du langage de programmation C ?", "answers": ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "James Gosling"], "correct": 0 },
  { "question": "Quel langage de programmation est utilisé principalement pour le développement d'applications web côté serveur ?", "answers": ["Python", "Ruby", "PHP", "JavaScript"], "correct": 2 },
  { "question": "Quelle année a vu la création du langage de programmation Python ?", "answers": ["1989", "1991", "1995", "2000"], "correct": 1 },
  { "question": "Quel est le rôle principal d'un compilateur ?", "answers": ["Exécuter le programme", "Traduire le code source en code machine", "Optimiser le code source", "Vérifier les erreurs de syntaxe"], "correct": 1 },
  { "question": "Le langage Java est un exemple de langage...", "answers": ["Interprété", "Compilé", "Hybride", "Bas niveau"], "correct": 2 },
  { "question": "Quel langage est souvent utilisé pour le développement d'applications Android ?", "answers": ["Swift", "Java", "Python", "C#"], "correct": 1 },
  { "question": "Quelle est la fonction principale du HTML ?", "answers": ["Mettre en forme le texte", "Structurer le contenu des pages web", "Gérer la base de données", "Exécuter du code côté serveur"], "correct": 1 },
  { "question": "Quel est l'objectif principal du CSS ?", "answers": ["Créer des bases de données", "Mettre en forme les pages web", "Écrire des scripts côté serveur", "Construire des applications mobiles"], "correct": 1 },
  { "question": "Lequel des éléments suivants est un langage de script ?", "answers": ["HTML", "JavaScript", "CSS", "SQL"], "correct": 1 },
  { "question": "Quelle année a vu la création du langage de programmation JavaScript ?", "answers": ["1993", "1995", "1997", "2000"], "correct": 1 },
  { "question": "Quel est le rôle principal d'un système d'exploitation ?", "answers": ["Fournir des applications pour l'utilisateur", "Gérer les ressources matérielles et logicielles", "Compiler le code source", "Créer des bases de données"], "correct": 1 },
  { "question": "Dans quel langage est écrit le système d'exploitation Linux ?", "answers": ["C", "C++", "Python", "Java"], "correct": 0 },
  { "question": "Qui est le créateur du système d'exploitation Linux ?", "answers": ["Steve Jobs", "Bill Gates", "Linus Torvalds", "Ken Thompson"], "correct": 2 },
  { "question": "Quel est le langage de programmation utilisé pour le développement d'applications iOS ?", "answers": ["Swift", "C#", "Java", "Ruby"], "correct": 0 },
  { "question": "Lequel des éléments suivants n'est pas un langage de programmation ?", "answers": ["HTML", "Python", "Java", "C++"], "correct": 0 },
  { "question": "Quel langage est utilisé principalement pour la gestion des bases de données ?", "answers": ["SQL", "Python", "Java", "HTML"], "correct": 0 },
  { "question": "Lequel de ces langages est considéré comme un langage de programmation de bas niveau ?", "answers": ["Java", "C", "Python", "Ruby"], "correct": 1 },
  { "question": "Quel outil permet de transformer un programme écrit en langage source en langage machine ?", "answers": ["Compilateur", "Éditeur de texte", "Interpréteur", "Débogueur"], "correct": 0 },
  { "question": "Que signifie l'acronyme HTML ?", "answers": ["HyperText Markup Language", "HighText Markup Language", "HyperTool Markup Language", "HighTool Markup Language"], "correct": 0 },
  { "question": "Quel est le rôle de l'interpréteur ?", "answers": ["Exécuter directement le code source ligne par ligne", "Traduire le code source en code machine", "Compiler le code source", "Gérer la mémoire de l'ordinateur"], "correct": 0 },
  { "question": "Quel est le langage de programmation principal utilisé pour le développement web côté client ?", "answers": ["C#", "Java", "Python", "JavaScript"], "correct": 3 },
  { "question": "Quel est le nom du principal framework JavaScript pour le développement d'applications web modernes ?", "answers": ["Vue.js", "React", "Angular", "Node.js"], "correct": 2 },
  { "question": "Quel est le nom de l'outil permettant de gérer les versions de code source ?", "answers": ["Git", "SVN", "Mercurial", "Docker"], "correct": 0 },
  { "question": "Dans quel langage est principalement écrit le navigateur web Chrome ?", "answers": ["C++", "JavaScript", "Java", "Python"], "correct": 0 },
  { "question": "Quel est l'objectif de l'algorithmique ?", "answers": ["Créer des applications web", "Résoudre des problèmes à l'aide d'algorithmes", "Écrire du code source", "Gérer des bases de données"], "correct": 1 },
  { "question": "Quel est le nom de la première version du langage de programmation C ?", "answers": ["C1", "K&R C", "C99", "C++"], "correct": 1 },
  { "question": "Quel est l'acronyme de l'API pour les interfaces graphiques en Java ?", "answers": ["JDK", "JRE", "AWT", "JVM"], "correct": 2 },
  { "question": "Quel est le but principal du langage de programmation Ruby ?", "answers": ["Faciliter le développement web", "Gérer des bases de données", "Créer des jeux vidéo", "Créer des applications mobiles"], "correct": 0 },
  { "question": "Quel langage est principalement utilisé pour les scripts d'automatisation et l'analyse de données ?", "answers": ["C", "Java", "Python", "PHP"], "correct": 2 },
  { "question": "Quel langage est utilisé pour le développement d'applications Windows ?", "answers": ["Java", "C#", "Ruby", "PHP"], "correct": 1 },
  { "question": "Quel est l'acronyme de SQL ?", "answers": ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Question Language"], "correct": 0 },
  { "question": "Quelle commande Unix permet de voir la liste des fichiers dans un répertoire ?", "answers": ["ls", "cd", "pwd", "mkdir"], "correct": 0 },
  { "question": "Quel est l'acronyme de GUI ?", "answers": ["Graphical User Interface", "General User Interface", "Global User Interface", "Graphical Unified Interface"], "correct": 0 },
  { "question": "Quel est le but principal du langage de programmation Swift ?", "answers": ["Créer des applications iOS", "Développer des sites web", "Gérer des bases de données", "Programmer des jeux vidéo"], "correct": 0 },
  { "question": "Qu'est-ce qu'un 'framework' en programmation ?", "answers": ["Un environnement de développement intégré", "Un outil de gestion de versions", "Un ensemble de bibliothèques et d'outils pour développer des applications", "Un langage de programmation"], "correct": 2 },
  { "question": "Quelle est la principale fonction du langage de programmation SQL ?", "answers": ["Gestion de la mémoire", "Gestion des bases de données", "Création d'interfaces graphiques", "Programmation d'applications mobiles"], "correct": 1 },
  { "question": "Qu'est-ce qu'un langage de programmation compilé ?", "answers": ["Un langage dont le code est exécuté directement sans transformation", "Un langage transformé en code machine avant exécution", "Un langage qui nécessite un interpréteur", "Un langage utilisé pour la programmation de sites web"], "correct": 1 },
  { "question": "Dans quel domaine est principalement utilisé le langage R ?", "answers": ["Statistiques et analyse de données", "Développement web", "Programmation mobile", "Intelligence artificielle"], "correct": 0 },
  { "question": "Quel est l'objectif principal du langage de programmation PHP ?", "answers": ["Développement web côté serveur", "Développement de jeux vidéo", "Création d'applications desktop", "Programmation de systèmes d'exploitation"], "correct": 0 },
  { "question": "Que signifie l'acronyme CSS ?", "answers": ["Cascading Style Sheets", "Creative Style Sheets", "Cascading Simple Sheets", "Creative Simple Sheets"], "correct": 0 },
  { "question": "Quel est l'objectif principal du langage de programmation Objective-C ?", "answers": ["Développement d'applications iOS et macOS", "Développement web", "Création de jeux vidéo", "Création de systèmes d'exploitation"], "correct": 0 },
  { "question": "Quel est le nom du langage créé par Google pour le développement d'applications mobiles ?", "answers": ["Go", "Dart", "Swift", "Kotlin"], "correct": 1 },
  { "question": "Quel est le langage de programmation principalement utilisé pour les applications de machine learning ?", "answers": ["C", "Java", "Python", "Ruby"], "correct": 2 },
  { "question": "Dans le contexte de la programmation orientée objet, que signifie 'encapsulation' ?", "answers": ["Cacher les détails de l'implémentation d'une classe", "Permettre l'héritage entre classes", "Créer des objets immutables", "Gérer les erreurs dans le code"], "correct": 0 },
  { "question": "Quelle est la principale fonction du langage Bash ?", "answers": ["Développement web", "Gestion de systèmes Unix", "Création de jeux vidéo", "Développement d'applications mobiles"], "correct": 1 },
  { "question": "Quel est l'objectif principal du langage de programmation Kotlin ?", "answers": ["Développement Android", "Développement web", "Gestion de bases de données", "Création d'applications Windows"], "correct": 0 },
  { "question": "Quel est l'acronyme de IDE ?", "answers": ["Integrated Development Environment", "International Development Environment", "Internal Development Environment", "Interactive Development Environment"], "correct": 0 },
  { "question": "Quel est le rôle de la mémoire vive (RAM) dans un ordinateur ?", "answers": ["Stocker les programmes et données temporaires pendant l'exécution", "Stocker le système d'exploitation", "Exécuter les programmes", "Stocker les fichiers à long terme"], "correct": 0 },
  { "question": "Quel est le langage de programmation de base utilisé dans les systèmes embarqués ?", "answers": ["C", "Python", "Java", "Swift"], "correct": 0 },
  { "question": "Quel est le rôle du langage de programmation JavaScript dans un site web ?", "answers": ["Mettre en forme le contenu", "Ajouter des comportements dynamiques et interactifs", "Structurer le contenu", "Gérer les bases de données"], "correct": 1 },
  { "question": "Quel est le but principal du langage de programmation Lua ?", "answers": ["Création de scripts pour des jeux vidéo", "Développement de sites web", "Création d'applications mobiles", "Développement d'applications serveur"], "correct": 0 },
  { "question": "Quel est le nom de l'algorithme de tri le plus rapide dans les cas moyens ?", "answers": ["Tri à bulles", "Tri rapide", "Tri par insertion", "Tri par sélection"], "correct": 1 },
  { "question": "Quel est le rôle d'un pointeur en langage C ?", "answers": ["Indiquer l'adresse mémoire d'une variable", "Assigner une valeur à une variable", "Définir la taille d'un tableau", "Créer une fonction"], "correct": 0 },
  { "question": "Quelle est la différence entre un langage de programmation interprété et compilé ?", "answers": ["Un langage interprété est exécuté ligne par ligne, un langage compilé est converti en code machine", "Un langage interprété est plus rapide", "Un langage compilé est plus facile à utiliser", "Il n'y a pas de différence"], "correct": 0 },
  { "question": "Quelle est la fonction d'un algorithme de recherche binaire ?", "answers": ["Trouver un élément dans une liste triée", "Trier une liste", "Compter les éléments d'une liste", "Créer une nouvelle liste"], "correct": 0 },
  { "question": "Dans quel but les langages fonctionnels comme Haskell sont-ils utilisés ?", "answers": ["Gérer des systèmes d'exploitation", "Créer des applications mobiles", "Effectuer des calculs complexes de manière déclarative", "Développer des applications web"], "correct": 2 },
  { "question": "Lequel de ces langages est un langage de programmation impératif ?", "answers": ["C", "SQL", "HTML", "JavaScript"], "correct": 0 }
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