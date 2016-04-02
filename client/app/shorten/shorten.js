angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // console.log($location.url());
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addOne(link);
  };
});
