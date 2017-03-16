'use strict';

angular.module('fngGlitch', [
  'ngRoute',
  'formsAngular',
  'ngSanitize',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
              templateUrl: 'main/main.html',
              controller: 'MainCtrl'
            })
      .otherwise({redirectTo: '/'});
  });

formsAngular.config(['routingServiceProvider', function (routingService) {
    routingService.start(
      {
        html5Mode: false,
        prefix:'/data',
        routing: 'ngroute'
      }
    );
}]);
