function ImpressUtilities () {
	var data = {
		'keyboard':{}
	}
	window.onkeypress = function (e) {
		if (data.keyboard[String.fromCharCode(e.charCode)]) {
			impress().goto(data.keyboard[String.fromCharCode(e.charCode)]);
		}
	}
	this.menu = function (d) {
		data.keyboard = d;
	}
}