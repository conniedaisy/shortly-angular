angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // console.log($location.url());
  // Your code here


  $scope.link = {};
  $scope.addLink = function() {

    if (Auth.isAuth()) {
      Links.addOne($scope.link);
    } else {
      $location.path('/signin');
    }
  };

  $scope.redirect = function() {
    $location.path('/links');
  };
});
