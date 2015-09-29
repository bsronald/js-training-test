var SampleForm=function(){


}
SampleForm.prototype.setName = function(name) {
	// body...
	$('#demo-form').find('input:nth-child(2)').val(name);
};
SampleForm.prototype.setEmail = function(email) {
	// body...
	$('#demo-form').find('input:nth-child(4)').val(email);
};
SampleForm.prototype.setSex = function(sex) {
	// body...
	$('#genderM').prop('checked', true);
	
};
SampleForm.prototype.setHobbies = function(hobby) {
	// body...
	if(hobby=='skiing')
		$('#hobby1').prop('checked', true);
	if(hobby=='running')
		$('#hobby2').prop('checked', true);
	if(hobby=='eating')
		$('#hobby3').prop('checked', true);
	if(hobby=='sleeping')
		$('#hobby4').prop('checked', true);
	if(hobby=='reading')
		$('#hobby5').prop('checked', true);
	if(hobby=='coding')
		$('#hobby6').prop('checked', true);
	


};
SampleForm.prototype.submit = function() {
	// body...
	$('#demo-form').find('span').submit();
};
