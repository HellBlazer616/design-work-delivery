var username = $("#name").attr("value");
console.log($("#MyFormElem").serializeArray());

$("#button1").click(function(e) {
	e.preventDefault();
	var form = $("#MyFormElem");
	console.log(form.serializeArray());
	$.ajax({
		type: "POST",
		url: "http://13.233.150.16:8000/api/profile/",
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
