angular
	.module("appRoutes", ["ngRoute"])

	.config(($routeProvider, $locationProvider) => {
		$routeProvider
			.when("/", {
				templateUrl: "app/views/pages/athletes-list.html",
			})

			.when("/basicInfo", {
				templateUrl: "app/views/pages/basic-info.html",
			})

			.when("/about", {
				templateUrl: "app/views/pages/about.html",
			})

			.otherwise({ redirectTo: "/" });

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false,
		});
	});
