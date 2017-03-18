app.factory('authUser', ['$http','$state','$q', function($http,$state, $q) {
	var host = "https://22588a0e.ngrok.io";
		var def = $q.defer();
	return {
		authenticateUser:function(email,password){
			// function to authenticate user by checking in the db , making an api call to /users/login
			var dataToSend = {email:email ,pass: password};

			$http.post(host + '/users/signin',dataToSend).success(
				function(resp){

						def.resolve(resp);
						//user found
						alert("welcome user");
						console.log("User found!");
				})
				.error(
					function() {
						def.reject("error");
						console.log("error");
					});
			return def.promise;
		},
		signupUser:function(data){
			var def = $q.defer();
			$http.post(host + '/users/signup',data).success(
				function(resp){
						def.resolve(resp);
						//user found
						$state.go('app');
						console.log("Successlly Inserted");

				})
				.error(
					function(){
						def.reject("error");
					console.log("error");
				});
			return def.promise;
		},
		sendResetLink: function(email){
			var dataToSend = {email:email}

			$http.post(host + '/sendresetlink',dataToSend)
			.success(function(resp){
						//user found
								def.resolve(resp);
                        alert("Reset Link Has Been Sent To Your Mail ")
                        console.log("Successlly Sent a Mail!!");
                        $('#email').val("");
						$state.go('app');


				})
				.error(	function(){
					def.reject("error");
						console.log("error");
				});


		},
		resetPassword: function(email){
			var dataToSend = {email:window.atob(email),pass:$('#resetpassword').val()};
			$http.post(host + '/resetpsswd',dataToSend)
				.success(function(resp){
					def.resolve(resp);
						//user found
                        alert("Password Changed Succesfully!!");
                        window.location.reload();
						$state.go('app');

				})
				.error(function(){
					def.reject("error");
					console.log("error");
				});


		}
	}
}]);
