angular.module('memorizit')

.filter('letter', function() {
  return function(input) {
    return String.fromCharCode(97 + input);
  };
})

.controller('ListQuestionCtrl',['$scope','$meteor',function($scope,$meteor){
	$scope.questions = $meteor.collection(Questions);
	
}]);