/* eslint-disable no-undef */
angular
	.module("singleProfileControllers", [])

	.controller("singleProfileCtrl", function($scope, $http, $routeParams) {
		$scope.profile = {};
		$scope.model = {
			isDisabled: true,
			isShow: false
		};

		let association = "";

		$http.get("/api/profiles/" + $routeParams.id).then(res => {
			$scope.profile = res.data;
			$scope.profile.dateOfBirth = new Date($scope.profile.dateOfBirth);
			
			association = $scope.profile.association;

			$http.get(`/api/teams/${association}`).then(res => {
				$scope.teams = res.data;
			});
		});

		$http.get("/api/association/getAssociation").then(res => {
			$scope.associations = res.data;
		});

		this.updateFirstName = event => {
			$scope.profile.firstName = event.profile.firstName;
		};

		this.updateLastName = event => {
			$scope.profile.lastName = event.profile.lastName;
		};

		this.updateDateOfBirth = event => {
			$scope.profile.dateOfBirth = event.profile.dateOfBirth;
		};

		this.updateGender = event => {
			$scope.profile.gender = event.profile.gender;
		};

		this.updateLocation = event => {
			$scope.profile.location = event.profile.location;
		};
    
		this.updateDescription = event => {
			$scope.profile.description = event.profile.description;
		};

		this.updateAssociation = event => {
			$scope.profile.association = event.profile.association;

			$http.get(`/api/teams/${$scope.profile.association}`).then(res => {
				$scope.teams = res.data;
			});
		};

		this.updateTeam = event => {
			$scope.profile.team = event.profile.team;
		};
    
		this.editProfile = () => {
			$scope.model.isDisabled = false;
			$scope.model.isShow = true;
		};
    
		this.cancelChanges = () => {
			window.location = "/";
		};
    
		this.saveChanges = () => {
			$http.put(`/api/profiles/update/${$routeParams.id}`, $scope.profile).then(res => {
				alert(res.data);
        
				window.location = "/";
			});
		};
	}); 