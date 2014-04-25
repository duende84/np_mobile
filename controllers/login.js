function login(){
	$.support.cors = true;
	$.ajax({
		url: BASE_URL + "/api/login",
		data: { email: $("#email").val(), password : $("#password").val()} ,
		type: 'post',
		cache: false,
		dataType:'json',
		success: function (data) {
			console.log(data)
		},
		error: function (request,error) {
			if(request.status == 200)
			{
				alert('Error en nombre de usuario o contraseña');
			}else{
				alert('Error de red, intente de nuevo');
			}
		}
	});
}