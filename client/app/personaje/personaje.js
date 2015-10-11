'use strict';

angular.module('webappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('personaje', {
        url: '/personaje',
        templateUrl: 'app/personaje/personaje.html',
        controller: 'PersonajeCtrl',
        authenticate: true
      });
  });