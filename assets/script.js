document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const topnav = document.getElementById('myTopnav');
    const navbar = document.querySelector('.navbar');
    const closeIcon = document.querySelector('.close-icon')
    const navLinks = document.querySelectorAll('.topnav .nav-item a');
    const logo = document.querySelector(".nav-logo")


    hamburger.addEventListener('click', () => {
        topnav.classList.toggle('active');
        navbar.classList.toggle('active');
        hamburger.classList.toggle("active")
        logo.classList.remove("active")
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            topnav.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('active');

        });
    });

    closeIcon.addEventListener('click', () => {
        topnav.classList.remove('active');
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});

let persons = [{
    firstName : "Franta ",
    lastName : "Kryptobaron" ,
    stars: "img/stars4.png",
    image: "img/rev2.jpg",
    desc: '"Svob Technologies exceeded my expectations. "' +
        '"The security system makes me feel so much safer, and the customer support was fantastic throughout the entire process. Five stars!"',

},
    {
        firstName : "Tom ",
        lastName : "Holland" ,
        stars: "img/stars3.png",
        image: "img/rev1.jpg",
        desc: '"Almost perfect! The All-in-One Smart Home package is incredible and has made my life much easier. The only minor issue was a slight delay in delivery, but everything else was top-notch."',


    },
    {
        firstName : "Dwayne ",
        lastName : "Johnson" ,
        stars: "img/stars2.png",
        image: "img/rev5.jpg",
        desc: '"Great products and excellent customer service. The Basic Smart Home Kit is a fantastic introduction to home automation, though I wish there were more customization options."',


    },
    {
        firstName : "Bedřich ",
        lastName : "Klima" ,
        stars: "img/stars.png",
        image: "img/rev3.jpg",
        desc: '"The smart home features are convenient, but I encountered some issues with the initial setup. Customer support was helpful, but the process took longer than expected. Overall, a decent experience."',


    },
    {
        firstName : "Tomáš ",
        lastName : "Vykopal" ,
        stars: "img/stars4.png",
        image: "img/rev4.jpg",
        desc: '"This smart home kit has transformed my daily routine. The installation was seamless, "' +
            '"and the convenience of controlling everything from my phone is unbeatable. Highly recommend!"',
    }];


let positionCarousel = -1;

document.addEventListener("DOMContentLoaded", function() {
    const buttonNext = document.getElementById("button-next");
    const buttonPrevious = document.getElementById("button-previous");
    const prsnname = document.getElementById("person-name");
    const prsnlastname = document.getElementById("person-lastname");
    const prsndesc = document.getElementById("person-desc");
    const prsnstars = document.getElementById("person-stars");
    const prsnimg = document.getElementById("person-image");

    function buttonClick(){
        prsnname.textContent = persons[positionCarousel].firstName;
        prsnlastname.textContent = persons[positionCarousel].lastName;
        prsndesc.textContent = persons[positionCarousel].desc;
        prsnstars.src = persons[positionCarousel].stars;
        prsnimg.src = persons[positionCarousel].image;
    }

    buttonNext.addEventListener("click", function() {
        positionCarousel = (positionCarousel + 1) % persons.length;
        buttonClick();
    });

    buttonPrevious.addEventListener("click", function() {
        positionCarousel = (positionCarousel - 1 + persons.length) % persons.length;
        buttonClick();
    });

});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
});

