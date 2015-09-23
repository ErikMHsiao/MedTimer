angular.module('medTimer.add', [])

.controller('AddMedController', function($scope, Records) {
  $scope.med = $scope.med || {};
  $scope.schedule = $scope.schedule || [false, false, false, false, false, false, false];
  $scope.time = $scope.time || "10:00";
  angular.extend($scope, Records);

  $('.clockpicker').clockpicker({
    autoclose: true
  });

  $('.clockpicker input').on('blur', function() {
    $scope.time = $(this).val();
  });

  $scope.save = function() {
    var dayOfWeek = [];

    for (var i = 0; i < 7; i++) {
      if ($scope.schedule[i]) {
        dayOfWeek.push(i+1);
      }
    }

    $scope.med.schedule = later.parse.recur().on($scope.time).time().on(dayOfWeek).dayOfWeek();

    $scope.records.push($scope.med);
  };
});