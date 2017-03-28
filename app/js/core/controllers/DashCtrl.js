app.controller('DashCtrl', ['$scope','$state','$stateParams', function($scope,$state,$stateParams) {
  $scope.isAdds = true ;
  $scope.isReq = false;
  $scope.isDash = true;
  $scope.isPostRequests = false ;
  $scope.isMyAdds = false ;
  $scope.username = $state.params.data.name;

$scope.openNav = function(){
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

$scope.closeNav = function (){
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
};
$scope.onRecomAdds = function (){
  $scope.isReq = false;
  $scope.isAdds = true;
};
$scope.onRecomReq = function (){
  $scope.isAdds = false;
  $scope.isReq = true;
};
$scope.PostRequests = function (){
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isPostRequests = true;
};
$scope.MyAdds = function (){
  $scope.isDash = false;
  $scope.isMyAdds = true;
  $scope.isPostRequests = false;
};
$scope.logOut = function(){
  $state.go('app');
}
}]);
