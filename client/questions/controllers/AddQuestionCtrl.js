angular.module('memorizit').controller('AddQuestionCtrl',['$scope',function($scope){
	
	$scope.question = {};

	$scope.questionMode = {
		0 : 'Multiple Choice',
		1 : 'True or False',
		2 : 'Discurssive'
	};

	$scope.questionModeSelected = 0;

	$scope.save = function(question){

	}
}]);