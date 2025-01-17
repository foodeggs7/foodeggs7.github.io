

document.addEventListener('DOMContentLoaded', function () {

    const header = document.getElementById('NavBar')
    const dateLabel = document.getElementById('Date')
    const d = new Date();

    console.log(header);

    fetch('https://foodeggs7.github.io/resources/topbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        document.addEventListener('scroll', function () {

            if (window.scrollY > 70) {
                header.classList.add('scrolling');
            } else {
                header.classList.remove('scrolling');
            }

        })



        console.log(`Welkom! Je bekijkt deze pagina op ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`);
        dateLabel.innerHTML = `welcome its: ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`;

    })


})