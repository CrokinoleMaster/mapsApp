

var app = angular.module( 'myApp', ['ngRoute', 'leaflet-directive'] );

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller:  'HomeController'
        })
        .when('/sidebyside', {
            templateUrl: 'templates/sidebyside.html',
            controller: 'MapController1'
        })
        .when('/layered', {
            templateUrl: 'templates/layered.html',
            controller: 'MapController2'
        })
        .when('/singlelayered', {
            templateUrl: 'templates/singlelayered.html',
            controller: 'MapController3'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeController', function($scope){

});

app.controller('NavController', function($scope, $location){
    $scope.location = $location;
    $scope.links = [
        { url: 'sidebyside', title: 'Side by side'},
        { url: 'layered', title: 'Layered'},
        { url: 'singlelayered', title: 'Single layered'}
    ];
    $scope.getActive = function(link){
        return ('/'+link.url === $location.path());
    };
});

app.controller('MapController1', function($scope){


})

app.controller('MapController2', function($scope){
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
});

app.controller('MapController3', function($scope){



});