// scripts/script.js

function loadPage(page) {
    const contentDiv = document.getElementById('content');

    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
            
            // Add additional script loading if necessary
            if (page === 'about') {
                const moreInfoBtn = document.getElementById('moreInfoBtn');
                moreInfoBtn.addEventListener('click', function() {
                    const moreInfoDiv = document.getElementById('moreInfo');
                    if (moreInfoDiv.style.display === 'none') {
                        moreInfoDiv.style.display = 'block';
                        this.textContent = 'Less Info';
                    } else {
                        moreInfoDiv.style.display = 'none';
                        this.textContent = 'More Info';
                    }
                });
            }
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the default content (optional)
window.onload = function() {
    loadPage('home');
};
