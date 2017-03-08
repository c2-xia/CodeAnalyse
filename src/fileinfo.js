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

var comment = function () {
    var n_start_index = undefined;
    var n_end_index = undefined;
    return { 
        setStart:function(nValue)
        {
            n_start_index = nValue;
        },
        setEnd:function(nValue)
        {
            n_end_index = nValue;
        },
        getStart:function()
        {
            return n_start_index;
        },
        getEnd: function () {
           return  n_end_index ;
        }
    };
};
