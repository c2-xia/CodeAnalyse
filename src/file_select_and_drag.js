var fileSelectonMouseMove = function()
{
    var x = event.x;
    var y = event.y;
    var file_view = document.getElementById("file_select_frame"); 
    file_view.style["margin-left"] =  x;
    file_view.style["margin-top"] = y;     
}
