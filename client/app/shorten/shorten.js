angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {}; // from post request
  $scope.addLink = function() {
    Links.addOne($scope.link);
  };


});
