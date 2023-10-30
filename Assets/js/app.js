const html = document.getElementsByTagName('html')[0];
const themeSwitch = document.getElementById('themelogo');

themeSwitch.addEventListener('click', () => {
    html.classList.toggle('nuit');

    if(html.classList.contains('nuit')){
        themeSwitch.innerHTML = '<i class="fa-regular fa-sun fa-2xs" style="color: #707070;"></i>';
    } else {
        themeSwitch.innerHTML = '&#9789;';
    }
})