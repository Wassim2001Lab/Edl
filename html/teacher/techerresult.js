function buildTable(table_id) {
    let tableBody = document.getElementById(table_id),
        firstRow = tableBody.firstElementChild,
        cloneRow = firstRow.cloneNode(true);

    tableBody.append(cloneRow);

    refreshTable(tableBody.firstElementChild); //refresh table on each add
}

function refreshTable(firstRow) {
    let children = firstRow.children;

    children = Array.isArray(children) ? children : Object.values(children); //array check
    children.forEach(x => {
        if (x !== firstRow.lastElementChild) {
            x.firstElementChild.value = '';
        }
    });
}

function removeRow(row) {
    if (row.closest('tbody').childElementCount == 1) {
        alert("This row can't be deleted");
    } else {
        row.closest('tr').remove();
    }
}