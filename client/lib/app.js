angular.module('memorizit',['angular-meteor','ui.router','selectize']);

angular.module('memorizit').controller('MyApp',['$scope','$meteor',function($scope,$meteor){
	$scope.test = $meteor.collection(Questions);
}]);