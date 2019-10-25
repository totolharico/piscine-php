function addTodo(str) {
	var div = document.createElement('div');
	div.innerText = str;
	var ft_list = document.getElementById('ft_list');
	ft_list.insertBefore(div, ft_list.firstChild);
	div.addEventListener('click', function() {
		if (confirm("remove this todo ????")) {
			ft_list.removeChild(div);
			todos = getTodoCookie().filter(function(elem) {
				return elem !== str;
			});
			document.cookie = 'todo=' + JSON.stringify(todos);
		}
	});
}

function getTodoCookie() {
	var allCookie = document.cookie;
	tabCookie = allCookie.split(';');

	for (var i = 0; i < tabCookie.length; i++) {
		var c = tabCookie[i].trim().split('=');
		if (c[0] === 'todo')
			return JSON.parse(c[1]);
	}
	return [];
}

var todos = getTodoCookie();
todos.reverse().forEach(function(elem) {
	addTodo(elem);
})

document.getElementById('new').addEventListener('click', function() {
	var str = prompt('new todo');
	if (str !== "") {
		addTodo(str);
		var todos = getTodoCookie();
		todos.unshift(str);
		document.cookie = 'todo=' + JSON.stringify(todos);
	}
});
