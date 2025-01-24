

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
                    const dateLabelnl = document.getElementById('Date-nl')
                    const d = new Date();

                    const langToNL = document.getElementById('langToNl')
                    const langToENG = document.getElementById('langToEng')

                    document.addEventListener('scroll', function () {

                        if (window.scrollY > 70) {
                            Nav.classList.add('scrolling');
                        } else {
                            Nav.classList.remove('scrolling');
                        }

                    })



                    console.log(`Welkom! Je bekijkt deze pagina op ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`);
                    dateLabel.innerHTML = `welcome its: ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`;
                    dateLabelnl.innerHTML = `welkom het is: ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`;

                    function changeLanguage(languageCode) {
                        Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
                            if (elem.classList.contains('lang-' + languageCode)) {
                                elem.style.display = 'block';
                            }
                            else {
                                elem.style.display = 'none';
                            }
                        });
                    }

                    // select handler
                    const selector = document.getElementById('langSelector');
                    selector.addEventListener('change', function (evt) {
                        changeLanguage(this.value);
                    });

                    // detect initial browser language
                    const lang = navigator.userLanguage || navigator.language || 'en-EN';
                    const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
                    changeLanguage(startLang);

                    // updating select with start value
                    selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang)

                    // fill "The selected language is:"
                    // document.getElementById('browserLang').innerText = lang;
                    //document.getElementById('startLang').innerText = startLang;

                    const hamburgerButon = document.getElementById('Hamburger-Toggle')
                    const HamMenu = document.getElementById('HamburgerMenu')

                    hamburgerButon.addEventListener('click', () => {

                        if (HamMenu.style.display == "none") {
                            HamMenu.style.display = "flex"
                            hamburgerButon.classList.add('ri-close-line');
                            hamburgerButon.classList.remove('ri-menu-line');
                        } else {
                            HamMenu.style.display = "none"
                            hamburgerButon.classList.remove('ri-close-line');
                            hamburgerButon.classList.add('ri-menu-line');
                        }


                    })
                }, 3000)


            }

        })


})