
Template.AddQuestion.events({
	'click button.add-question':function(e,t){
		e.preventDefault();

		mapIndexToLetter = {
			0:"A",1:"B",2:"C",3:"D"
		}

		var _question = t.find('.question-input').value;
		var _answer = t.find('.answer-input').value;
		var _label = t.find('.label-input').value;
		var _comment = t.find('.comment-input').value;

		var _alternatives = [];

		$("#alternatives").children().each(function(i,t){
			 var alt = {}
			 alt.value = $(t).children(":first-child").val();
			 alt.letter = mapIndexToLetter[i];
			 _alternatives.push(alt);
		});

		Questions.insert({question:_question,alternatives:_alternatives,answer:_answer,label:_label,comment:_comment});
		$("#alternatives").children().remove();

		return false;
	},

	'click button.add-alternative':function(e,t){
		e.preventDefault();

		var $alternative = $("<div/>");

		var $input = $("<input/>").attr({"type":"text","placeholder":"insert alternative"}).css({'width':'95%'});
		$alternative.append($input);

		var $remove = $("<i/>").addClass("fa fa-times").css({'margin-bottom':'35px','margin-left':'5px'}).click(function(e){ e.preventDefault(); $(this).parent().children().remove(); });
		$alternative.append($remove);

		$("#alternatives").append($alternative);

		return false;
	}

});