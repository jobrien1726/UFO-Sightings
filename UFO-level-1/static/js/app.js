// Save from data.js as variable
var ufoData = data;

// Console.log the weather data from data.js
console.log(ufoData);

// Change table to hoverable
var ufoTable = d3.select("#ufo-table");
ufoTable.attr("class", "table table-striped table-hover");

// Append news rows to table and fill cells w ufoData
// Save a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each ufoData object
ufoData.forEach(function (ufoSighting) {
    console.log(ufoSighting);

    var newRow = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key,value);
        var newCell = newRow.append("td");
        newCell.text(value);

    // Alternative to above code
    // Object.values(ufoSighting).forEach(function(value) {
    //     console.log(value);
    //     var newCell = newRow.append("td");
    //     newCell.text(value);
    });
});

// Create a function that will take user input datetime info and filter table
// based on that input

// Save the filter button to a variable
var button = d3.select("#filter-btn");

// Create a function to filter the data based on datetime when the button
// is clicked
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Use the input to filter the data by datetime
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);
    console.log(filteredData);

    // Clear table
    tbody.html("");

    // Update table so only showing filtered data
    filteredData.forEach(function (ufoSighting) {
        console.log(ufoSighting);

        var newRow = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key,value);
            var newCell = newRow.append("td");
            newCell.text(value);

        // Alternative to code above
        // Object.values(ufoSighting).forEach(function(value) {
        //     console.log(value);
        //     var newCell = newRow.append("td");
        //     newCell.text(value);
        });
    });
});

