app.controller('SignCtrl', ['$scope','$state','authUser', function($scope,$state,authUser) {
  $scope.radioValue = "";
  	$scope.isStudent = false ;
  	$scope.isProfessional = false ;
  	$scope.myIntrests = [];
  	$scope.intrests =
  	[
  		{
  			category :"Science and Technology"
  		},
  		{
  			category :"Fiction"
  		},
  		{
  			category :"Horror"
  		},
  		{
  			category :	"Drama"
  		},
  		{
  			category :"Action and adventure"
  		},
  		{
  			category :"Romance"
  		},
  		{
  			category :"Self help"
  		},
  		{
  			category :"Health"
  		},
  		{
  			category :"Travel"
  		},
  		{
  			category :"Childern's"
  		},
  		{
  			category :"Religion, Spirituality & New Age"
  		},
  		{
  			category :	"Science"
  		},
  		{
  			category :"Math"
  		},
  		{
  			category :"History"
  		},
  		{
  			category :"Biographies and Autobiographies"
  		},
  		{
  			category :"Comics"
  		}
  	];

  	$scope.onChoiceSelect = function() {
  		if ($scope.radioValue == "Student"){
  			$scope.isProfessional = false;
  			$scope.isStudent = true ;
  		} else if ($scope.radioValue == "Professional"){
  			$scope.isStudent = false ;
  			$scope.isProfessional = true;
  		} else {
  			console.log("Error in , What are you ....");
  		}
  	}

  	$scope.onIntrestSelect = function (intrestValue) {
  		if ($scope.myIntrests.indexOf(intrestValue) > -1){
  			$scope.myIntrests.pop(intrestValue);
  		}
  		else {
  			$scope.myIntrests.push(intrestValue);
  		}
  	}

  	$scope.onSubmitButton = function () {
      // if (!$scope.radioValue){
  		// 	alert("Select If You are a Student or Professional!");
  		// }
  		if ($("#inputPassword").val() != $("#inputRePassword").val()){
  			alert("passwords do not match");
  		} else {
        if (!$scope.radioValue){
        	alert("Select If You are a Student or Professional!");
        }
        else{
          if ($scope.isStudent){
            var Details = {
              isStudent : true,
              college : $("#inputCollege").val(),
              branch : $("#inputBranch").val(),
              sem :$("#inputSem").val()
            };
          } else if($scope.isProfessional){
            var Details = {
              isStudent : false ,
              job : $("#inputjob").val()
            }
          }
          var data = {
            name : $("#inputName").val(),
            phoneNum : $("#inputNumber").val(),
            email : $("#inputEmail").val(),
            pass : $("#inputPassword").val(),
            place : $("#inputPlace").val(),
            category : Details,
            interests : $scope.myIntrests
          };
          authUser.signupUser(data)
          .then(function(data) {
            alert("Succesfully Created An Account, You are Ready to GO!!!!!")
          },
          function () {
            console.log('albums retrieval failed.');
          });
        }
  		}

  	}
  	$scope.backToHome = function () {
		$state.go('app');
    }

}]);
