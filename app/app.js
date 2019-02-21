var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash', 'ngTable', 'angularjs-dropdown-multiselect',
    //main modules
    //'login', 'dashboard']);
    'dashboard']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {

    //IdleScreenList
    $stateProvider
       .state('app', {
           url: '/app',
           templateUrl: 'app/common/app.html',
           controller: 'appCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Dashboard'
           }
       });
    
    // $urlRouterProvider.otherwise('login');

    $urlRouterProvider.otherwise('app/dashboard');
}]);

// set global configuration of application and it can be accessed by injecting appSettings in any modules
app.constant('appSettings', appConfig);
