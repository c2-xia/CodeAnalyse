var getFileInfo = function ()
{
    var fileinput_element = document.getElementById("fileinput");
    var one_file = fileinput_element.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        CodeAnalyse.setcode( this.result); 
    }
    reader.readAsText(one_file); 
};

var Analyse = function () {
    CodeAnalyse.analyse();
};