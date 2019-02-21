dashboard.controller("EducationController", ['$rootScope', '$scope', '$state', '$location','Flash', '$timeout',
function ($rootScope, $scope, $state, $location, Flash, $timeout) {
    var vm = this;
    this.vm = {};

    this.vm.assectArray = [
        {name: 'Asset1', id: 1 },
        {name: 'Asset2', id: 2 },
        {name: 'Asset3', id: 3 },
        {name: 'Asset4', id: 4 },
        {name: 'Asset5', id: 5 },
        {name: 'Asset6', id: 6 },
        {name: 'Asset7', id: 7 },
        {name: 'Asset8', id: 8 },
        {name: 'Asset9', id: 9 },
        {name: 'Asset10', id: 10 },
        {name: 'Asset11', id: 11 },
        {name: 'Asset12', id: 12 }
    ];

    this.vm.tegArray = [
        {name: 'Teg1', id: 1 },
        {name: 'Teg2', id: 2 },
        {name: 'Teg3', id: 3 },
        {name: 'Teg4', id: 4 },
        {name: 'Teg5', id: 5 },
        {name: 'Teg6', id: 6 },
        {name: 'Teg7', id: 7 },
        {name: 'Teg8', id: 8 },
        {name: 'Teg9', id: 9 },
        {name: 'Teg10', id: 10 },
        {name: 'Teg11', id: 11 },
        {name: 'Teg12', id: 12 }
    ];

    this.vm.selectedAssets = [];
    this.vm.selectedTegs = [];  
    
    $scope.example1model = []; 
    $scope.example1data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"} ];
  
}]);

