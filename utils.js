/*
	impress.js-utils by Florian Wendelborn
	GitHub: https://github.com/FlorianWendelborn/impress.js-utils
*/

function ImpressUtilities () {
	var data = {
		'keyboard':{},
		'menu':{
			'key':false,
			'element':false,
			'visible':false
		}
	}
	window.onkeypress = function (e) {
		var key = String.fromCharCode(e.charCode);
		if (data.menu.key == key) {
			if (data.menu.visible) {
				removeClass(data.menu.element, 'active');
				data.menu.visible = false;
			} else {
				addClass(data.menu.element, 'active');
				data.menu.visible = true;
			}	
		} else if (data.keyboard[key]) {
			impress().goto(data.keyboard[key]);
		}
	}
	this.menu = function (d) {
		data.keyboard = d;
	}
	this.enableMenu = function (element, key) {
		data.menu.element = element;
		data.menu.key = key;

		var html = '';
		html += '<table>';
		for (var i in data.keyboard) {
			html += '<tr onmousedown="impress().goto(\'' + data.keyboard[i] + '\')"><td>' + i + '</td><td>' + data.keyboard[i] + '</td></tr>';
		}
		html += '</table>';
		data.menu.element.innerHTML = html;
	}
	this.disableMenu = function () {
		data.menu.element = false;
		data.menu.key = false;
	}

	var addClass = function (element, className) {
		element.className += ' ' + className;
	}
	var removeClass = function (element, className) {
		var current = element.className.split(' ');
		var result = [];
		for (var i = 0; i < current.length; i++) {
			if (current[i] != className) {
				result.push(current[i]);
			}
		}
		element.className = result.join(' ');
	}
}