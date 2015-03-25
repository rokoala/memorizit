angular.module('memorizit').config([ '$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$stateProvider
		.state('welcome', {
		    url: '/welcome',
		    templateUrl: 'client/landingPage/views/landing.ng.html'
		})
		.state('memorizit', {
		    url: '/memorizit',
		    templateUrl: 'client/memorizit/views/memorizit.ng.html'
		})
		.state('addQuestion', {
		    url: '/question/add',
		    templateUrl: 'client/questions/views/addQuestion.ng.html',
		    controller:'AddQuestionCtrl'
		})
		.state('addMultipleQuestion', {
		    url: '/question/add/multiple',
		    templateUrl: 'client/questions/multiple/views/addQuestionMultiple.ng.html',
		    controller:'AddMultipleQuestionCtrl'
		});

		$urlRouterProvider.otherwise("/welcome");
}]);