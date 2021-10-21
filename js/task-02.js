const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientList = document.querySelector('#ingredients');

const createIngredients = array => array.reduce((accum, el) => {

    const ingredientItem = document.createElement("li");
   
    ingredientItem.textContent = el;
    ingredientItem.classList.add('item');
    accum.push(ingredientItem);

    return accum;
    
  }, [])




ingredientList.append(...createIngredients(ingredients))

