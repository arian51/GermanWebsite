async function getData() {
    const response = await fetch('http://localhost:8080/getWord');
    const data = await response.json();
    return dataName = data;
}

function loadTable(tableId, fields, data) {
    var rows = '';
    $.each(data, function(index, item) {
        var row = '<tr>';
        $.each(fields, function(index, field) {
            row += '<td>' + item[field+''] + '</td>';
        });
        rows += row + '<tr>';
    });
    $('#' + tableId).html(rows);
}

async function drawTable(){
	let data = await getData();
	data = await retUnique(data, 'word');
	loadTable('data-table', ['word', 'meaning'], data);
};

drawTable();