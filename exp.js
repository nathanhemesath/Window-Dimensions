
	;(function(){
		
		var init = function(){
			// Inject the Div
			setupFitWeird();
		}
		
		var setupFitWeird = function(){

			// Use jQuery to create a div with the text "Here is some text"
			var div = $('<div></div>');
			var newContent = '<ul class="tab-slider--tabs"><li class="tab-slider--trigger active" rel="exp-202-v1">v1</li><li class="tab-slider--trigger" rel="exp-202-v2">v2</li><li class="tab-slider--trigger" rel="exp-202-v3">v3</li><li class="tab-slider--trigger" rel="exp-202-v4">v4</li></ul>';
		newContent += '<style>#tab-slider--nav{position:fixed;left:0;right:0;bottom:0;z-index:99999;width: 100%;}.tab-slider--tabs {display: block;float: left;margin: 0;padding: 0;list-style: none;position: relative;border-radius: 35px;overflow: hidden;background: #fff;height: 35px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.tab-slider--tabs .tab-slider--trigger.active:after {content: "";width: 100%;background: #345F90;height: 100%;position: absolute;top: 0;left: 0;right:0;-webkit-transition: all 250ms ease-in-out;transition: all 250ms ease-in-out;border-radius: 35px;z-index:-1;}.tab-slider--tabs.slide:after {left: 50%;}.tab-slider--trigger {font-size: 12px;line-height: 1;font-weight: bold;color: #345F90;text-transform: uppercase;text-align: center;padding: 11px 20px;z-index: 2;cursor: pointer;display: inline-block;-webkit-transition: color 250ms ease-in-out;transition: color 250ms ease-in-out;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.tab-slider--trigger.active {color: #fff;position: relative;}</style>';


			div.html(newContent);
			div.attr('id', 'tab-slider--nav');

			$('#tab-slider--nav li').click(function(){
				$(".active").removeClass("active");
				$(this).addClass("active");				
				$('body').removeClass("exp-202-v0 exp-202-v1 exp-202-v2 exp-202-v3 exp-202-v4").addClass("" + $(".active").attr("class").match(/exp-202-v[0-9]/));
			});
			$('body').removeClass("exp-202-v0 exp-202-v1 exp-202-v2 exp-202-v3 exp-202-v4").addClass("" + $(".active").attr("class").match(/exp-202-v[0-9]/));
			
			// Append the div to the <body> tag
			$('body').append(div);

		};
		
		init();

	})(window);	
