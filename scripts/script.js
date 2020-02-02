window.onload = function(){
    this.generateTable();
}

var names = ["Alexander", "Hendrik", "Anne-Sophie", "Stephan", "Leen"];

function generateTable() {
    const namesTable = document.getElementById('names-table');
    var i;
    for (i = 0; i < names.length; i++) {
        const row = document.createElement('tr');
        const colNum = document.createElement('td');
        const colName = document.createElement('td');
        colNum.textContent = i + 1;
        colName.textContent = names[i];
        row.append(colNum, colName); //append for both children.
        namesTable.appendChild(row); //appendChild for child (row).
    }
}

