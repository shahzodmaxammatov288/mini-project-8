

//! Selectors 

const btn = document.querySelector('.btn');
const motivText = document.querySelector('.motiv-text');

//! Event Listeners && Functions

btn.addEventListener('click', () => {
  fetch("https://api.adviceslip.com/advice")
  .then((result) => result.json())
  .then((data) => motivText.textContent = data.slip.advice)
  motivText.classList.toggle('active');
})
