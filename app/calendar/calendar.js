angular.module('medTimer.calendar', [])

.controller('CalendarController', function($scope, Records) {
  angular.extend($scope, Records);

  later.date.localTime();

  var calendar = [];
  var start = Date.now();
  var end = moment(start).endOf('month').toISOString();

  for (var i = 0, j = $scope.records.length; i < j; i++) {
     $scope.records[i].next = moment(later.schedule($scope.records[i].schedule).next(30, start, end));
     $scope.records[i].next.display = $scope.records[i].next.format('HH:mm');
     $scope.records[i].today = $scope.records[i].next.isSame(new Date(), 'day');
  }

  $scope.records.sort(function(a, b) {
    if (a.next.isAfter(b.next)) {
      return 1;
    } else {
      return -1;
    }
  });

});