const btn = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

btn.addEventListener('click', function() {
    if (spoiler.style.display === 'none') {
        spoiler.style.display = 'block';
        document.addEventListener('keyup', escClose);
    } else {
        spoiler.style.display = 'none';
        document.removeEventListener('keyup', escClose);
    }
});

function escClose(event) {
    if (event.key === 'Escape') {
        spoiler.style.display = 'none';
        document.removeEventListener('keyup', escClose);
    }
}