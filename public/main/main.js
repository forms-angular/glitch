'use strict';

angular.module('fngGlitch')
  .controller('MainCtrl', function ($scope, $http, routingService) {
  
    $http.get('/api/models').then(function(response) {
      $scope.models = response.data;
    });
  
    $scope.newUrl = function (model) {
        return routingService.buildUrl(model + '/new');
    };

    $scope.listUrl = function (model) {
        return routingService.buildUrl(model);
    };  
  
  });