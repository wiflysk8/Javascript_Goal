/* En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'.
 Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 
La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api 
para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.
Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso. */

const url = "https://opentdb.com/api.php?amount=2&type=multiple";
const gameBoard$$ = document.querySelector('[data-function="gameboard"]');
totalReslut = [];

const printTable = () => {
  fetch(url)
    .then((res) => res.json())
    .then((questions) => {
      let questionNumber = 1;

      for (let i = 0; i < questions.results.length; i++) {
        let question = questions.results[i];
        const questionDiv$$ = document.createElement("div");
        const questionH3$$ = document.createElement("h3");
        questionH3$$.innerHTML = `${questionNumber} - ${question.question}`;
        questionDiv$$.appendChild(questionH3$$);
        gameBoard$$.appendChild(questionDiv$$);
        questionNumber++;

        const allAnswers = [...question.incorrect_answers,question.correct_answer,];
        console.log(allAnswers);

        for (let answer of allAnswers) {
          answerP$$ = document.createElement("p");
          answerP$$.innerHTML = answer;
          gameBoard$$.appendChild(answerP$$);
          answerP$$.addEventListener("click", () => {
            totalReslut[i] = answer === question.correct_answer;
          });
        }
      } console.log(totalReslut);
    });
};


printTable();
