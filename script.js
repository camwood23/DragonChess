//Put javascript/jquery code here
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
    //put dynamic code inside this function
});
