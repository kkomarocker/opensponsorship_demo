/* eslint-disable no-undef */
angular
	.module("basicInfoControllers", [])

	.controller("infoCtrl", function() {
		this.saveAndNext = () => {

			const { info } = this;
      
			window.localStorage.setItem("firstName", info.firstName);
			window.localStorage.setItem("lastName", info.lastName);
			window.localStorage.setItem("dateOfBirth", info.dateOfBirth);
			window.localStorage.setItem("gender", info.gender);
			window.localStorage.setItem("location", info.location);

			window.location = "/about";
		};
	}); 