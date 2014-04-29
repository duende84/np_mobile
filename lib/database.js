$(document).ready(function(){
	
	persistence.store.websql.config(persistence, "np_db", 'Nuestros Precios Mobile', 5 * 1024 * 1024);	
	
	var Usuario = persistence.define('users', {
		name: "TEXT",
		nickname: "TEXT",
		password: "TEXT",
		email: "TEXT",
		phone: "TEXT",
		birthday: "TEXT",
		gender: "TEXT",
		password_digest: "TEXT",
		remember_token: "TEXT",
		city_id: "TEXT",
		user_type_id: "TEXT",
		multimedia_id: "TEXT"
	});

	var Empresa = persistence.define('companies', {
		nit: "TEXT",
		name: "TEXT",
		email: "TEXT",
		web_site: "TEXT",
		owner_id: "TEXT"
	});

	var Sucursal = persistence.define('company_branches', {
		name: "TEXT",
		address: "TEXT",
		phone: "TEXT",
		email: "TEXT",
		ranking: "TEXT",
		category_id: "TEXT",
		city_id: "TEXT",
		company_id: "TEXT",
		admin_id: "TEXT",
		subscription: "TEXT"
	});
	
	var Producto = persistence.define('products', {
		name: "TEXT",
		price: "TEXT",
		description: "TEXT",
		stock: "TEXT",
		branch_id: "TEXT"
	});

	persistence.schemaSync();

	persistence.transaction(function(tx){
		persistence.flush(tx,function(){});
	});
});