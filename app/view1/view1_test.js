'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};

      var view1Ctrl = $controller('View1Ctrl', { $scope: $scope }); 
      expect(view1Ctrl).toBeDefined();
    }));

  });

  describe('view1 timeSlotService', function(){

  	var timeSlotService;

  	beforeEach(function() {

	  inject(function($injector) {
	    timeSlotService = $injector.get('timeSlotService');
	  });
	});


    it('should populate 34 half hour slots for a full day', inject(function(timeSlotService) {
      //spec body
      expect(timeSlotService.slots.length).toEqual(12);
    }));

  });

});