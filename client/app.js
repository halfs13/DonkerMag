'use strict';

angular.module('strunk', [
    'ui.router'
])
.constant('SERVER_URL', '/api/')
.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider
    .otherwise('/');
}]);
