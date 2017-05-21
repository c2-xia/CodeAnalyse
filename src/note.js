var Note = function () {
	var _stext = "";
	var _setText = function(info){
		_stext = info;
	};
	var _getText  = function(){
		return _stext;
	};
	return {
        setText : function(sCode){
            _setText(sCode);
        },
		getText : function(){
			return _getText();
		}
    };
	
	
}