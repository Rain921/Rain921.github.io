$(function(){
	$("#footer-form").validate({
		rules: {
			form_name:{
				required:true
			},
			form_email:{
				required:true,
				email:true
			},
			form_tel:{
				required:true,
				digits:true
			}

		},
		messages:{
			form_name:{
				required: "Error message"
			},
			form_email:{
				required: "Error message"
				
			},
			form_tel:{
				required: "Error message"
			}

		},
		focusCleanup:true

		


	});

});