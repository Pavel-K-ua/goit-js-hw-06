


const categoriesArr = [...document.querySelector('#categories').children]
console.log(`Number of categories: ${categoriesArr.length}`); 


categoriesArr.forEach((category) => {
    console.log(`
Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}
`);
})



