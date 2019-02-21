dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.showDetails = true;
    vm.home = {};
    
    vm.home.mainData = [
        {
            title: "Projects",
            value: "30+",
            theme: "aqua",
            icon: "puzzle-piece"
        },
        {
            title: "Designs",
            value: "250+",
            theme: "red",
            icon: "paint-brush"
        },
        {
            title: "Awards",
            value: "50+",
            theme: "green",
            icon: "trophy"
        },
        {
            title: "Cups of Beer",
            value: "0",
            theme: "yellow",
            icon: "glass"
        },
    ];

    Highcharts.chart('LineChart', {

        // chart: {
        //     backgroundColor: {
        //         linearGradient: [0, 0, 0, 500],
        //         stops: [
        //             [0, '#d2cdc6'],
        //             [1, '#fff']
        //         ]
        //     },
        //     type: 'line'
        // },
        chart: {
            backgroundColor: 'transparent',
            type: 'line'
        },
        title: {
            text: ''
        },
        yAxis: {
            labels: {
                 style: {
                     color: '#262626'
                 }
            }
        },
        xAxis: {            
            labels: {
                 style: {
                     color: '#262626'
                 }
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },        
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    Highcharts.chart('BarChart', {
        chart: {
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            labels: {
                 style: {
                     color: '#262626'
                 }
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            labels: {
                 style: {
                     color: '#262626'
                 }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    Highcharts.chart('AreaChart', {
        chart: {
            backgroundColor: 'transparent',
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            labels: {
                 style: {
                     color: '#262626'
                 }
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            labels: {
                 style: {
                     color: '#262626'
                 }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });   

    /** Map**/
    //Data
    var cities = [
        {
            city : 'Toronto',
            desc : 'This is the best city in the world!',
            lat : 43.7000,
            long : -79.4000
        },
        {
            city : 'New York',
            desc : 'This city is aiiiiite!',
            lat : 40.6700,
            long : -73.9400
        },
        {
            city : 'Chicago',
            desc : 'This is the second best city in the world!',
            lat : 41.8819,
            long : -87.6278
        },
        {
            city : 'Los Angeles',
            desc : 'This city is live!',
            lat : 34.0500,
            long : -118.2500
        },
        {
            city : 'Las Vegas',
            desc : 'Sin City...\'nuff said!',
            lat : 36.0800,
            long : -115.1522
        }
    ];
    var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    } 
}]);

