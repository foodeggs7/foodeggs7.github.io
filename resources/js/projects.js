document.addEventListener('DOMContentLoaded', function () {



    var params = new URLSearchParams(window.location.search); // Parses the query string
    console.log(params)
    var id = params.get('id'); // Extracts the value of "id"
    console.log(id)
    var IdNum = Number(id)
    console.log(IdNum); // Converts "id" to a number and logs it

    const root = "https://foodeggs7.github.io/"

    fetch(`${root}resources/api/projects/project${id}.json`)
        .then(response => response.json())
        .then(data => {

            if (data) {
                console.log(data)
                function load() {
                    document.getElementById('Project-Title-En').textContent = data.TitleEn
                    document.getElementById('Project-Title-Nl').textContent = data.TitleNl

                    document.getElementById('Project-Title-top-En').textContent = data.TitleEn
                    document.getElementById('Project-Title-top-Nl').textContent = data.TitleNl

                    if (data.openSource) {
                        console.log('show')
                        document.getElementById('download-Button').style.display = "flex"
                        document.getElementById('download-Button-top').style.display = "flex"

                        fetch(`${root}${data.files}`)
                            .then(response => response.text())
                            .then(data => {
                                document.getElementById('popup-downloads-content').innerHTML = data
                            })
                    } else {
                        console.log('hide')
                        document.getElementById('download-Button').style.display = "none"
                        document.getElementById('download-Button-top').style.display = "none"
                    }



                    //  document.getElementById('popup-downloads-content-EN').innerHTML = data.filesEN
                    //  document.getElementById('popup-downloads-content-NL').innerHTML = data.filesNL

                    if (data.webpage) {
                        console.log('show')
                        document.getElementById('links-Button').style.display = "flex"
                        document.getElementById('links-Button-top').style.display = "flex"
                        fetch(`${root}${data.links}`)
                            .then(response => response.text())
                            .then(data => {
                                document.getElementById('popup-links-content').innerHTML = data
                            })
                    } else {
                        console.log('hide')
                        document.getElementById('links-Button').style.display = "none"
                        document.getElementById('links-Button-top').style.display = "none"
                    }




                    // document.getElementById('popup-links-content-EN').innerHTML = data.linksEN
                    //  document.getElementById('popup-links-content-NL').innerHTML = data.linksNL


                    document.getElementById('Thumb-En').src = data.thumbEn
                    document.getElementById('Thumb-Nl').src = data.ThumbNl

                    document.getElementById('Project-Info-En').innerHTML = data.descriptionEn
                    //document.getElementById('Project-Info-Nl').innerHTML = data.descriptionNl


                    document.getElementById('Start-Data-date-EN').textContent = `Project started: ${data.Date} | ${data.Time} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-date-EN').textContent = `Project Updated: ${data.UpdDate} | ${data.UpdTime} | UTC ${data.UpdUTC}`
                    document.getElementById('Start-Data-post-EN').textContent = `Posted: ${data.PostDate} | ${data.PostTime} | UTC ${data.PostUTC}`
                    document.getElementById('Update-Data-post-EN').textContent = `post Updated: ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.PostUpdUTC}`

                    document.getElementById('Start-Data-date-NL').textContent = `Project gestart: ${data.Date} | ${data.Time} | UTC ${data.UTC}`
                    document.getElementById('Update-Data-date-NL').textContent = `Project bijgewerkt: ${data.UpdDate} | ${data.UpdTime} | UTC ${data.UpdUTC}`
                    document.getElementById('Start-Data-post-NL').textContent = `geplaats: ${data.PostDate} | ${data.PostTime} | UTC ${data.PostUTC}`
                    document.getElementById('Update-Data-post-NL').textContent = `post bijgewerkt: ${data.postUpdDate} | ${data.postUpdTime} | UTC ${data.PostUpdUTC}`

                    //for (let i = 1; i <= data.commends.totalEn; i++) {

                    // }

                    fetch(`${root}${data.descriptionNl}`)
                        .then(response => response.text())
                        .then(data => {

                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = data;

                            // Select all <meta> tags and remove them
                            const metaTags = tempDiv.querySelectorAll('meta');
                            metaTags.forEach(metaTag => metaTag.remove());

                            const Style = tempDiv.querySelectorAll('style');
                            Style.forEach(Style => Style.remove());

                            // Now set the remaining content (without <head>) to the target element
                            document.getElementById('Project-Info-Nl').innerHTML = tempDiv.innerHTML;

                        })

                    fetch(`${root}${data.descriptionEn}`)
                        .then(response => response.text())
                        .then(data => {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = data;

                            // Select all <meta> tags and remove them
                            const metaTags = tempDiv.querySelectorAll('meta');
                            metaTags.forEach(metaTag => metaTag.remove());

                            const Style = tempDiv.querySelectorAll('style');
                            Style.forEach(Style => Style.remove());

                            document.getElementById('Project-Info-En').innerHTML = tempDiv.innerHTML;
                        })

                    for (let i = 1; i <= data.commends.TotalCommends; i++) {
                        let templateKey = `Commend${i}`; // Dynamically build the key (e.g., template1, template2)
                        console.log(templateKey)
                        let Dataroot = data.commends[templateKey];
                        console.log(Dataroot)

                        function AddPFP(userThumb){
                            var userPic = NewComent.querySelector('.User-Pic');
                            if (userThumb > 0) {
                                var api = `https://thumbnails.roproxy.com/v1/users/avatar-headshot?userIds=${userThumb}&size=150x150&format=Png&isCircular=false`

                                fetch(api)
                                    .then(response => response.json())
                                    .then(data => {
                                        userPic.src = data.data[0].imageUrl
                                    })

                            } else {
                                const Imgs = {
                                    "-1": "Cat.jpg",
                                    "-2": "mars.jpg",
                                    "-3": "Featuristic.jpg",
                                    "-4": "Child.jpg",
                                    "-5": "Robot.jpg",
                                    "-6": "Robot2.jpg"
                                }

                                userPic.src = `https://foodeggs7.github.io/resources/img/pfp/${Imgs[userThumb]}`

                            }
                        }
                        if (Dataroot.NL) {
                            var Comment = document.getElementById('Commend-NL').content
                            var NewComent = document.importNode(Comment, true)

                            let userThumb = Dataroot.userThumb
                            

                            //NewComent.querySelector('.User-Pic').src = 

                            AddPFP(userThumb)
                            
                            NewComent.querySelector('.user-name').textContent = Dataroot.userName
                            NewComent.querySelector('.comment-date').textContent = `${Dataroot.date} | ${Dataroot.time} | ${Dataroot.UTC}`
                            NewComent.querySelector('.comment-content').innerHTML = Dataroot.contentNl

                            document.getElementById('ProjectRoot').appendChild(NewComent);
                        }

                        if (Dataroot.ENG) {
                            var Comment = document.getElementById('Commend-EN').content
                            var NewComent = document.importNode(Comment, true)

                            let userThumb = Dataroot.userThumb
                                                        
                            AddPFP(userThumb)


                            // NewComent.querySelector('.User-Pic').src = Dataroot.userThumb
                            NewComent.querySelector('.user-name').textContent = Dataroot.userName
                            NewComent.querySelector('.comment-date').textContent = `${Dataroot.date} | ${Dataroot.time} | ${Dataroot.UTC}`
                            NewComent.querySelector('.comment-content').innerHTML = Dataroot.contentEn

                            document.getElementById('ProjectRoot').appendChild(NewComent);
                        }

                    }

                }


                setTimeout(() => {
                    load()

                }, 2000)


            }

        })


    document.addEventListener('scroll', function () {
        const scrolled = document.getElementById('scrolled')
        const header = document.getElementById('projects-page-header')

        if (window.scrollY > 70) {
            Array.from(document.getElementsByClassName('date-label')).forEach(function (elem) {

                elem.classList.add('date-labbel-scrolled');



            });
            scrolled.style.display = "flex"
            header.style.display = "flex"
        }
        else {
            Array.from(document.getElementsByClassName('date-label')).forEach(function (elem) {




                elem.classList.remove('date-labbel-scrolled');


            });
            scrolled.style.display = "none"
            header.style.display = "none"
        }




    })




})