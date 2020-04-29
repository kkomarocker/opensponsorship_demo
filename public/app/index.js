/* eslint-disable no-undef */
angular
	.module(
		"profileApp", 
		[
			"appRoutes", 
			"ngMessages", 
			"ProfileControllers", 
			"BasicInfoControllers", 
			"AboutControllers", 
			"SummaryControllers", 
			"SingleProfileControllers"
		]
	)

	.factory("States", function() {
		var firstName = "test name";

		console.log(firstName);

		return {
			getFirstName: function () {
				return firstName;
			},
			setFirstName: function (name) {
				firstName = name;
			}
		};
	});
