// Your jQuery goes here

var userData = {
	name:"",
	email:"",
	html:{likes:[],dislikes:[]},
	css:{likes:[],dislikes:[]},
	js:{likes:[],dislikes:[]},
	strengths:{html:"",css:"",js:""},
	currentQuestion:"welcome"
};

$("#startBtn").click(function(event){
	$("#welcome").hide();
	$("#q1").show();
	if(userData.name){
		$("#name").val()(userData.name);
	}

});

$("#name").change(function(event){

	console.log($("#name").val());
})
$("#email").change(function(event){

	console.log($("#email").val());
	if($("#email").val() && $("#name").val()){
		$("#q2Next").prop("disabled",false);
	}
})

$("#q2Next").click(function(event){
	userData.name=$("#name").val();
	userData.name=$("#email").val();
	$("#q1").hide();
	$("#q2").show();

});

$("#htmlq").click(function(event){
	$("#q2").hide();
	$("#q2a").show();

});

$("#cssq").click(function(event){
	$("#q2").hide();
	$("#q2b").show();

});

$("#jsq").click(function(event){
	$("#q2").hide();
	$("#q2c").show();

});

$(".prevQ2").click(function(event){
	$("#q2").show();
	$(this).parent().parent().parent().hide();
})