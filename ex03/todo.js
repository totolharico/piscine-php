$( document ).ready(function() {

	function addTodo(str) {
		var div = $('<div></div>');
		div.text(str);
		var ft_list = $('#ft_list');
		ft_list.prepend(div);
		div.click(function() {
			if (confirm("remove this todo ????")) {
				div.remove();
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

	$('#new').click(function() {
		var str = prompt('new todo');
		if (str !== "") {
			addTodo(str);
			$.post('insert.php', {todo: str}, function(data) {
				console.log(data);
			})
			var todos = getTodoCookie();
			todos.unshift(str);
			document.cookie = 'todo=' + JSON.stringify(todos);
		}
	});
});
