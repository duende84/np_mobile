$(document).ready(function(){
	loadCompanies();
});
function loadCompanies(){
	$.support.cors = true;
	$.ajax({
		url: BASE_URL + "/api/list",
		type: 'post',
		cache: false,
		dataType:'json',
		success: function (data) {
			showCompanies(data);
		},
		error: function (request,error) {
			alert('Error de red, intente de nuevo');
		}
	});
}

function showCompanies(data){
	$("#companies").html();
	$.each(data.companies, function(index,value){
		console.log(data.companies[index])
		$("#companies").append("<div id='company_"+ value.id  +"' class='companie'><p>" + value.name +"</p><img src='"+value.image.thumb.url+"' /></div>")
	});
}