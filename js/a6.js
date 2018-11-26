// Fills out first row of the table, which contains the interval of numbers [X1 - X2]
// Starts at 2nd box, not first
function createFirstRow(X1, X2){
  var temp = "<tr>";
  temp +="<td></td>"; // makes first box empty
  for(var x = X1; x <= X2; x++){
    temp += "<td>" + x + "</td>";
  }
  temp +="</tr>";
  return temp;
}

// Fin
function finishTable(X1, X2, Y1, Y2) {
  var temp = '';
  for (var y = Y1; y <= Y2; y++) {
    var row = '<tr>';
    row += "<td>" + y + "</td>";
    for (var x = X1; x <= X2; x++) {
      row += '<td>' + x * y + '</td>';
    }
    temp += row + "</tr>";
  }
  return temp;
}

// Resets the page, removing invalid flags on form & clearing previous table
function resetForm () {
  var setForm = "form-control";
  document.getElementById("H1").className = setForm;
  document.getElementById("H2").className = setForm;
  document.getElementById("V1").className = setForm;
  document.getElementById("V2").className = setForm;
  displayTables.innerHTML = "";
}


function buildTable() {
  var first = "First ", second = "Second ";
  var vert_bound = "Vertical Bound ", horz_bound = "Horizontal Bound ";
  var is_not_number = "is not a positive number. Please adjust input.";
  var is_required = "is required.";
  var X_MAX, X_MIN, Y_MAX, Y_MIN;
  var invalidForm = "form-control is-invalid", invalidInput = false;
  resetForm();
  // gets four inputs from forms
  var X1 = document.getElementById("H1").value;
  var X2 = document.getElementById("H2").value;
  var Y1 = document.getElementById("V1").value;
  var Y2 = document.getElementById("V2").value;

  // conditionals checking if input is..
  // 1) a valid number, so not like "e"
  // 2) a positive number, so anything greater than 0
  // if it is found to be invalid, the text box the number came from is flagged as invalid,
  // turning red.

  if (isNaN(X1) || X1 < 0) {
    document.getElementById("H1").className = invalidForm;
    invalidInput = true;
    document.getElementById("H1fb").innerHTML = first + horz_bound + is_not_number;
  }
  if (isNaN(X2) || X2 < 0) {
    document.getElementById("H2").className = invalidForm;
    invalidInput = true;
    document.getElementById("H2fb").innerHTML = second + horz_bound + is_not_number;
  }
  if (isNaN(Y1) || Y1 < 0) {
    document.getElementById("V1").className = invalidForm;
    invalidInput = true;
    document.getElementById("V1fb").innerHTML = first + vert_bound + is_not_number;
  }
  if (isNaN(Y2) || Y2 < 0) {
    document.getElementById("V2").className = invalidForm;
    invalidInput = true;
    document.getElementById("V2fb").innerHTML = second + vert_bound + is_not_number;
  }
  
  // if we have valid input, let's build the table.
  if (!invalidInput) {

    // checking to see which of the two bounding numbers is larger for both X and Y.
    if (X1 >= X2) {
      X_MAX = X1;
      X_MIN = X2;
    } else {
      X_MAX = X2;
      X_MIN = X1;
    }

    if (Y1 >= Y2) {
      Y_MAX = Y1;
      Y_MIN = Y2;
    } else {
      Y_MAX = Y2;
      Y_MIN = Y1;
    }
    var temp = createFirstRow(X_MIN, X_MAX) + finishTable(X_MIN, X_MAX, Y_MIN, Y_MAX);

    // updates table
    displayTables.innerHTML = temp;
  }
}
