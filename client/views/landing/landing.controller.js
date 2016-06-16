'use strict';

angular.module('strunk')
.controller('landingCtrl', ['$scope', function($scope){

    var chart = c3.generate({
        bindto: '#foo',
        data: {
            columns: [['food', 100], ['drink', 50]],
            type: 'pie'
        }
    });

}]);