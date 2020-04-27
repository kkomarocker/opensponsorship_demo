/* eslint-disable no-undef */
angular
	.module("profileControllers", [])

	.controller("profileCtrl", function($scope, $http) {

		$scope.profiles = [];
		this.sports = "";

		$http.get("/api/profiles").then(res => {

			res.data.forEach(profile => {
				if (profile.sports.length === 1) {
					this.sports = profile.sports.join("");
				} else {
					this.sports = profile.sports.join(", ");
				}

				profile.sports = this.sports;
			});

			$scope.profiles = res.data;
			
		}, err => console.log(err) );

		this.createProfile = () => {
			window.location = "/basicInfo";
		};
	});