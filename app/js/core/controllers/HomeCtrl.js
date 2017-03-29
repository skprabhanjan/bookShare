app.controller('HomeCtrl', ['$scope','$state','authUser', function($scope, $state,authUser) {
  $scope.emailregistered = false;
  $scope.userNotFound = false;
  $scope.buttonVal = "Next";
  $scope.loggingIn = false;
$scope.signupUser = function(){
    $state.go('signup');
}
$scope.signinUser = function() {
  if($('#signinbutton').val()=="Next"){
    $scope.emailregistered = true;
    $('.card').css({"height":"40%"});
    $('#signinbutton').val("Login");
    $scope.buttonVal = "Log In";
  }
  else if($('#signinbutton').val()=="Login"){
      $scope.loggingIn = true;
      $scope.buttonVal = "Logging in..."
      authUser.authenticateUser($('#email').val(),$('#password').val())
        .then(function(data) {
          console.log(data);
          $scope.loggingIn = true;
          if(data.status == "Success"){
               //auth successfull
               Cookies.set(window.btoa('name'),window.btoa(data.data.name),{ expires: 12 });
               //console.log($.cookie('username'));
               $state.go('dash',{phoneNum:data.data.phoneNum,data:data.data});
           }
           else if(data.status == "failed" || data.msg == null){
               //user not found
               $('#password').val("");
               $scope.userNotFound = true;
               $scope.loggingIn = false;;
               $scope.buttonVal = "Log In"
           }
        },
        function () {
          console.log('albums retrieval failed.');
        });
  }
}
$scope.sendResetLink = function(){
  if($('#email').val() == ""){
  alert("Please Enter An Email Address To Send Link To!")
}
else{
  if(confirm("Are you sure you want to send a reset link to " + $('#email').val())){
      authUser.sendResetLink($('#email').val())
      .then(function(data) {
        console.log(data);
      },
      function() {
        console.log("error");
      });
  }
  else{
      console.log("No");
  }
}
  //authUser.resetLink($('#email').val());
}
}]);
