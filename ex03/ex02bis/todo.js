$(document).ready(function() {
	let todoList = [];
	let cookieName = "todoList=";
	let cookieIndex = document.cookie.indexOf(cookieName);

	if (cookieIndex >= 0) {
		let cookieValue = document.cookie.substring(cookieIndex + cookieName.length);

		if (cookieValue !== "") {
			todoList = cookieValue.split(",");
			todoList.forEach(function(text) {
				$("#ft_list").prepend($("<div></div>").text(text).click(deleteTodo));
			});
		}
	}

	function deleteTodo() {
		if (confirm("Confirm removing TO DO")) {
			todoList.splice(todoList.indexOf($(this).html()), 1);
			document.cookie = "todoList=" + todoList.join();
			$(this).remove();
		}
	}

	$("#add").click(function() {
		let text = window.prompt("new TO DO: ", "");

		if (text !== null && text !== "") {
			todoList.push(text);
			document.cookie = "todoList=" + todoList.join();
			$("#ft_list").prepend($("<div></div>").text(text).click(deleteTodo));
		}
	})
})