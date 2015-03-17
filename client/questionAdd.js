
Template.AddQuestion.events({
	'click button.add-question':function(e,t){
		e.preventDefault();

		var _question = t.find('.question-input').value;
		var _answer = t.find('.answer-input').value;
		var _type = t.find('.type-input').value;
		var _comment = t.find('.comment-input').value;
		var _alternatives = []

		$("#alternatives").children().each(function(e,t){
			 _alternatives.push($(t).children(":first-child").val()); 
		});

		Questions.insert({question:_question,alternatives:_alternatives,answer:_answer,type:_type,comment:_comment});
		$("#alternatives").children().remove();

		return false;
	},

	'click button.add-alternative':function(e,t){
		e.preventDefault();

		var $alternative = $("<div/>");

		var $input = $("<input/>").attr({"type":"text","placeholder":"insert alternative"}).addClass("u-full-width");
		$alternative.append($input);

		var $remove = $("<button>remove</button>").css({float:'right','margin-bottom':'35px'}).click(function(e){ e.preventDefault(); $(this).parent().children().remove(); });
		$alternative.append($remove);

		$("#alternatives").append($alternative);

		return false;
	}

});