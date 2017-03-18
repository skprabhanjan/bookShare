app.controller('HomeCtrl', ['$scope','$state','authUser', function($scope, $state,authUser) {
  $scope.emailregistered = false;
$scope.signupUser = function(){
    $state.go('signup');
}
$scope.signinUser = function() {
  if($('#signinbutton').text()=="Next"){
    $scope.emailregistered = true;
    $('#signinbutton').text("Login");
  }
  else if($('#signinbutton').text()=="Login"){
      authUser.authenticateUser($('#email').val(),$('#password').val());
  }
}
$scope.sendResetLink = function(){
  if(confirm("Are you sure you want to send a resetLink to " + $('#email').val())){
    authUser.sendResetLink($('#email').val());
  }
  else{
    console.log("No");
  }
  //authUser.resetLink($('#email').val());
}
}]);
