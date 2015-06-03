'use strict';

angular.module('myApp.image-crop', ['ImageCropper'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/image-crop', {
            templateUrl: 'image-crop/image-crop.html',
            controller: 'MainController'
        });
    }])

    .controller('MainController', function ($scope) {
        console.log('MainController');
        $scope.imageCropResult = null;
        $scope.showImageCropper = false;
        $scope.$watch('imageCropResult', function (newVal) {
            if (newVal) {
                console.log('imageCropResult', newVal);
            }
        });
    });