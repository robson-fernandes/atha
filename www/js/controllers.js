angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('MainCtrl', function($scope) {
  $scope.blushToogle = function() {
    console.log("Teste");
  };
});
