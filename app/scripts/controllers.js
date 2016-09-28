'use strict';

angular.module('medlaserApp')

.controller('PageCtrl', ['$scope', 'fileFactory', function ($scope, fileFactory) {

  console.log("Page Controller reporting for duty.");

  $scope.files = fileFactory.getFiles();


}]);
