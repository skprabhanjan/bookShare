app.controller('HomeCtrl', ['$scope','$state','authUser', function($scope, $state,authUser) {
  $scope.emailregistered = false;
  $scope.userNotFound = false;
  $scope.buttonVal = "Next";
  $scope.loggingIn = false;
  $scope.emailNotVerified = false;
$scope.signupUser = function(){
    $state.go('signup');
}
$scope.signinUser = function() {
  if($('#signinbutton').val()=="Next"){
    if($('#email').val()==""){
      alert("Please Enter an Email");
    }
    else {
      $scope.emailregistered = true;
      $('.card').css({"height":"40%"});
      $('#signinbutton').val("Login");
      $scope.buttonVal = "Log In";
    }
  }
  else if($('#signinbutton').val()=="Login"){
      $scope.loggingIn = true;
      $scope.buttonVal = "Logging in..."
      authUser.authenticateUser($('#email').val(),$('#password').val())
        .then(function(data) {
          $scope.loggingIn = true;
          if(data.status == "Success"){
               //auth successfull
               console.log(data);
               if(data.data.isVerified == true){
                 Cookies.set(window.btoa('phoneNum'),window.btoa(data.data.phoneNum),{ expires: 12 });
                 $state.go('dash',{phoneNum:data.data.phoneNum,data:data.data});
                 $scope.emailNotVerified = false;
               }
               else{
                 //user not verified
                 $scope.emailNotVerified = true;
                 $scope.loggingIn = false;;
                 $scope.buttonVal = "Log In"
               }
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
