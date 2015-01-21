'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'timeSlotService', function($scope, timeSlotService) {

  if(timeSlotService.slots[0] === undefined)
  {
    $scope.timeSlotOptions = [];
    $scope.timeSlotOptions[0] =  {
       label: 'no slots available',
       value: 0
    };
    return;
  }

  var formattedSlots = [];

  // todo - unit test controller
  for(var i = 0; i < timeSlotService.slots.length; i++)
  {
    formattedSlots[i] = {
      label: timeSlotService.slots[i],
      value: timeSlotService.slots[i]
    }
  }

  $scope.timeSlotOptions = formattedSlots;

  if(formattedSlots.length > 0)
  {
    $scope.timeSlotSelected = $scope.timeSlotOptions[1];
  } else {
    $scope.timeSlotSelected = $scope.timeSlotOptions[0];
  }

}])

.factory('timeSlotService', ['currentTimeService', function(currentTimeService) {
  var timeSlotServiceInstance = {
    slots : []
  }

  var time = {
    hour : currentTimeService.getHours(),
    minute : currentTimeService.getMinutes()
  };

  var startOfTheDay = new Date();
  startOfTheDay.setHours(7);
  startOfTheDay.setMinutes(0);
  startOfTheDay.setSeconds(0);
  startOfTheDay.setMilliseconds(0);

  var endOfTheDay = new Date();
  endOfTheDay.setHours(23);
  endOfTheDay.setMinutes(0);
  endOfTheDay.setSeconds(0);
  endOfTheDay.setMilliseconds(0);

  var ctr = 0;
  while(new Date(endOfTheDay.getFullYear(), endOfTheDay.getMonth(), endOfTheDay.getDate(), time.hour, time.minute, 0, 0) <= endOfTheDay)
  {

      // round up to next 30 mins slot
      if(time.minute > 0 && time.minute < 30)
      {
        time.minute = 30;
      }
      else if(time.minute > 30)
      {
        time.minute = 0;
        time.hour++;
      }

      if(time.hour >= startOfTheDay.getHours())
      {
        timeSlotServiceInstance.slots[ctr] = time.hour + ': '+ time.minute;
        ctr++;
      }

      // move into seperate method... service ?
      if(time.minute === 30){
        time.minute = 0;
        time.hour++;
      } else {
        time.minute = 30;
      }
  }

  return timeSlotServiceInstance;
}])

.factory('currentTimeService', ['$window', function(win) {
  return new Date(); // easier way to inject in a date?
}])

;

