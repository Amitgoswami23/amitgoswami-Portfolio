let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let themeBtn = document.querySelector('#theme-btn');


let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

searchBtn.onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}