/**
 * Created by dunght163 on 6/1/15.
 */
(function () {
    'use strict';

    angular.module('myApp.phoneApp.phoneApp-controllers', [])

        .controller('phone-list-controller', ['$scope', '$http', phoneListController])
        .controller('phone-detail-controller', ['$scope', '$routeParams', '$http', phoneDetailController]);

    function phoneListController($scope, $http) {
        $scope.maxResult = 5;

        $http.get('phoneApp/resources/data/phones/phones.json').success(function (data) {
            $scope.phones = data.slice(0, $scope.maxResult);
        });

        $scope.orderProp = 'name';

        $scope.author = 'dunght163';
    };

    function phoneDetailController($scope, $routeParams, $http) {
        $scope.phoneId = $routeParams.phoneId;

        $http.get('phoneApp/resources/data/phones/' + $routeParams.phoneId + '.json').success(function (data) {
            $scope.phone = data;
        });
    };
})();
