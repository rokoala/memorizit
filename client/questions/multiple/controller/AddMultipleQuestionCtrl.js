angular.module('memorizit').controller('AddMultipleQuestionCtrl',['$scope','$meteor','$location',function($scope,$meteor,$location){

	$scope.questions = $meteor.collection(Questions);

	$scope.question = {
		type:"multiple",
		alternatives:[{value:""},{value:""},{value:""},{value:""}]
	};

	$scope.myOptions = [];

	 $scope.tagsConfig = {
    	delimiter: ',',
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        } 
	    }
  	}

	$scope.save = function(question){
		$scope.questions.save(question);
		$location.path( "/question/add" );
	}

	$scope.setAnswer = function($index,$event){
		$scope.question.answer=$index;

		angular.element(".btn-set-answer")
			.css({"background-color":"white"})
			.text("Set as Answer");

		angular.element($event.target)
			.css({"background-color":"lightgreen"})
			.text("Answer");
	}

	$scope.addAlternative = function(){
		$scope.question.alternatives.push({value:''});
	}

}]);