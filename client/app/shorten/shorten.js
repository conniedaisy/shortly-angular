angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // console.log($location.url());
  // Your code here


  $scope.link = {};
  $scope.addLink = function() {



    if (Auth.isAuth()) {

      //validation
      if ($scope.shortenForm.$valid) {
        Links.addOne($scope.link)
        .then(function() {
          $location.path('/links');
        });
      }
    } else {
      $location.path('/signin');
    }

  };

  // $scope.redirect = function() {
  // };


});
