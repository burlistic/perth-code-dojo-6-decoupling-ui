'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function(sc) {

	sc.timeSlotOptions = [
    { label: '06:30am', value: '06:30' },
    { label: '07:00am', value: '07:00' }
  ];

	sc.timeSlotSelected = sc.timeSlotOptions[0];

	//this.slots = ["06:00am", "06:30am", "07:00am"];

	// create and initialise function that is called on page load

	// generate an array of time slots and bind to a model


}]);

//var slots = ["06:00am", "06:30am", "07:00am"];
