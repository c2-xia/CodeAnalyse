var CodeAnalyse = function () {
    var _sCode = undefined;
    var _sResultCode = undefined;
    var _setCode = function (sCode) {
        _sCode = sCode;
    };
    var _getCode = function () {
        return _sCode;
    };

    var isStart = function(strValue){
        if (strValue == "\\\*")
            return true;
        else
            return false;
    };
    var isEnd = function (strValue) {
        if (strValue == "\*\\")
            return true;
        else
            return false;
    };
    var search = function (startIndex, perfunction, breakfunction)
    {
        var n_length = _sCode.length;
        var n_index = startIndex;
        for (; n_index < n_length; n_index++)
        {
            var char_now = _sCode.charAt(n_index); 
            if(breakfunction(char_now))
            {
                break;
            }
            perfunction(n_index,_sCode, n_length);
        }
    };
    var totallyBreakFunction = function(charNow)
    {
        if(charNow==undefined || charNow == null)
            return true;
        return false;
    };
    var totallyPerFunction = function(nIndex,sCode, nLength)
    {
        var snow_check = sCode.substr(nIndex, 2);
        if(isStart(snow_check))
        {

        }
    };
    var _analyse = function () {
       
        var test = _sCode;
        search(0,totallyPerFunction,totallyBreakFunction);
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