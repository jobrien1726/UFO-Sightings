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

// Create a function that will take multiple user inputs and filter table
// based on those inputs

// Save the filter button to a variable
var button = d3.select("#filter-btn");

// Create a function to filter the data based on inputs when the button
// is clicked
button.on("click", function() {

    // Select each input value and save to a variable
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);

    var inputCity = d3.select("#city").property("value").toLowerCase();
    console.log(inputCity);

    var inputState = d3.select("#state").property("value").toLowerCase();
    console.log(inputState);

    var inputCountry = d3.select("#country").property("value").toLowerCase();
    console.log(inputCountry);

    var inputShape = d3.select("#shape").property("value").toLowerCase();
    console.log(inputShape);

    // Create an empty array in which to store input values
    inputValues = [];

    // Add nonempty input fields to the inputValues array
    if (inputDate !== "") {
        inputValues.push(inputDate);
    };

    if (inputCity !== "") {
        inputValues.push(inputCity);
    };

    if (inputState !== "") {
        inputValues.push(inputState);
    };

    if (inputCountry !== "") {
        inputValues.push(inputCountry);
    };

    if (inputShape !== "") {
        inputValues.push(inputShape);
    };

    console.log(inputValues);

    for (i=0; i < inputValues.length; i++) {
        var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValues[i] || ufoData.city === inputValues[i] || ufoData.state === inputValues[i] || ufoData.country === inputValues[i] || ufoData.shape === inputValues[i])
    }
    console.log(filteredData)

    // // Use the input to filter the data by datetime
    // var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputDate && ufoData.city === inputCity && ufoData.state === inputState && ufoData.country === inputCountry && ufoData.shape === inputShape);
    // console.log(filteredData);

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

