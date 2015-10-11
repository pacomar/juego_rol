'use strict';

angular.module('webappApp')
  .controller('PersonajeCtrl', function ($scope) {
    $scope.inventario = {};
    $scope.caracteristicas = {};
    $scope.nombre = "Trostar";
    $scope.clase="Guerrero";
    $scope.subclase="";
    $scope.oro="1000";
  });
