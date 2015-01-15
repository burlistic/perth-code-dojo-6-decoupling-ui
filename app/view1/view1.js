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
  var timeSlotServiceInstance;

  // factory function body that constructs shinyNewServiceInstance

  win.console.log(currentTimeService);

  return timeSlotServiceInstance;
}])

.factory('currentTimeService', ['$window', function(win) {
  return new Date(); // easier way to inject in a date?
}])

;

