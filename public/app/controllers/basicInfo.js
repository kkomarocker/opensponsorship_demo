/* eslint-disable no-undef */
angular
	.module("BasicInfoControllers", ["ngMessages"])

	.controller("infoCtrl", function($scope, States) {
		
		this.firstName = window.localStorage.getItem("firstName");
		this.lastName = window.localStorage.getItem("lastName");
		this.dateOfBirth = "";
		this.gender = window.localStorage.getItem("gender");
		this.location = window.localStorage.getItem("location");

		if (window.localStorage.getItem("dateOfBirth")) {
			this.dateOfBirth = new Date(window.localStorage.getItem("dateOfBirth"));
		}

		this.changeFirstName = event => {
			States.setFirstName(event.basicInformation.firstName);
			window.localStorage.setItem("firstName", event.basicInformation.firstName);
		};

		this.changeLastName = event => {
			window.localStorage.setItem("lastName", event.basicInformation.lastName);
		};

		this.changeDateOfBirth = event => {
			window.localStorage.setItem("dateOfBirth", new Date(event.basicInformation.dateOfBirth));
		};

		this.changeGender = event => {
			window.localStorage.setItem("gender", event.basicInformation.gender);
		};

		this.changeLocation = event => {
			window.localStorage.setItem("location", event.basicInformation.location);
		};

		this.saveAndNext = () => {
			window.location = "/about";
		};
	}); 