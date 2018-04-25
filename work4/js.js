window.onload = function () {
    var btn = document.getElementById('search-btn');
	btn.onclick = function loginSearch() {
		var vallog = document.getElementById("search").value;
		var result = document.getElementById("result");
		fetch('https://api.github.com/search/users?q=' + vallog)
		.then(function(response) {
			return response.json();
		})
		.then(function(users) {
			try {
				if (users.items.length != 0){
					var table = "<p><b>5 первых найденных логинов:</b></p><table width='205' border='1' cellpadding='0' cellspacing='0'><tbody>"
					for (var i = 0; i < 5; i++) {
					table += "<tr><td>" + users.items[i].login + "</td></tr>";
					}
					table += "</tbody></table>"
					result.innerHTML = table;
				}
			} catch (e) {
				result.innerHTML = "Пользователи с таким логином не найдены";
			}
		});
	}
}