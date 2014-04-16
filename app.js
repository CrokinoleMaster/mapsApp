var app = angular.module( 'myApp', ['ngRoute', 'google-maps'] );

app.controller('MapController1', function($scope){

    $scope.map = {
        center: {
            latitude: 37.77,
            longitude: -122.42
        },
        zoom: 13,
        markClick: false,
        fit: true,
        draggable: true,

        showHeatmap: true,
        showTraffic: true,
        showBike: true,

        heatLayerCallback: function (layer) {
            var mockHeatLayer = new MockHeatLayer(layer);
        },
        toggleHeat: function(){
            $scope.map.showHeatmap = !$scope.map.showHeatmap;
        },
        toggleTraffic: function(){
            $scope.map.showTraffic = !$scope.map.showTraffic;
        },
        toggleBike: function(){
            $scope.map.showBike = !$scope.map.showBike;
        }

    };
})

app.controller('MapController2', function($scope){

    $scope.map = {
        center: {
            latitude: 37.77,
            longitude: -122.42
        },
        zoom: 13,
        markClick: false,
        fit: true,
        draggable: true,

        showHeatmap: true,
        showTraffic: true,
        showBike: true,

        heatLayerCallback: function(layer){
            var mockHeatLayer = new MockHeatLayer(layer);
        },
        toggleHeat: function(){
            $scope.map.showHeatmap = !$scope.map.showHeatmap;
        },
        toggleTraffic: function(){
            $scope.map.showTraffic = !$scope.map.showTraffic;
        },
        toggleBike: function(){
            $scope.map.showBike = !$scope.map.showBike;
        }
    };

});

app.controller('MapController3', function($scope){

    $scope.map = {
        center: {
            latitude: 37.77,
            longitude: -122.42
        },
        zoom: 13,
        markClick: false,
        fit: true,
        draggable: true,

        showHeatmap: false,
        showTraffic: false,
        showBike: false,

        heatLayerCallback: function(layer){
            var mockHeatLayer = new MockHeatLayer(layer);
        },
        toggleHeat: function(){
            $scope.map.showHeatmap = !$scope.map.showHeatmap;
            $scope.map.showTraffic = false;
            $scope.map.showBike = false;
        },
        toggleTraffic: function(){
            $scope.map.showTraffic = !$scope.map.showTraffic;
            $scope.map.showHeatmap = false;
            $scope.map.showBike = false;
        },
        toggleBike: function(){
            $scope.map.showBike = !$scope.map.showBike;
            $scope.map.showHeatmap = false;
            $scope.map.showTraffic = false;
        }
    };

});