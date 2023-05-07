const counterValue = 0;
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue - 1;
});

incrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue + 1;
});
