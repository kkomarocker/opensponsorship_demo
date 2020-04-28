/* eslint-disable no-undef */
angular
	.module("summaryControllers", [])

	.controller("summaryCtrl", function() {

		this.firstName = window.localStorage.firstName;
		this.lastName = window.localStorage.lastName;
		this.dateOfBirth = new Date(window.localStorage.dateOfBirth);
		this.selectedGender = window.localStorage.gender;
		this.location = window.localStorage.location;
		this.description = window.localStorage.description;
		this.selectedAssociation = window.localStorage.association;
		this.selectedTeam = window.localStorage.team;
    
		this.editBasicInfo = () => {
			window.location = "/basicInfo";
		};

		this.editAbout = () => {
			window.location = "/about";
		};
    
		this.toProfileList = () => {
			alert("Form Data will be removed. Continue?");

			window.localStorage.removeItem("firstName");
			window.localStorage.removeItem("lastName");
			window.localStorage.removeItem("dateOfBirth");
			window.localStorage.removeItem("gender");
			window.localStorage.removeItem("location");
			window.localStorage.removeItem("description");
			window.localStorage.removeItem("association");
			window.localStorage.removeItem("team");

			window.location = "/";
		};
  

		this.saveProfile = () => {
			console.log("save profile");
		};
	}); 