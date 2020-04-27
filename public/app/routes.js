/* eslint-disable no-undef */
angular
	.module("appRoutes", ["ngRoute"])

	.config(($routeProvider, $locationProvider) => {
		$routeProvider
			.when("/", {
				templateUrl: "app/views/pages/athletes-list.html",
				controller: "profileCtrl",
				controllerAs: "profile",
			})

			.when("/basicInfo", {
				templateUrl: "app/views/pages/basic-info.html",
				controller: "infoCtrl",
				controllerAs: "basicInformation",
			})

			.when("/about", {
				templateUrl: "app/views/pages/about.html",
				controller: "aboutCtrl",
				controllerAs: "about",
			})

			.otherwise({ redirectTo: "/" });

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false,
		});
	});
