/* eslint-disable no-undef */
angular
	.module("aboutControllers", [])

	.controller("aboutCtrl", function() {

		this.description = window.localStorage.description;
		this.association = window.localStorage.association;
		this.team = window.localStorage.team;

		this.inputDescription = event => {
			window.localStorage.setItem("description", event.about.description);
		};

		this.inputAssociation = event => {
			window.localStorage.setItem("association", event.about.association);
		};

		this.inputTeam = event => {
			window.localStorage.setItem("team", event.about.team);
		};

		this.saveAndNext =  () => {
			window.location = "/summary";
		};
	}); 