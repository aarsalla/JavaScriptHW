// from data.js
var tableData = data;


// YOUR CODE HERE!

var tbody = d3.select("#tbody");

var filterBtn = d3.select("#filter-btn");


var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 


var inputDate = d3.select("#datetime");


function loadTableData(dataRows) {
  document.getElementById('table-content').innerHTML="";
  
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(dataRows)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  console.log(d)
      return `<td>${d.datetime}</td> 
      <td>${d.city.charAt(0).toUpperCase()+d.city.slice(1)}</td> 
      <td>${d.state.toUpperCase()}</td> 
      <td>${d.country.toUpperCase()}</td>
      <td>${d.shape.charAt(0).toUpperCase()+d.shape.slice(1)}</td> 
      <td>${d.durationMinutes}</td> 
      <td>${d.comments}</td>`;
});     
}
loadTableData(tableData);

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(`Input Value: ${inputValue}`);
  
    // Create Filtered dataset based on InputValue entered by user
    if (inputValue) {
    var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
    console.log(`Filtering Data: ${filterdata}`);
   
    // Build new UFO Table with the filtered subset of UFO Sighting data
    // buildTable(filterdata);
    tbody.html("");
    loadTableData(filterdata);
  });
