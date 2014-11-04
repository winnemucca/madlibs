// var app = angular.module('myApp', []);
// 	app.controller('Naming', function($scope) {
// 	$scope.naming=name;
// });
var app= angular.module('myApp',[]);
	app.controller('NamingController', function(){
		this.response ={};
	});

// var app= angular.module('myApp', [])
// .constant('Name', 'response')
// app.controller('Naming', function($scope) {
//   $scope.naming=Name;
// });

// Name is the constant it is reused as a argument for .run .rootScope is used to assist communication between template and block of code


// angular.module('myApp', [])
//     .constant('VERSION', 'response')
//     .controller('MyCtrl', function(VERSION, $scope) {
//         $scope.version = VERSION;
//     });


   