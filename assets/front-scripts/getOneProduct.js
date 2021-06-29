const getProduct = () => {
    const post = document.getElementById('postId')
    const main = document.getElementsByClassName('main')
    let postId = post.name;

function getBreadcrumbs () {  //Т.к. для страниц постов/продуктов должны быть отдельные breadcrumbs - делаю скрипт, для управления ими
    let title = document.getElementById('big-news-title');
    let breadcrumbs = document.querySelector('.breadcrumbs');

    
    breadcrumbs.innerHTML = ` <a href="/">Главная</a> / <a href="/products"> Продукты </a> / <a class="active" href="#"> ${title.textContent} </a>`;
}

    fetch(`/api/products/${postId}`).then(function (response) {
        if (response.ok) {
            response.text().then(function (res) {
                let result = JSON.parse(res)
                let post = document.createElement('div')
                post.innerHTML = `<div class="post-wrapper">
                <img class="image" src="../${result.picture1}" alt="image">
                <div class="title" >${result.title}</div>
                <div class="title">${result.subtitle}</div>
                <div class="text">${result.paragraph1}</div>
                </div>`;
                main[0].append(post)
                getBreadcrumbs()
            })
        }
    })
}

document.addEventListener('DOMContentloaded', getProduct())