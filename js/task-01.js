const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.children;
const categoriesItemArray = [...categoriesItem]


console.log("Number of categories:", categoriesItem.length)



categoriesItemArray.forEach(category => {

    const titleOfCategory = category.querySelector('h2')
    const listOfCategories = category.querySelector('ul')



console.log("Category:", titleOfCategory.textContent)
console.log("Elements:", listOfCategories.children.length)
})

