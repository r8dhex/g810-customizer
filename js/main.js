$(document).ready(function(){
	var keyboard_div = $('.keyboard-layout');
	var layout = window.keyboard.layout;

	var keyclickHandler = function(ev){
		console.log(this,ev);
	};

	for (var row = 0; row < layout.length; row++) {
		var rowdiv = $('<div class="row"></div>');
		rowdiv.appendTo(keyboard_div);
		for (var col = 0; col < layout[row].length; col++) {
			var obj = layout[row][col];
			var name = layout[row][col]['name'];

			if (name == 'spacer') {
				var spacer = $('<div class="spacer">&nbsp;</div>');
				spacer.css('width', (obj.size * 23)+'px')
				spacer.appendTo(rowdiv);
				
			} else {
				var key = $('<div class="key">'+name.substr(0,3)+'</div>');
				if (name.substr(0,3) == 'num') { key.addClass('numeric'); }
				if (obj.type) {
					key.addClass(obj.type);
				}
				key.addClass('key-'+name);
				key.appendTo(rowdiv);
				key.on('click', keyclickHandler);
			}
		}
	}
});