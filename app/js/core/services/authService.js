app.factory('authUser', ['$http', function($http) {
	return {
		authenticateUser:function(email,password){
			// function to authenticate user by checking in the db , making an api call to /users/login
			var dataToSend = {email:email ,pass: password};
			$http.post('https://754d9269.ngrok.io/users/signin',dataToSend).then(
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
			$http.post('https://754d9269.ngrok.io/users/signup',data).then(
				function(resp){
					if(resp.data.status == "Success"){
						//user found
						window.location = '/';
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
			$http.post('https://fc06ba57.ngrok.io/sendresetlink',dataToSend).then(
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
			$http.post('https://754d9269.ngrok.io/resetpsswd',dataToSend).then(
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
