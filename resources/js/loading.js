document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('Loading');
    const loadingIndicator = document.querySelector('.LoadingIndicator');

    // The text that we want to type (in each span)
    const spans = loadingIndicator.querySelectorAll('span');
    const loadTextForPage = document.getElementById('LoadingTextForPage').textContent
    let spanIndex = 0;
    let charIndex = 0;
    let width = 0

    const loadBar = document.getElementById('loadBar')
    const innerLoadBar = document.getElementById('InnerLoadBar')

    const ScrollParent = document.querySelector('html');
    ScrollParent.style.overflow = "hidden"
    // Typing effect for each span element
    function typeEffect() {
        const span = spans[spanIndex];
        const text = span.getAttribute("data-text"); // Use data-text for the actual text

        if (charIndex < text.length) {
            span.textContent = text.slice(0, charIndex + 1); // Add 1 character at a time
            charIndex++;
            setTimeout(typeEffect, 100); // Type 1 character every 100ms
        } else {
            spanIndex++;
            if (spanIndex < spans.length) {
                // After finishing one span, move to the next span
                charIndex = 0;
                setTimeout(typeEffect, 200); // Pause between spans
            } else {
                // Hide the Loading screen after typing all text
                function loadingBar() {
                    width += 7
                    loadBar.style.display = "flex"
                    innerLoadBar.style.width = `${width}%`
                    

                    if (width == 28){
                        loadingIndicator.textContent = loadTextForPage
                    }else if (width == 63) {
                        loadingIndicator.textContent = "load translations"

                    }else if (width >= 100) {
                        setTimeout(() => {
                            loadingScreen.style.display = "none";
                            ScrollParent.style.overflow = "auto"

                        }, 1000); // Wait 1 second after typing before hiding
                    }
                    setTimeout(loadingBar, 300)
                }

                loadingBar()

            }
        }
    }

    // Set the text for each span (to prevent overwriting when calling typeEffect)
    spans.forEach(span => {
        span.setAttribute("data-text", span.textContent);
        span.textContent = ""; // Clear the span's content initially
    });

    // Start the typing effect
    typeEffect();
});