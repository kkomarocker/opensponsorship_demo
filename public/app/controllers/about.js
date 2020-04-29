/* eslint-disable no-undef */
angular
	.module("AboutControllers", [])

	.controller("aboutCtrl", function($http, $scope, States) {

		console.log(States.getFirstName());

		this.description = window.localStorage.description;
		this.association = window.localStorage.association;
		this.team = window.localStorage.team;

		$http.get("/api/association/getAssociation").then(res => {
			$scope.associations = res.data;
		});

		this.inputDescription = event => {
			window.localStorage.setItem("description", event.about.description);
		};

		this.inputAssociation = event => {

			if (!event.about.association) event.about.association = "";
			
			const selectedAssociation = event.about.association.trim();

			if (selectedAssociation.length) {
				$http.get(`/api/teams/${selectedAssociation}`).then(res => {
					$scope.teams = res.data;
				});

				window.localStorage.setItem("association", selectedAssociation);
			} else {
				$scope.teams = [];
			}

		};

		this.inputTeam = event => {
			if (!event.about.team) event.about.team = "";

			window.localStorage.setItem("team", event.about.team.trim());
		};

		this.saveAndNext =  () => {
			window.location = "/summary";
		};
	}); 