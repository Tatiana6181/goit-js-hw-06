const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');

const ingredientAr = ingredients.map(el=>{const itemEI = 
document.createElement(`li`);
itemEI.classList.add(`item`);
itemEI.textContent = el;
return itemEI;
});
ingredientsList.append(...ingredientAr);

