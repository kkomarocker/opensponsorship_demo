/* eslint-disable no-undef */
angular
	.module("singleProfileControllers", [])

	.controller("singleProfileCtrl", function($scope, $http, $routeParams) {
		$scope.profile = {};

		$http.get("/api/profiles/" + $routeParams.id).then(res => {
			$scope.profile = res.data;
			$scope.profile.dateOfBirth = new Date($scope.profile.dateOfBirth);
		});
	}); 