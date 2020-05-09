(function(){

	function defG810() {
		var g810 = {
			name: 'g810',
			layout: [
				[
					{name:'logo', display:'G'},
					{type:'spacer', size: 19},
					{name:'num', type:'indicators'},
					{name:'caps', type:'indicators'},
					{name:'scroll', type:'indicators'},
					{type:'spacer', size: 3},
					{name:'game', type:'indicators'},
					{type:'spacer', size: 2},
					{name:'backlight', type:'indicators'},
					{type:'spacer', size: 1},
					{name:'mute', type:'multimedia'}
				],
				[
					{name:'esc', type:'functions'},
					{type:'spacer', size: 1},
					{name:'f1', type:'fkeys'},
					{name:'f2', type:'fkeys'},
					{name:'f3', type:'fkeys'},
					{name:'f4', type:'fkeys'},
					{type:'spacer', size: 1},
					{name:'f5', type:'fkeys'},
					{name:'f6', type:'fkeys'},
					{name:'f7', type:'fkeys'},
					{name:'f8', type:'fkeys'},
					{type:'spacer', size: 1},
					{name:'f9', type:'fkeys'},
					{name:'f10', type:'fkeys'},
					{name:'f11', type:'fkeys'},
					{name:'f12', type:'fkeys'},
					{type:'spacer', size: 1},
					{name:'print_screen', type:'functions', display:'PRT SCRN'},
					{name:'scroll_lock', type:'functions', display:'SCR LOCK'},
					{name:'pause_break', type:'functions', display:'BRK'},
					{type:'spacer', size: 1},
					{name:'play', type:'multimedia', display:'&blacktriangleright;'},
					{name:'stop', type:'multimedia', display:'&FilledSmallSquare;'},
					{name:'prev', type:'multimedia', display:'&laquo;'},
					{name:'next', type:'multimedia', display:'&raquo;'}
				],
				[
					{name:'tilde', display:'~'},
					{name:'n1'},
					{name:'n2'},
					{name:'n3'},
					{name:'n4'},
					{name:'n5'},
					{name:'n6'},
					{name:'n7'},
					{name:'n8'},
					{name:'n9'},
					{name:'n0'},
					{name:'minus', display:'-'},
					{name:'equal', display:'='},
					{name:'backspace', display:'&leftarrow;'},
					{type:'spacer', size: 1},
					{name:'insert', type:'functions', display:'INS'},
					{name:'home', type:'functions'},
					{name:'page_up', type:'functions', display:'PAGE UP'},
					{type:'spacer', size: 1},
					{name:'num_lock', display:'NUM LOCK'},
					{name:'num_slash', display:'/'},
					{name:'num_asterisk', display:'*'},
					{name:'num_minus', display:'-'}
				],
				[
					{name:'tab'},
					{name:'q'},
					{name:'w'},
					{name:'e'},
					{name:'r'},
					{name:'t'},
					{name:'y'},
					{name:'u'},
					{name:'i'},
					{name:'o'},
					{name:'p'},
					{name:'open_bracket', display:'['},
					{name:'close_bracket', display:']'},
					{name:'backslash', display:'\\'},
					{type:'spacer', size: 1},
					{name:'del', type:'functions'},
					{name:'end', type:'functions'},
					{name:'page_down', type:'functions', display:'PAGE DOWN'},
					{type:'spacer', size: 1},
					{name:'num_7'},
					{name:'num_8'},
					{name:'num_9'}
				],
				[
					{name:'caps_lock', display:'CAPS'},
					{name:'a'},
					{name:'s'},
					{name:'d'},
					{name:'f'},
					{name:'g'},
					{name:'h'},
					{name:'j'},
					{name:'k'},
					{name:'l'},
					{name:'semicolon', display:';'},
					{name:'quote', display:'\''},
					{name:'enter'},
					{type:'spacer', size: 8},
					{name:'num_4'},
					{name:'num_5'},
					{name:'num_6'},
					{name:'num_plus', display:'+'}
				],
				[
					{name:'shift_left', type:'modifiers'},
					{name:'z'},
					{name:'x'},
					{name:'c'},
					{name:'v'},
					{name:'b'},
					{name:'n'},
					{name:'m'},
					{name:'comma', display:','},
					{name:'period', display:'.'},
					{name:'slash', display:'/'},
					{name:'shift_right', type:'modifiers'},
					{type:'spacer', size: 3},
					{name:'arrow_top', type:'arrows', display:'&uparrow;'},
					{type:'spacer', size: 3},
					{name:'num_1'},
					{name:'num_2'},
					{name:'num_3'}
				],
				[
					{name:'ctrl_left', type:'modifiers'},
					{name:'win_left', type:'modifiers'},
					{name:'alt_left', type:'modifiers'},
					{name:'space'},
					{name:'alt_right', type:'modifiers'},
					{name:'win_right', type:'modifiers'},
					{name:'menu', type:'modifiers'},
					{name:'ctrl_right', type:'modifiers'},
					{type:'spacer', size: 1},
					{name:'arrow_left', type:'arrows', display:'&leftarrow;'},
					{name:'arrow_bottom', type:'arrows', display:'&downarrow;'},
					{name:'arrow_right', type:'arrows', display:'&rightarrow;'},
					{type:'spacer', size: 1},
					{name:'num_0'},
					{name:'num_dot', display:'.'},
					{name:'num_enter', display:'ENT'}
				],
			] 
		};

		for (var r=0; r<g810.layout.length; r++) {
			for (var c=0; c<g810.layout[r].length; c++) {
				var obj = g810.layout[r][c];
				var reNum = new RegExp(/n[0-9]/);

				if (obj.name) {
					if (obj.name.substr(0,4)=='num_') {
						obj.display = obj.display || obj.name.substr(4,1);
						obj.type = "numeric";
					} else if (reNum.test(obj.name)) {
						obj.display = obj.name.substr(1,1);
					}
				}

				if (obj.type && obj.type=='modifiers') {
					obj.display = obj.name.substr(0,obj.name.indexOf('_')).toUpperCase();
				}
			}
		}
		return g810;
	}

	window.keyboard={};
	window.keyboard['g810'] = defG810();
})();