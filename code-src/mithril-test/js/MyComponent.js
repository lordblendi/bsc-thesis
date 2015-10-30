var MyComponent = {
				controller: function() {
					return {}
				},
				view: function(ctrl) {
					return  m("div",[m("button", {onclick: function(){
						m.route("/page1");
							}}, "Page1"),
						m("button", {onclick: function(){
							m.route("/page2");
							}}, "Page2")])
				}
			}
