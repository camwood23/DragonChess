//Put javascript/jquery code here
document.write("<table>");
for (var i = 0; i < 8; i++) {
    document.write("<tr>");
    for (var j = 0; j < 12; j++) {
        document.write("<td><div></div></td>");
    }
    document.write("</tr>");
}
document.write("</table>");

$(document).ready(function() {
    //put dynamic code inside this function
});
