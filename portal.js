let fetchData = [];

const fetchCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => showCategories(data.data))
}

const showCategories = data => {
    // console.log(data);

    const categoriesContainer = document.getElementById('catagopris-container');
    data.news_category.forEach(singlecategori => {
        // console.log(singlecategori)
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `
      <a class="nav-link" href="#" onclick="fetchCategoriNews('${singlecategori.category_id}' ,'${singlecategori.category_name}')">${singlecategori.category_name} </a>
    `
        categoriesContainer.appendChild(linkContainer);
    })
};

const fetchCategoriNews = (categori_id, category_name) => {
    // console.log(categori_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${categori_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            fetchData = data.data;
            showAllNews(data.data, category_name)
            // console.log(data.data)
        })

};

const showAllNews = (data, category_name) => {
    console.log(data, category_name)
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('categori-name').innerText = category_name;

    const newsContainer = document.getElementById('all-news');
    newsContainer.innerHTML = "";

    data.forEach(oneNews => {
        // console.log(oneNews);
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
        <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${oneNews.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 col-lg-4">
                        <div class="card-body">
                            <h5 class="card-title">${oneNews.title} <span class="badge text-bg-warning">${oneNews.others_info.is_trending ? 'Trending' : ''}</span> </h5>


                           <p class="card-text"> ${oneNews.details.slice(0, 150)}....</p>
                        </div>
                       
                       <div class="card-footer border-0 bg-body d-flex justify-content-between">
                         <div class="d-flex gap-2">   
                         <img src="${oneNews.author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40">
                        <div>
                        <p class="m-0 p-0">${oneNews.author.name ? oneNews.author.name : "not Avilable"} </p>
                        <p class="m-0 p-0">${oneNews.author.published_date} </p>
                        </div>
                         </div>
                         <div class="d-flex align-items-center">
                         
                           <p><i class="fas fa-eye"></i>  ${oneNews.total_view ? oneNews.total_view : "not avilable"} </p>
                         </div>
                         <div>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star-half"></i>
                         <p> </p>
                         </div>
                         <div>
                         
                         <i class="fas fa-arrow-right" onclick="fetchnewsDetails('${oneNews._id}')"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        `;
        newsContainer.appendChild(card)
    })
}

const fetchnewsDetails = news_id => {
    let url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url).then(res => res.json())
        .then(data => showNewsDetails(data.data[0]))
}

const showNewsDetails = newsDetails => {


    const { _id, image_url, title, details, author, total_view, others_info } = newsDetails;

    document.getElementById('modal-body').innerHTML = ` 
    <div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-12">
            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-12 col-lg-4">
            <div class="card-body">
                <h5 class="card-title">${title} <span class="badge text-bg-warning">${others_info.is_trending ? 'Trending' : ''}</span>
                </h5>
               <p class="card-text"> ${details}</p>
            </div>
           
           <div class="card-footer border-0 bg-body d-flex justify-content-between">
             <div class="d-flex gap-2">   
             <img src="${author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40">
            <div>
            <p class="m-0 p-0">${author.name} </p>
            <p class="m-0 p-0">${author.published_date} </p>
            </div>
             </div>
             <div class="d-flex align-items-center">
             
               <p><i class="fas fa-eye"></i>  ${total_view ? total_view : "not avilablke"} </p>
             </div>
             <div>
             <i class="fas fa-star"></i>
             </div>
            
           </div>
        </div>
    </div>
</div>`

};

const showTrendings = () => {
    let trendNews = fetchData.filter(singleData =>singleData.others_info.is_trending === true);
    const categori_name = document.getElementById("categori-name").innerText;
    // console.log(trendNews);
    showAllNews(trendNews, categori_name)
}

const showTodayspicks = () =>{
    let todayPics =  fetchData.filter(todayData =>todayData.others_info.is_todays_pick === true);
}