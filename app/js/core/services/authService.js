app.factory('authUser', ['$http','$state', function($http,$state) {
	var host = "https://22588a0e.ngrok.io";
	return {
		authenticateUser:function(email,password){
			// function to authenticate user by checking in the db , making an api call to /users/login
			var dataToSend = {email:email ,pass: password};
			$http.post(host + '/users/signin',dataToSend).then(
				function(resp){
					if(resp.data.status == "Success"){
						//user found
						console.log("User found!");
					}
					else if (resp.data.status == "failed") {
						//user not found
						console.log("User Not found!");
					}
				},
				function(){
					console.log("error");
				}
			);
		},
		signupUser:function(data){
			$http.post(host + '/users/signup',data).then(
				function(resp){
					if(resp.data.status == "Success"){
						//user found
						$state.go('app');
						console.log("Successlly Inserted");
					}
				},
				function(){
					console.log("error");
				}
			);
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
