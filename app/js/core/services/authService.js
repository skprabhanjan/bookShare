app.factory('authUser', ['$http','$state','$q', function($http,$state, $q) {

	var host = "https://2b67c30a.ngrok.io"; // backend server praj
	//var host = "https://af2a2beb.ngrok.io"; // backend server td

	var token = ''; // token to send for Authorization of api calls

	//get the token required to make all the api calls
	$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
		function(resp){
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
						def.resolve(resp);
						//user found
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
								$('#email').val("");
								$state.go('app');
				})
				.error(	function(){
					def.reject("error");
						console.log("error");
				});
				return def.promise;
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
				return def.promise;
		},
		getallbooks:function(){
				var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;

					var req = {
						 method: 'GET',
						 url: host + '/books/getAll',
						 headers: {
						   'Authorization': 'Bearer ' + token
						 }
					 }
					$http(req).success(
						function(resp){
								def.resolve(resp);
								//user found
						})
						.error(
							function(){
								def.reject("error");
							console.log("error");
						});

				});
			//create an user acccount
		return def.promise;
		},
		getrecommendedbooks:function(email){
				var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;

					var req = {
						 method: 'GET',
						 url: host + '/users/getrecommendedbooks?email='+ email,
						 headers: {
							 'Authorization': 'Bearer ' + token
						 }
					 }
					$http(req).success(
						function(resp){
								def.resolve(resp);
								//user found
								console.log(resp);
						})
						.error(
							function(){
								def.reject("error");
							console.log("error");
						});

				});
			//create an user acccount
		return def.promise;
		},
		verifyaccount: function(phone){
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var def = $q.defer();
					var req = {
						 method: 'POST',
						 url: host + '/verifyaccount',
						 headers: {
						   'Authorization': 'Bearer ' + token
						 },
						 data: {phoneNum:phone}
					 }
					 $http(req)
		 				.success(function(resp){
		 					def.resolve(resp);
		 						//user found
		 						alert("Account Verified Succesfully!!");
		 						//window.location.reload();
		 						$state.go('app');

		 				})
		 				.error(function(){
		 					def.reject("error");
		 					console.log("error");
		 				});
				});
				return def.promise;
		},
		getUserDetails: function(phone) {
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'GET',
						 url: host + '/getuserdetails?phoneNum=' + phone,
						 headers: {
							 'Authorization': 'Bearer ' + token
						 },
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		},
		updateDetails: function(obj){
			console.log("Here");
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'POST',
						 url: host + '/users/update',
						 headers: {
							 'Authorization': 'Bearer ' + token
						 },
						 data: obj
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
							console.log("Sucess");
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		},
		Addbook: function(book){
			console.log("sending data");
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'POST',
						 url: host + '/books/addtolib',
						 headers: {
							 'Authorization': 'Bearer ' + token
						 },
						 data: book
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
							console.log("Sucess book added");
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		},
		deletebook: function(book){
			console.log("sending data");
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'POST',
						 url: host + '/users/library/delete',
						 headers: {
							 'Authorization': 'Bearer ' + token
						 },
						 data: book
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
							console.log("Sucess book deleted");
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		},
		sellbook: function(book){
			console.log("sending data");
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'POST',
						 url: host + '/users/books/sell',
						 headers: {
							 'Authorization': 'Bearer ' + token
						 },
						 data: book
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
							console.log("Sucess book deleted");
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		},
		getlibbooks: function(email){
			console.log("Fetching books");
			var def = $q.defer();
			$http.post(host + '/authenticate',{userName:window.btoa("bookShare"),password:window.btoa("nodejs")}).success(
				function(resp){
					token  = resp.token;
					var req = {
						 method: 'GET',
						 url: host + '/users/library?email='+email,
						 headers: {
							 'Authorization': 'Bearer ' + token
						 }
					 }
					$http(req)
						.success(function(resp){
							def.resolve(resp);
							console.log("Sucess");
								//user found
						})
						.error(function(){
							def.reject("error");
							console.log("error");
						});
				});
				return def.promise;
		}
	}
}]);
