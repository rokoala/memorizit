angular.module('memorizit',['angular-meteor','ui.router']);

angular.module('memorizit').controller('MyApp',['$scope','$meteor',function($scope,$meteor){
	$scope.test = $meteor.collection(Questions);
}]);