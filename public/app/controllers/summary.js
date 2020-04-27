/* eslint-disable no-undef */
angular
	.module("summaryControllers", [])

	.controller("summaryCtrl", function() {

		this.firstName = window.localStorage.firstName;
		this.lastName = window.localStorage.lastName;
		this.dateOfBirth = window.localStorage.dateOfBirth;
		this.selectedGender = window.localStorage.gender;
		this.location = window.localStorage.location;
		this.description = window.localStorage.description;
		this.selectedAssociation = window.localStorage.association;
		this.selectedTeam = window.localStorage.team;

		// this.saveProfile = () => {
		// 	this.data = $localStorage;
		// };
	}); 