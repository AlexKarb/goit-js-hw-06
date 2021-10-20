const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientList = document.querySelector('#ingredients');

const createIngredients = array => array.reduce((ary, el) => {

    const ingredientItem = document.createElement("li");
   
    ingredientItem.textContent = el;
    ingredientItem.classList.add('item');
    ary.push(ingredientItem);

    return ary;
    
  }, [])




ingredientList.append(...createIngredients(ingredients))

