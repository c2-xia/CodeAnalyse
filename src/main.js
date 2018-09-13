
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
     
    document.getElementById('drag_file_div').addEventListener("drop", function (e) {
        e.preventDefault(); //ȡ��Ĭ���������קЧ�� 
        var fileList = e.dataTransfer.files; //��ȡ�ļ����� 
        //����Ƿ�����ק�ļ���ҳ��Ĳ��� 
        if (fileList.length == 0) {
            return false;
        }
        var fileinput_element = document.getElementById("fileinput");
        fileinput_element.files = e.dataTransfer.files ;    
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
		if(isEdge)
			getFileInfo();
    }, false); 



}); 