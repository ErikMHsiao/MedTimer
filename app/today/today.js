angular.module('medTimer.today', [])

.controller('TodayController', function($scope, Records) {
  angular.extend($scope, Records);

  later.date.localTime();

  var next;

  for (var i = 0, j = $scope.records.length; i < j; i++) {
     $scope.records[i].next = moment(later.schedule($scope.records[i].schedule).next(1));
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