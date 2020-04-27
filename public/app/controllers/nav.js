/* eslint-disable no-undef */
angular
	.module("navControllers", [])

	.controller("profileCtrl", function() {
		this.createProfile = () => {
			window.location = "/basicInfo";
		};
	}); 