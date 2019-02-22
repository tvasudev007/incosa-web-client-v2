dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash', 'NgTableParams',   
function ($rootScope, $scope, $state, $location, dashboardService, Flash, NgTableParams) {
    var vm = this;

    vm.skills = {};
    //development stack
    vm.skills.development = [
        {
            Software: "Mongo DB",
            Percentage: "80",
            theme: "yellow",
            image: "mongodb"
        },
        {
            Software: "Express JS",
            Percentage: "75",
            theme: "aqua",
            image: "express"
        },
        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "83",
            theme: "purple",
            image: "node"
        },
        {
            Software: "Javascript",
            Percentage: "80",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: "Type Script",
            Percentage: "70",
            theme: "teal",
            image: "typescript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "80",
            theme: "yellow",
            image: "jquery"
        },
        {
            Software: "Joomla",
            Percentage: "85",
            theme: "red",
            image: "joomla"
        }
    ];

    vm.tableParams = new NgTableParams(
        {
            page: 1,
            count: 5
        }, { dataset: vm.skills.development});
}]);

