/* eslint-disable no-undef */
angular
	.module("profileControllers", [])

	.controller("profileCtrl", function($scope, $http) {

		$scope.profiles = [];

		$http.get("/api/profiles").then(res => {

			res.data.forEach(profile => {
				profile.dateOfBirth = moment(profile.dateOfBirth).format("MM/DD/YYYY");
			});

			$scope.profiles = res.data;
			
		}, err => console.log(err) );

		this.createProfile = () => {
			window.location = "/basicInfo";
		};

		this.editProfile = () => {
			console.log("hello");
		};
	});