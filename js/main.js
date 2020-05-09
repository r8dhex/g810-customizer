$(document).ready(function(){
	function getKeyboard(name) {
		return window.keyboard[name];
	}

	var keyboard_div = $('.keyboard-layout');
	var keyboard = getKeyboard('g810');
	var layout = keyboard.layout;
	keyboard_div.addClass(keyboard.name);


	var keyclickHandler = function(ev){
		console.log(this,ev);
	};

	for (var row = 0; row < layout.length; row++) {
		var rowdiv = $('<div class="row"></div>');
		rowdiv.appendTo(keyboard_div);

		for (var col = 0; col < layout[row].length; col++) {
			var obj = layout[row][col];
			var name = layout[row][col]['name'];

			if (obj.type == 'spacer') {
				var spacer = $('<div class="spacer">&nbsp;</div>');
				spacer.css('width', (obj.size * 28)+'px')
				spacer.appendTo(rowdiv);
				
			} else {
				var key = $('<div class="key"></div>');
				if (obj.type) {
					key.addClass(obj.type);
				}
				if (obj.display) {
					key.html(obj.display);
				} else {
					key.text(obj.name.toUpperCase());
				}
				key.addClass('key-'+name);
				key.appendTo(rowdiv);
				key.on('click', keyclickHandler);
			}
		}
	}
});