'use strict';

angular.module('webappApp')
  .directive('leftnavbar', function () {
    return {
      templateUrl: 'app/leftnavbar/leftnavbar.html',
      restrict: 'E'
    };
  });
