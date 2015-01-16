'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'timeSlotService', function($scope, timeSlotService) {

	// inject time object?

	// test output? Against scope?

	$scope.timeSlotOptions = [
    { label: '06:30am', value: '06:30' },
    { label: '07:00am', value: '07:00' }
  ];

	$scope.timeSlotSelected = $scope.timeSlotOptions[0];

}])

.factory('timeSlotService', ['$window', 'currentTimeService', function(win, currentTimeService) {
  var timeSlotServiceInstance = {
    slots : []
  }

  // constructor?

  // factory function body that constructs shinyNewServiceInstance

  //win.console.log(currentTimeService);

  var time = {
    hour : currentTimeService.getHours(),
    minute : currentTimeService.getMinutes()
  };

  var endOfTheDay = new Date();
  endOfTheDay.setHours(17);
  endOfTheDay.setMinutes(30);
  endOfTheDay.setSeconds(0);
  endOfTheDay.setMilliseconds(0);

  var startOfTheDay = new Date();
  startOfTheDay.setHours(7);
  startOfTheDay.setMinutes(0);
  startOfTheDay.setSeconds(0);
  startOfTheDay.setMilliseconds(0);

  var ctr = 0;
  while(new Date(endOfTheDay.getFullYear(), endOfTheDay.getMonth(), endOfTheDay.getDate(), time.hour, time.minute, 0, 0) <= endOfTheDay)
  {
      timeSlotServiceInstance.slots[ctr] = time;

      // move into seperate method... service ?
      if(time.minute === 30){
        time.minute = 0;
        time.hour++;
      } else {
        time.minute = 30;
      }

      ctr++;
  }

  return timeSlotServiceInstance;
}])

.factory('currentTimeService', ['$window', function(win) {
  return new Date(); // easier way to inject in a date?
}])

;

