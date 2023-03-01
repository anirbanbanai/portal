const fetchCategories = ()=>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => showCategories(data.data))
}

const showCategories = data =>{
console.log(data);

const categoriesContainer = document.getElementById('catagopris-container');
data.news_category.forEach(singlecategori =>{
    // console.log(singlecategori)
    let linkContainer = document.createElement('p');
    linkContainer.innerHTML = `
      <a class="nav-link" href="#" onclick="fetchCategoriNews('${singlecategori.category_id}' ,'${singlecategori.category_name}')">${singlecategori.category_name} </a>
    `
    categoriesContainer.appendChild(linkContainer);
})
};

const fetchCategoriNews = (categori_id, category_name) =>{
    // console.log(categori_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${categori_id }`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>showAllNews(data.data,category_name))
};

const showAllNews = (data, category_name)=>{
   console.log(data, category_name)
document.getElementById('news-count').innerText = data.length;
document.getElementById('categori-name').innerText = category_name;
}