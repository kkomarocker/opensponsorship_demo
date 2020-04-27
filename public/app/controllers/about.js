/* eslint-disable no-undef */
angular
	.module("aboutControllers", [])

	.controller("aboutCtrl", function() {
		this.saveAndNext =  () => {

			const { info } = this;
      
			window.localStorage.setItem("description", info.description);
			window.localStorage.setItem("association", info.association);
			window.localStorage.setItem("team", info.team);

			window.location = "/summary";
		};
	}); 