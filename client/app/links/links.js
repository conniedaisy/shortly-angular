angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(response) {
    console.log('data: ', response);
    $scope.data.links = response;
  });

  // console.log('linksController: ', result);
});
