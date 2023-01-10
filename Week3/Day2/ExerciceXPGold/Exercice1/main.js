let select = document.getElementById("genres");
console.log(select.value); // Outputs "blues"

// Add an additional option to the select tag
const option = document.createElement("option");
option.value = "classic";
option.text = "Classic";
select.add(option);

// Set the newly added option as selected by default
select.value = "classic";