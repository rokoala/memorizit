Template.runMemorizit.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
    }
}

Template.runMemorizit.helpers({
	exercise:function(){
		//TODO: generate random questions
		var exercise = Questions.find({},{limit:1}).fetch()[0];
		Session.set("exercise", exercise);
		return exercise;
	}
})

Template.runMemorizit.events({
	'click input.question-choice': function(e,t) {
		var selectedIndex;

		if($(t.find('input:radio[name=alternative]:checked')).val() === Session.get('exercise').answer)
			console.log('acertou')

    }
})