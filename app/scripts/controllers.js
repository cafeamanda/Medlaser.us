'use strict';

angular.module('medlaserApp')

.controller('PageCtrl', ['$scope', 'regulationFactory', 'plddFactory', 'entFactory', 'proctoFactory', function ($scope, regulationFactory, plddFactory,entFactory, proctoFactory) {

  console.log("Page Controller reporting for duty.");

  $scope.regulations = regulationFactory.getFiles();
  $scope.proctofiles = proctoFactory.getFiles();
  $scope.plddfiles = plddFactory.getFiles();
  $scope.entfiles = entFactory.getFiles();


}]);
