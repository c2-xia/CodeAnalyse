
function main (){
	init();
}

$(function () {
    //��ֹ�����Ĭ���С� 
    $(document).on({
        dragleave: function (e) {    //���� 
            e.preventDefault();
        },
        drop: function (e) {  //�Ϻ�� 
            e.preventDefault();
        },
        dragenter: function (e) {    //�Ͻ� 
            e.preventDefault();
        },
        dragover: function (e) {    //������ȥ 
            e.preventDefault();
        }
    });
     
    var box = document.getElementById('drag_file_div'); //��ק���� 
    box.addEventListener("drop", function (e) {
        e.preventDefault(); //ȡ��Ĭ���������קЧ�� 
        var fileList = e.dataTransfer.files; //��ȡ�ļ����� 
        //����Ƿ�����ק�ļ���ҳ��Ĳ��� 
        if (fileList.length == 0) {
            return false;
        }
        //�Ȼ�ȡ��һ���ļ�����Ϣ
        var file = fileList[0];
        onDragOneFile(file);         
    }, false); 



}); 