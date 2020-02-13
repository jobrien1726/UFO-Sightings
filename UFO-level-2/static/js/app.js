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

// Create a function that will take multiple user inputs (filters) and filter table
// based on those values

// Initialize empty object to store active filters
var filters = {};

// Save the filter button to a variable
var searchBy = d3.select(".filter");

// Create a function to filter the data based on inputs when the button
// is clicked
searchBy.on("change", function() {

    // var changedvalue = d3.select(this).property("value");
    var filterId = d3.select(this).attr("id");

    // Select each input value and save to a variable
    //Save all inputs to an array to loop through 
    var inputs = [];

    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);
    inputs.push(inputDate);
    var inputCity = d3.select("#city").property("value").toLowerCase();
    console.log(inputCity);
    inputs.push(inputCity);
    var inputState = d3.select("#state").property("value").toLowerCase();
    console.log(inputState);
    inputs.push(inputState);
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    console.log(inputCountry);
    inputs.push(inputCountry);
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    console.log(inputShape);
    inputs.push(inputShape);
    console.log(inputs);

    inputs.forEach((input) => {
        if (input) {
            filters[filterId] = input;
        }
        else {
            delete filters[filterId];
        }
    });

    let filteredData = data;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });
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

        // Alternative to above code
        // Object.values(ufoSighting).forEach(function(value) {
        //     console.log(value);
        //     var newCell = newRow.append("td");
        //     newCell.text(value);
        });
    });
});

