// var username = $("#username").val();

// console.log(username);
// console.log(document.getElementById("username").value);
$("#button1").click(function(e) {
	e.preventDefault();
	var form = $("#login_form");
	console.log(form.serializeArray());
	$.ajax({
		type: "POST",
		url: "http://13.233.150.16:8000/api/auth/login/",
		dataType: "json",
		crossDomain: true,
		data: form.serializeArray(),
		success: function(data) {
			console.log(data);
		},
		error: function(data) {
			console.log(data);
		}
	});
});

// var values = {};
// $.each($("#login_form").serializeArray(), function(i, field) {
// 	values[field.name] = field.value;
// });
// console.log(values);
