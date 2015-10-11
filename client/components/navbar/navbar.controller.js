'use strict';

angular.module('webappApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
