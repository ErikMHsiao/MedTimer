angular.module('medTimer.services', [])

.factory('Records', function() {
  var records = [];

  return {
    records: records
  }
});