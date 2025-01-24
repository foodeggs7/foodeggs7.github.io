document.addEventListener('DOMContentLoaded', function () {



    var params = new URLSearchParams(window.location.search); // Parses the query string
var id = params.get('id'); // Extracts the value of "id"
var IdNum = Number(id)
console.log(IdNum); // Converts "id" to a number and logs it

    fetch(`https://foodeggs7.github.io/resources/api/projects/project${id}`)
        .then(response => response.text())
        .then(data => {

            if (data) {

                function load() {
                    document.getElementById('Project-Title-En').textContent = data.TitleEn
                    document.getElementById('Thumb-En').src = data.thumbEn
                    document.getElementById('Project-Info-En') = data.descriptionEn



                }

                setTimeout(() => {
                    load()
                }, 3000)


            }

        })


})