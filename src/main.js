
function main (){
	init();
}

$(function () {
    //阻止浏览器默认行。 
    $(document).on({
        dragleave: function (e) {    //拖离 
            e.preventDefault();
        },
        drop: function (e) {  //拖后放 
            e.preventDefault();
        },
        dragenter: function (e) {    //拖进 
            e.preventDefault();
        },
        dragover: function (e) {    //拖来拖去 
            e.preventDefault();
        }
    });
     
    var box = document.getElementById('drag_file_div'); //拖拽区域 
    box.addEventListener("drop", function (e) {
        e.preventDefault(); //取消默认浏览器拖拽效果 
        var fileList = e.dataTransfer.files; //获取文件对象 
        //检测是否是拖拽文件到页面的操作 
        if (fileList.length == 0) {
            return false;
        }
        //先获取第一个文件的信息
        var file = fileList[0];
        onDragOneFile(file);         
    }, false); 



}); 