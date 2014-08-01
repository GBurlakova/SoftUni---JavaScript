var table = document.getElementById('table');
var btnHideOddRows = document.getElementById('btnHideOddRows');

btnHideOddRows.addEventListener('click', function () {
    for (var i = 0; i < table.rows.length; i++) {
        if (i % 2 === 0) {
            table.rows[i].style.display = 'none';
        }
    }
});