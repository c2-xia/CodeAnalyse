var CodeAnalyse = function () {
    var _sCode = "";
    var _sResultCode = "";
    var _commontList = new  Array;
    var _setCode = function (sCode) {
        _sCode = sCode;
    };
    var _getCode = function () {
        return _sCode;
    };

    var isStart = function(strValue){
        if (strValue == "\/\*")
            return true;
        else
            return false;
    };
    var isEnd = function (strValue) {
        if (strValue == "\*\/")
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
            var b_success = perfunction(n_index, _sCode, n_length);
            if (b_success == true)
                return n_index;

        }
        return undefined;
    };
    var totallyBreakFunction = function(charNow)
    {
        if( charNow == undefined || charNow == null)
            return true;
        return false;
    };
    var findStart = function (nIndex)
    {
        var n_end_index = search(nIndex , findEnd, totallyBreakFunction);
        if (n_end_index != undefined) {
            var m_commont = new comment();
            m_commont.setStart(nIndex);
            m_commont.setEnd(n_end_index);
            _commontList.push(m_commont);
        } else {
            //error
        }
    };
    var findEnd = function (nIndex, sCode, nLength)
    {
        var snow_check = sCode.substr(nIndex, 2);
        if(isEnd(snow_check))
        {
            return true;
        } else if (isStart(snow_check)) {
            findStart(nIndex + 2);
            return false;
        }
    };
    var totallyPerFunction = function(nIndex,sCode, nLength)
    {
        var snow_check = sCode.substr(nIndex, 2);
        if(isStart(snow_check))
        {
            findStart(nIndex + 2);
        }
        return false;
    };
    var _analyse = function () {
       
        _sResultCode = "";
        search(0, totallyPerFunction, totallyBreakFunction);
        var n_size = _commontList.length;
        for(var i=0;i<n_size;i++)
        {
            var n_start = _commontList[i].getStart();
            var n_end = _commontList[i].getEnd();
            if(undefined != n_start && undefined != n_end)
                _sResultCode += _sCode.substr(n_start, (n_end - n_start));
        }

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
