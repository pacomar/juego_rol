'use strict';

angular.module('webappApp')
  .controller('NavbarLeftCotrl', function ($scope, Auth) {
    $scope.logueado = Auth.isLoggedIn;
      $scope.menu = [{
        'title': 'Personaje',
        'state': 'personaje'
      },{
        'title':'Establo',
        'state':'estbalo'
      },{
        'title':'Taberna',
        'state':'taberna'
      },{
        'title':'Tienda',
        'state':'tienda'
      },{
        'title':'Establo',
        'state':'estbalo'
      },{
        'title':'Mazmorra',
        'state':'mazmorra'
      }];
  });