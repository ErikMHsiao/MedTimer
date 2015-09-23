angular.module('medTimer', [
  'medTimer.services',
  'medTimer.today',
  'medTimer.add',
  'medTimer.calendar',
  'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/today");

  $stateProvider
    .state('today', {
      url: "/today",
      templateUrl: "app/today/today.html",
      controller: "TodayController"
    })
    .state('add', {
      url: "/add",
      abstract: true,
      templateUrl: "app/add/add.html",
      controller: "AddMedController"
    })
    .state('add.name', {
      url: "",
      templateUrl: "app/add/add.name.html",
      controller: "AddMedController"
    })
    .state('add.schedule', {
      url: "",
      templateUrl: "app/add/add.schedule.html",
      controller: "AddMedController"
    })
    .state('calendar', {
      url: "/calendar",
      templateUrl: "app/calendar/calendar.html",
      controller: "CalendarController"
    });
});