function usuario(){

	this.registrarUsuario = rUsuario;
	this.guardarUsuario = gUsuario;

	function rUsuario(data){
		var res = users.all.filter("email",'=',data.email);
		res.list(null,function(results){
			if(results.length = 0){
				gUsuario(data);
			}
			$("#rightPanel").show();
		});
	}

	function gUsuario(data){
		var us = new users({"name":data.name,"email":data.email});
		persistence.add(us);

		persistence.transaction(function(tx){
			persistence.flush(tx,function(){});
		});
	}
}