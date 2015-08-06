//Put javascript code here that will design the layout of the board.
function makeTable(id) {
    document.write("<table>");
    for (var i = 0; i < 8; i++) {
        document.write("<tr>");
        for (var j = 0; j < 12; j++) {
            document.write("<td><div id='" + id + "'></div></td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

makeTable("sky");
makeTable("ground");
makeTable("subterrain");

$(document).ready(function() {
    //JQuery code goes inside of here to make the board dynamic.
});
