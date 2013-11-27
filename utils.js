/*
	impress.js-utils by Florian Wendelborn
	GitHub: https://github.com/FlorianWendelborn/impress.js-utils
*/

function ImpressUtilities () {
	var data = {
		'keyboard':{},
		'keymapMenu':{
			'key':false,
			'element':false,
			'visible':false
		}
	}

	// events

	window.onkeypress = function (e) {
		var key = String.fromCharCode(e.charCode);
		if (data.keymapMenu.key == key) {
			if (data.keymapMenu.visible) {
				removeClass(data.keymapMenu.element, 'active');
				data.keymapMenu.visible = false;
			} else {
				addClass(data.keymapMenu.element, 'active');
				data.keymapMenu.visible = true;
			}	
		} else if (data.keyboard[key]) {
			impress().goto(data.keyboard[key]);
		}
	}

	// methods

	this.keymap = function (d) {
		data.keyboard = d;
	}
	this.enableKeymapMenu = function (element, key) {
		data.keymapMenu.element = element;
		data.keymapMenu.key = key;

		var html = '';
		html += '<table>';
		for (var i in data.keyboard) {
			html += '<tr onmousedown="impress().goto(\'' + data.keyboard[i] + '\')"><td>' + i + '</td><td>' + data.keyboard[i] + '</td></tr>';
		}
		html += '</table>';
		data.keymapMenu.element.innerHTML = html;
	}
	this.disableKeymapMenu = function () {
		data.keymapMenu.element = false;
		data.keymapMenu.key = false;
	}

	// functions

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