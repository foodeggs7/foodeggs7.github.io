document.addEventListener('DOMContentLoaded', function () {
    const closeButtons = Array.from(document.getElementsByClassName('popup-close')); // Omzetten naar een array
    const popup = document.getElementById('popup')
    const popupFrames = Array.from(document.getElementsByClassName('popupFrame')); // Omzetten naar een array

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = "none";
           

            popupFrames.forEach(frame => { // Itereren over elke popupFrame
                frame.style.display = "none";
            });
        });
    });
});
