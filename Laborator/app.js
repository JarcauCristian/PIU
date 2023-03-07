const btn = document.querySelector('.start_btn');
const lnk = document.querySelector('.lnk');

btn.addEventListener('click', function(){
    lnk.classList.toggle('active');
});