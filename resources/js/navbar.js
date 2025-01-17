

document.addEventListener('DOMContentLoaded', function () {





    fetch('https://foodeggs7.github.io/resources/topbar/navbar.html')
        .then(response => response.text())
        .then(data => {

            if (data) {
                
                document.getElementById('header').innerHTML = data;
                setTimeout(() => {
                    const Nav = document.getElementById('NavBar')

                    console.log(Nav);
                    const dateLabel = document.getElementById('Date')
                    const d = new Date();
                    
                    document.addEventListener('scroll', function () {

                        if (window.scrollY > 70) {
                            Nav.classList.add('scrolling');
                        } else {
                            Nav.classList.remove('scrolling');
                        }

                    })



                    console.log(`Welkom! Je bekijkt deze pagina op ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`);
                    dateLabel.innerHTML = `welcome its: ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`;

                }, 3000)


            }

        })


})