const search = document.getElementById('search');
const txtarea = document.getElementById('txtarea');

search.addEventListener('click', () => {
    if (txtarea.style.display == 'none') {
        txtarea.style.display = 'block';
    } else {
        txtarea.style.display = 'none';
    }
});