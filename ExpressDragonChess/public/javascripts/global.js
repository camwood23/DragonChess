$(document).ready(function() {
  console.log('Stuff');
  makeTable();  
});

function makeTable() {
  var table = '';
  for (var i = 0; i < 8; i++) {
    table += '<tr>';
    for (var j = 0; j < 12; j++) {
      table += '<td><div id="sky"></div></td>';
    }
    table += '</tr>';
  }
  $('table#gameBoard').html(table);
  console.log('Something happened');
};
