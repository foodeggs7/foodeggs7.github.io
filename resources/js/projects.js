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
                        console.log('show')
                        document.getElementById('download-Button').style.display = "flex"
                    } else {
                        console.log('hide')
                        document.getElementById('download-Button').style.display = "none"
                    }

                    document.getElementById('popup-downloads-content-EN').innerHTML = data.filesEN
                    document.getElementById('popup-downloads-content-NL').innerHTML = data.filesNL

                    if (data.webpage) {
                        console.log('show')
                        document.getElementById('links-Button').style.display = "flex"
                    } else {
                        console.log('hide')
                        document.getElementById('links-Button').style.display = "none"
                    }

                    document.getElementById('popup-links-content-EN').innerHTML = data.linksEN
                    document.getElementById('popup-links-content-NL').innerHTML = data.linksNL


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

                    for (let i = 1; i <= data.commends.totalEn; i++) {
                        var Comment = document.getElementById('Commend-EN').content
                        var NewComent = document.importNode(Comment, true)

                        let templateKey = `template${i}`; // Dynamically build the key (e.g., template1, template2)
                        console.log(templateKey)
                        let Dataroot = data.commends[templateKey];
                        console.log(Dataroot)

                        NewComent.querySelector('.User-Pic').src = Dataroot.userThumb
                        NewComent.querySelector('.user-name').textContent = Dataroot.userName
                        NewComent.querySelector('.comment-date').textContent = `${Dataroot.date} | ${Dataroot.time} | ${Dataroot.UTC}`
                        NewComent.querySelector('.comment-content').innerHTML = Dataroot.contentEn

                        document.getElementById('ProjectRoot').appendChild(NewComent);
                    }

                    for (let i = 1; i <= data.commends.totalNl; i++) {
                        var Comment = document.getElementById('Commend-NL').content
                        var NewComent = document.importNode(Comment, true)

                        let templateKey = `template${i}`; // Dynamically build the key (e.g., template1, template2)
                        console.log(templateKey)
                        let Dataroot = data.commends[templateKey];
                        console.log(Dataroot)

                        NewComent.querySelector('.User-Pic').src = Dataroot.userThumb
                        NewComent.querySelector('.user-name').textContent = Dataroot.userName
                        NewComent.querySelector('.comment-date').textContent = `${Dataroot.date} | ${Dataroot.time} | ${Dataroot.UTC}`
                        NewComent.querySelector('.comment-content').innerHTML = Dataroot.contentEn

                        document.getElementById('ProjectRoot').appendChild(NewComent);
                    }

                }

                setTimeout(() => {
                    load()
                }, 3000)


            }

        })


})