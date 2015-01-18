'use strict';

describe('myApp.view1 module', function() {
  beforeEach(module('myApp.view1'));

  // controller tests
  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};

      var view1Ctrl = $controller('View1Ctrl', { $scope: $scope }); 
      expect(view1Ctrl).toBeDefined();
    }));

    describe('when no slots are available', function(){

      var timeSlotService, mockCurrentTimeService

      beforeEach(function() {
        mockCurrentTimeService = new Date(2015, 1, 16, 23, 1, 0);
        module(function ($provide) {
            $provide.value('currentTimeService', mockCurrentTimeService);
        });
       
      });

      it('should display "no trains available" message', inject(function($controller) {
        //spec body
        var $scope = {};

        var view1Ctrl = $controller('View1Ctrl', { $scope: $scope }); 
        expect($scope.timeSlotOptions.length).toEqual(1);
        expect($scope.timeSlotOptions[0].label).toEqual('no trains available');
      }));

    });

  });

  // service tests //TODO - move to a seperate file
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