// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a new function
function buildTable(data) {
     // First, clear out any existing data
    tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
//create a forEach function    ------ "tr" = table row "td" = table data
    data.forEach((dataRow) => {
        // This single line of code is doing a lot. 
        //It tells JavaScript to find the <tbody> tag 
        //within the HTML and add a table row ("tr").
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}