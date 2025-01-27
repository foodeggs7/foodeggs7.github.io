document.addEventListener('DOMContentLoaded', function () {



    var params = new URLSearchParams(window.location.search); // Parses the query string
    console.log(params)
    var id = params.get('id'); // Extracts the value of "id"
    console.log(id)
    var IdNum = Number(id)
    console.log(IdNum); // Converts "id" to a number and logs it

    fetch(`https://foodeggs7.github.io/resources/api/projects/project${id}.json`)
        .then(response => response.json())
        .then(data => {

            if (data) {
                console.log(data)
                function load() {
                    document.getElementById('Project-Title-En').textContent = data.TitleEn
                    document.getElementById('Project-Title-Nl').textContent = data.TitleNl

                    if (data.openSource) {
                        document.getElementById('download-Button').display = "flex"
                    } else {
                        document.getElementById('download-Button').display = "none"
                    }

                    document.getElementById('popup-downloads-content').innerHTML = data.files

                    if (data.webpage) {
                        document.getElementById('links-Button').display = "flex"
                    } else {
                        document.getElementById('links-Button').display = "none"
                    }

                    document.getElementById('popup-links-content').innerHTML = data.links

                    document.getElementById('Thumb-En').src = data.thumbEn
                    document.getElementById('Thumb-Nl').src = data.ThumbNl

                    document.getElementById('Project-Info-En').innerHTML = data.descriptionEn
                    document.getElementById('Project-Info-Nl').innerHTML = data.descriptionNl


                    document.getElementById('Start-Data-date-EN').textContent = `Project started: ${data.Date} | ${data.Time} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-date-EN').textContent = `Project Updated: ${data.UpdDate} | ${data.UpdTime} | UTC ${data.UTC}`
                    document.getElementById('Start-Data-post-EN').textContent = `Posted: ${data.PostDate} | ${data.PostTime} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-post-EN').textContent = `post Updated: ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.UTC}`

                    document.getElementById('Start-Data-date-NL').textContent = `Project gestart: ${data.Date} | ${data.Time} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-date-NL').textContent = `Project bijgewerkt: ${data.UpdDate} | ${data.UpdTime} | UTC ${data.UTC}`
                    document.getElementById('Start-Data-post-NL').textContent = `geplaats: ${data.PostDate} | ${data.PostTime} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-post-NL').textContent = `post bijgewerkt: ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.UTC}`

                }

                setTimeout(() => {
                    load()
                }, 3000)


            }

        })


})