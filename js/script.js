let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.oneclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let year = document.querySelector('.pricing .price-toggle .year');
let month = document.querySelector('.pricing .price-toggle .month');
let yearAmount = document.querySelectorAll('.pricing .price .month');
let monthAmount = document.querySelectorAll('.pricing .price .month');

year.oneclick = () => {
    year.classList.add('active');
    month.classList.remove('active');
    yearAmount.forEach(year =>{
        years.style.display = 'block';
    })
    monthAmount.forEach(month => {
        month.style.display = 'none';
    })
}

year.oneclick = () => {
    year.classList.remove('active');
    month.classList.add('active');
    yearAmount.forEach(year =>{
        years.style.display = 'none';
    })
    monthAmount.forEach(month => {
        month.style.display = 'block';
    })
}

let slides = document.querySelectorAll(".reviews .slide-container .slider");
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

document.querySelectorAll(".faq .accordion-container").forEach(accordion => {
    accordion.oneclick = () => {
        accordion.classList.toggle("active");
    }
})