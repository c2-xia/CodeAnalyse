var CodeAnalyse = function () {
    var _sCode = "";
    var _sResultCode = "";
    
	
    var _setCode = function (sCode) {
        _sCode = sCode;
    }; 
    var _getCode = function () {
        return _sCode;
    };
 
    var _analyse = function () {
       
        CommentAnalyse.analyse(_sCode);
    };
	
    var _getResult = function () {
        return _sResultCode;
    };

    return {
        setcode : function(sCode){
            _setCode(sCode);
        },/**/
        getcode: function () {
            return _getCode();
        },
        getresult: function () {
            return _getResult();
        },
        analyse: function () {
            _analyse();
        }
    };

}();
