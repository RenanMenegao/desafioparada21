
const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
    answer: "Brasília"
  },
  {
    question: "Quantos estados existem no Brasil, sem contar o DF?",
    options: ["21", "23", "26", "28"],
    answer: "26"
  },
  {
    question: "Qual o menor estado do Brasil?",
    options: ["Tocantins", "São Paulo", "Acre", "Sergipe"],
    answer: "Sergipe"
  }
];

let score = 0;

function displayQuestion(index) {
  const currentQuestion = questions[index];
  let optionsString = '';
  currentQuestion.options.forEach((option, i) => {
    optionsString += `${i + 1}. ${option}\n`;
  });
  return `${currentQuestion.question}\n\n${optionsString}`;
}

function startQuiz() {
  score = 0;
  for (let i = 0; i < questions.length; i++) {
    let userAnswer;
    switch(i) {
      case 0:
        userAnswer = parseInt(prompt(displayQuestion(0) + "\n\nEscolha uma opção (Digite o número correspondente):"));
        break;
      case 1:
        userAnswer = parseInt(prompt(displayQuestion(1) + "\n\nEscolha uma opção (Digite o número correspondente):"));
        break;
      case 2:
        userAnswer = parseInt(prompt(displayQuestion(2) + "\n\nEscolha uma opção (Digite o número correspondente):"));
        break;
      default:
        break;
    }
    if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= questions[i].options.length) {
      const selectedOption = questions[i].options[userAnswer - 1];
      if (selectedOption === questions[i].answer) {
        score++;
        alert("Resposta correta!");
      } else {
        alert("Resposta incorreta!");
      }
    } else {
      alert("Opção inválida! Por favor, escolha um número correspondente à opção.");
    }
  }
  alert(`Você acertou ${score} de ${questions.length} questões.`);
}

startQuiz();