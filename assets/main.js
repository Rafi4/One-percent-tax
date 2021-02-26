const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const rwd = document.querySelector(".headings");
const facebook = document.querySelector(".share");
const thumb = document.querySelector(".fab");
const square = document.querySelector(".far")

burger.addEventListener("click", () => {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    rwd.classList.toggle("show");
    facebook.classList.toggle("show");
    thumb.classList.toggle("show");
    square.classList.toggle("show");
});


$('nav ul').on('click',function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})




