document.addEventListener('DOMContentLoaded'), function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'success.html';
    });
};