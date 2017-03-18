app.factory('authUser', ['$http','$state','$q', function($http,$state, $q) {
	var host = "https://22588a0e.ngrok.io";
	return {
		authenticateUser:function(email,password){
			// function to authenticate user by checking in the db , making an api call to /users/login
			var dataToSend = {email:email ,pass: password};
			var def = $q.defer();
			$http.post(host + '/users/signin',dataToSend).success(
				function(resp){

						def.resolve(resp);
						//user found
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
			$http.post(host + '/users/signup',data).success(
				function(resp){
						def.resolve();
						//user found
						$state.go('app');
						console.log("Successlly Inserted");

				})
				.error(
					function(){
						def.reject("error");
					console.log("error");
				});
		},
		sendResetLink: function(email){
			var dataToSend = {email:email}
			$http.post(host + '/sendresetlink',dataToSend).then(
				function(resp){
					if(resp.data.status == "Success"){
						//user found
						window.location = '/';
						console.log("Successlly Sent a Mail!!");
					}
				},
				function(){
					console.log("error");
				}
			);
		},
		resetPassword: function(email){
			var dataToSend = {email:email}
			$http.post(host + '/resetpsswd',dataToSend).then(
				function(resp){
					if(resp.data.status == "Success"){
						//user found
						window.location = '/';
						console.log("Successlly Sent a Mail!!");
					}
				},
				function(){
					console.log("error");
				}
			);
		}
	}
}]);
