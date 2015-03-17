Template.ListQuestion.helpers({
	questions:function(){
		console.log(Questions.find({}))
		return Questions.find({});
	}
});