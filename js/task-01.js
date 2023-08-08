// Завдання 1
// HTML містить список категорій ul#categories.

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.


// ==1==
console.log(`Number of categories: ${categoriesArr.length}`); 

// ==2==
const categoriesArr = [...document.querySelector('#categories').children]
categoriesArr.forEach((category) => {
    console.log(`
Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}
`);
})




// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5