var json = "json";

var Page1 = {
				controller: function() {
					json = "json"
					return {}
				},
				view: function(ctrl) {
					return  m("div",[
						m("button", {onclick: function(){
							var data = m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function(result){
								json=JSON.stringify(result);
								});
						}}, "Get json"),
						m("div", json),
						m("button", {onclick: function(){
							m.route("/");
							}}, "Back to home")])
				}
			}
