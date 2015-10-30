var name = "name";

var Page2 = {
				controller: function() {
					name = "name";
					return {}
				},
				view: function(ctrl) {
					return  m("div",[m("button", {onclick: function(){
							var data = m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function(result){
								name=result.name;
								});
						}}, "Get name"),
						m("div", name),
						m("button", {onclick: function(){
							m.route("/");
							}}, "Back to home")])
				}
			}
