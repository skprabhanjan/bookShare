app.factory('authUser', ['$http','$state','$q', function($http,$state, $q) {

	var host = "https://44926ab2.ngrok.io"; // backend server
	var token = ''; // token to send for Authorization of api calls

	//get the token required to make all the api calls
	$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
		function(resp){
			console.log(resp.token);
			token  = resp.token;
		});

	return {
		authenticateUser:function(email,password){
			// function to authenticate user by checking in the db , making an api call to /users/signin
			var dataToSend = {email:email ,pass: password};
			var def = $q.defer();
			var req = {
				 method: 'POST',
				 url: host + '/users/signin',
				 headers: {
				   'Authorization': 'Bearer ' + token
				 },
				 data: dataToSend
			 }
			$http(req).success(
				function(resp){
					  console.log(resp);
						def.resolve(resp);
						//user found
						console.log("Req Done!");
				})
				.error(
					function() {
						def.reject("error");
						console.log("error");
					});
			return def.promise;
		},
		signupUser:function(data){
			//create an user acccount
			var def = $q.defer();
			var req = {
				 method: 'POST',
				 url: host + '/users/signup',
				 headers: {
				   'Authorization': 'Bearer ' + token
				 },
				 data: data
			 }
			$http(req).success(
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
			//send a reset link mail to the requested email
			var dataToSend = {email:email}
			var def = $q.defer();
			var req = {
				 method: 'POST',
				 url: host + '/sendresetlink',
				 headers: {
				   'Authorization': 'Bearer ' + token
				 },
				 data: dataToSend
			 };
			$http(req)
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
			//reset the password when the reset link was clicked in the user's email
			var dataToSend = {email:window.atob(email),pass:$('#resetpassword').val()};
			var def = $q.defer();
			var req = {
				 method: 'POST',
				 url: host + '/resetpsswd',
				 headers: {
				   'Authorization': 'Bearer ' + token
				 },
				 data: dataToSend
			 }
			$http(req)
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