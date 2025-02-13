const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2');
    const elementsQuantity = category.querySelectorAll('ul>li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elementsQuantity.length}`);
})