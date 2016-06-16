'use strict';

angular.module('strunk')
.config(function($stateProvider) {
    $stateProvider
    .state('landing', {
        url: '/',
        templateUrl: 'views/landing/landing.html',
        controller: 'landingCtrl'
    });
});