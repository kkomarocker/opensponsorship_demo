/* eslint-disable no-undef */
angular
	.module("aboutControllers", [])

	.controller("aboutCtrl", function($http, $scope) {

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
			const selectedAssociation = event.about.association.trim();
			
			$http.get(`/api/teams/${selectedAssociation}`).then(res => {
				$scope.teams = res.data;
			});

			window.localStorage.setItem("association", selectedAssociation);
		};

		this.inputTeam = event => {
			console.log(event.about.team.trim());
			window.localStorage.setItem("team", event.about.team.trim());
		};

		this.saveAndNext =  () => {
			window.location = "/summary";
		};
	}); 