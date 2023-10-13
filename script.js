document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navmenu.classList.toggle('active');
}

// Automatic slide every 3 seconds (adjust the interval as needed)
let intervalId;

function autoSlide() {
    document.getElementById('next').click();
}

function startAutoSlide() {
    intervalId = setInterval(autoSlide, 3000); // Slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

startAutoSlide();

// Pause automatic sliding when the user interacts with the slider
document.getElementById('slide').addEventListener('mouseenter', stopAutoSlide);
document.getElementById('slide').addEventListener('mouseleave', startAutoSlide);

