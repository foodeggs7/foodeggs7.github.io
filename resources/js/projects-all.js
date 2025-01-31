document.addEventListener('DOMContentLoaded', function () {
    function load() {
        for (let i = 1; i <= 1; i++) {
            fetch(`https://foodeggs7.github.io/resources/api/projects/project${i}.json`)
                .then(response => response.json())
                .then(data => {
                    if (data) {


                        console.log(data)
                        var Template = document.getElementById('projects-card-link').content

                        var NewCard = document.importNode(Template, true)

                        console.warn(data.TitleNl)

                        NewCard.querySelector('.projects-title-NL').textContent = data.TitleNl
                        NewCard.querySelector('.projects-title-EN').textContent = data.TitleEn

                        NewCard.querySelector('.projects-date-NL').textContent = `post bijgewerkt ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.PostUpdUTC}`
                        NewCard.querySelector('.projects-date-EN').textContent = `post updated ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.PostUpdUTC}`
                       
                        NewCard.querySelector('.projects-commends-NL').textContent = data.commends.totalNl
                        NewCard.querySelector('.projects-commends-EN').textContent = data.commends.totalEn

                        NewCard.querySelector('.projects-desc-NL').innerHTML = data.ShortDescNl
                        NewCard.querySelector('.projects-desc-EN').innerHTML = data.ShortDescEn

                        NewCard.querySelector('.projects-thumb-NL').src = data.ThumbNl
                        NewCard.querySelector('.projects-thumb-EN').src = data.thumbEn






                        NewCard.querySelector('.projects-card').href = `https://foodeggs7.github.io/projects/project/?id=${i}`

                        document.getElementById('projects-parent').appendChild(NewCard);

                    }



                })
        }



    }
    setTimeout(() => {
        load()
    }, 2000)
})