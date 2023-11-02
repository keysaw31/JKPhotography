const categories = ['events', 'products', 'landscape'];

let currentCategoryIndex = 0;

function changeCategory(indexChange) {
    currentCategoryIndex += indexChange;

    if (currentCategoryIndex < 0) {
        currentCategoryIndex = categories.length - 1;
    }

    if (currentCategoryIndex >= categories.length) {
        currentCategoryIndex = 0;
    }

    const currentCategory = categories[currentCategoryIndex];
    const currentCategoryTitle = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

    document.getElementById('album-title').textContent = currentCategoryTitle;
    document.getElementById('album-image').src = `images/${currentCategory}1.jpg`;

    
    const viewAllLink = document.querySelector('.view-all');
    viewAllLink.href = `view_all_${currentCategory}.html`;
    localStorage.setItem('currentCategoryIndex', currentCategoryIndex);

}
