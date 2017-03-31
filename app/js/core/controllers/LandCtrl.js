app.controller('LandCtrl', ['$scope','$state','authUser', function($scope, $state,authUser) {


  $scope.login = function(){
    $state.go('app');
  };
  $scope.signup = function(){
    $state.go('signup');
  };
}]);
