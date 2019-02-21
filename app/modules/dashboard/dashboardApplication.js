var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial', 'angularjs-dropdown-multiselect']);


dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.alert', {
        url: '/alert',
        templateUrl: 'app/modules/dashboard/views/skills.html',
        controller: 'SkillController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Alert'
        }
    });

    //education page state
    $stateProvider.state('app.reports', {
        url: '/reports',
        templateUrl: 'app/modules/dashboard/views/education.html',
        controller: 'EducationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Reports'
        }
    });   

}]);

