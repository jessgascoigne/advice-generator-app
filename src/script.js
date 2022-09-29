function displayAdvice(response) {
  adviceId.innerHTML = `Advice #${response.data.slip.id}`;
  advice.innerHTML = `"${response.data.slip.advice}"`;
}

function pullAdvice() {
  const apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(displayAdvice);
}

const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");
const dice = document.querySelector("#dice-btn");

dice.addEventListener("click", pullAdvice);

pullAdvice();
