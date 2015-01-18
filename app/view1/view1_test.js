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

      describe('when it is a full day', function(){

      	var timeSlotService, mockCurrentTimeService

      	beforeEach(function() {
          mockCurrentTimeService = new Date(2015, 1, 16, 0, 0, 0);
          module(function ($provide) {
              $provide.value('currentTimeService', mockCurrentTimeService);
          });
    	   
        });

        it('should populate 34 half hour slots', inject(function(timeSlotService) {
          //spec body
          expect(timeSlotService.slots.length).toEqual(34);
        }));

      });


      describe('when the time is 20:35', function(){

        var timeSlotService, mockCurrentTimeService

        beforeEach(function() {
          mockCurrentTimeService = new Date(2015, 1, 16, 20, 35, 0);
          module(function ($provide) {
              $provide.value('currentTimeService', mockCurrentTimeService);
          });
         
        });

        it('should populate 6 half hour slots', inject(function(timeSlotService) {
          //spec body
          expect(timeSlotService.slots.length).toEqual(6);
        }));

      });

  });

});