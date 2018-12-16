var X_MIN, X_MAX, Y_MIN, Y_MAX;

function get_table_ranges () {
  var temp1, temp2;
  temp1 = parseInt($("#xBegin").val(), 10);
  temp2 = parseInt($("#xEnd").val(), 10);
  if(temp1 >= temp2) {
    X_MAX = temp1;
    X_MIN = temp2;
  } else {
    X_MAX = temp2;
    X_MIN = temp1;
  }
  temp1 = parseInt($("#yBegin").val(), 10);
  temp2 = parseInt($("#yEnd").val(), 10);
  if(temp1 >= temp2) {
    Y_MAX = temp1;
    Y_MIN = temp2;
  } else {
    Y_MAX = temp2;
    Y_MIN = temp1;
  }
  return;
}

function createFirstRow(){
  var temp = "<tr>";
  temp +="<td></td>"; // makes first box empty
  for(var x = X_MIN; x <= X_MAX; x++){
    temp += "<td>" + x + "</td>";
  }
  temp +="</tr>";
  return temp;
}

// Fin
function finishTable() {
  var temp = '';
  for (var y = Y_MIN; y <= Y_MAX; y++) {
    var row = '<tr>';
    row += "<td>" + y + "</td>";
    for (var x = X_MIN; x <= X_MAX; x++) {
      row += '<td>' + x * y + '</td>';
    }
    temp += row + "</tr>";
  }
  return temp;
}

function resetForm() {
  $("#xBegin").val(X_MIN);
  $("#xEnd").val(X_MAX);
  $("#yBegin").val(Y_MIN);
  $("#yEnd").val(Y_MAX);
}



$(document).ready(function(){


  $("#draw").click(function(event) {

      $("#inputForm").validate({
        rules: {
          xBegin: {
            required: true,
            digits: true,
            max: 50
          },
          xEnd: {
            required: true,
            digits: true,
            max: 50
          },
          yBegin: {
            required: true,
            digits: true,
            max: 50
          },
          yEnd: {
            required: true,
            digits: true,
            max: 50
          }
        },
        messages: {
          xBegin: {
            required: "The first column bound is required.",
            digits: "Please enter a positive number for the first column bound.",
            max: "Please enter a number less than or equal to 50 for the first column bound."
          },
          xEnd: {
            required: "The second column bound is required.",
            digits: "Please enter a positive number for the second column bound.",
            max: "Please enter a number less than or equal to 50 for the second column bound."
          },
          yBegin: {
            required: "The first row bound is required.",
            digits: "Please enter a positive number for the second row bound.",
            max: "Please enter a number less than or equal to 50 for the second row bound."
          },
          yEnd: {
            required: "The second row bound is required.",
            digits: "Please enter a positive number for the second row bound.",
            max: "Please enter a number less than or equal to 50 for the second row bound."
          }

          }
      });

    if ($("#inputForm").valid()) {
      get_table_ranges();
      var multTable = "<table>" + createFirstRow() + finishTable() + "</table>";
      $("#placeholder").html(multTable);
    }
  });

});
