const btn = document.querySelector('.nav_btn');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const min_lnk = document.querySelector('.min_lnk');

btn.addEventListener('click', function(){
    one.classList.toggle('is_active');
    two.classList.toggle('is_active');
    three.classList.toggle('is_active');
    min_lnk.classList.toggle('active');
});