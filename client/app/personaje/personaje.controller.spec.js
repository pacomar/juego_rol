'use strict';

describe('Controller: PersonajeCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var PersonajeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonajeCtrl = $controller('PersonajeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
