
app.controller('DashCtrl', ['$rootScope','$scope','$state','$stateParams','authUser', function($rootScope,$scope,$state,$stateParams,authUser) {
  $scope.email = '';
  $scope.loading = false;
  $scope.loadingText = "Loading";
  $scope.operationCompleted = false;
  $scope.fetching = false;
  $scope.pageload = false;
  $scope.editRequested = false;
  $scope.buttonVal = "Update";
  $scope.updating = false;
  $scope.updatingAdd = false;
  $scope.interests = [];
  $scope.myLibBooks = [];
  $scope.mySoldBooks = [];
  $scope.booksToDelete = [];
  $scope.add = "Add Book";
  if(!Cookies.get(window.btoa('phoneNum'))){
    //user has not logged in


    $state.go('app');
  }
  else{
    $scope.userphone = window.atob(Cookies.get(window.btoa('phoneNum')));
    $scope.fetching = true;

  }
  $scope.isAdds = true ;
  $scope.isReq = false;
  $scope.isDash = false;
  $scope.isPostRequests = false ;
  $scope.isMyAdds = false ;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.profileDetails = {};
  $scope.profChecked = false;
  $scope.studentChecked = false;
  $scope.isSearch = true;
  $scope.isAddBook =false;
  $scope.isSelect = false;


  //console.log($state.params.data);
  $scope.onload = function(){
    $scope.pageload = true;
   $('#navbar').addClass('overlay');
    authUser.getUserDetails($scope.userphone).then(function(data){
      $scope.isDash = true;
      $scope.username = data.data.name;
      $scope.fetching = false;
      $scope.userData = data.data;
      $scope.email = data.data.email;
      console.log("sending e-mail");
      $scope.pageload = false;
      $('#navbar').removeClass('overlay');
      $('#navbar').addClass('navheader');
      authUser.getrecommendedbooks($scope.email)
        .then(function(data) {
          console.log("success");
        },
        function () {
          console.log('error');
        });
        authUser.getlibbooks($scope.userData.email).then(function(data){
              // for (var i = 0; i< data.data.length; i++){
              //     $scope.myLibBooks.push(data.data[i]);
              // }
              $scope.myLibBooks = data.data;
              console.log($scope.myLibBooks);
            },
            function() {
              console.log("error");
            });
            authUser.getsoldbooks($scope.userData.email).then(function(data){
                  $scope.mySoldBooks = data.data;
                  console.log($scope.mySoldBooks);
                },
                function() {
                  console.log("error");
                });
      if($scope.userData.isStudent==true){
        $scope.registeredAs = "Student";
        $scope.branch = $scope.userData.category.branch;
        $scope.college = $scope.userData.category.college;
        $scope.sem = $scope.userData.category.sem;
        $scope.isStudent = true;
      }
      else{
        $scope.registeredAs = "Proffesional";
        $scope.job = $scope.userData.category.job;
        $scope.isStudent = false;
      }
      $scope.interests = $scope.userData.interests.slice();
    },
    function() {
      console.log("error");
    });
    document.body.style.backgroundImage = "url('app/css/books5.jpg')";
    authUser.getallbooks()
      .then(function(data) {
      },
      function () {
        console.log('error');
      });

  };

$scope.goBack = function(){
  $scope.isDash = true;
  $scope.isPostRequests = false ;
  $scope.isMyAdds = false ;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
};

$scope.openNav = function(){
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

$scope.closeNav = function (){
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
};
$scope.onRecomAdds = function (){
  $scope.isReq = false;
  $scope.isAdds = true;
};
$scope.onRecomReq = function (){
  $scope.isAdds = false;
  $scope.isReq = true;
};
$scope.PostRequests = function (){
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.isPostRequests = true;
};
$scope.MyAdds = function (){
  $scope.isDash = false;
  $scope.isMyAdds = true;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.isPostRequests = false;
};
$scope.logOut = function(){
  Cookies.remove(window.btoa('phoneNum'));
  $state.go('app');
}
$scope.profile =function(){
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isPostRequests = false;
  $scope.isLibrary = false ;
  $scope.isProfile = true ;
  $scope.closeNav();
}
$scope.library = function() {
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isPostRequests = false;
  $scope.isProfile = false ;
  $scope.isLibrary = true ;
}
$scope.editDetails = function(){
  $scope.editRequested = true;
}
$scope.onChoiceSelect = function(value){
  if (value == "Student"){
    $scope.studentChecked = true;
    $scope.profChecked = false ;
    $('#updateButton').css({"padding-top":"35%"});
  } else if (value == "Professional"){
    $scope.profChecked = true ;
    $scope.studentChecked = false;
    $('#updateButton').css({"padding-top":"5%"});
  } else {
    console.log("Error in , What are you ....");
  }
}

$scope.onlib = function(){
  $scope.loading = true;
  $scope.myLibBooks.length = 0;
  authUser.getlibbooks($scope.userData.email).then(function(data){
        $scope.loading = false;
        // for (var i = 0; i< data.data.length; i++){
        //     $scope.myLibBooks.push(data.data[i]);
        // }
        $scope.myLibBooks = data.data;
        console.log($scope.myLibBooks);
      },
      function() {
        console.log("error");
      });
  }



$scope.updateDetails = function(){
  $scope.buttonVal = "Updating ";
  $scope.updating = true;
  if ($scope.studentChecked){
    var Details = {
      isStudent : true,
      college : $("#newcollege").val(),
      branch : $("#newbranch").val(),
      sem :$("#newsem").val()
    };
  } else if($scope.profChecked){
    var Details = {
      isStudent : false ,
      job : $("#newjob").val()
    }
  }
  $scope.email = $scope.userData.email;
  var obj = {
    name: $("#newname").val(),
    phoneNum: $("#newphone").val(),
    email: $scope.userData.email,
    place: $("#newplace").val(),
    category: Details,
    interests: $scope.interests
  }
  authUser.updateDetails(obj).then(function(data){
    if(!Cookies.get(window.btoa('phoneNum'))){
      //user has not logged in
      $state.go('app');
    }
    else{
      $scope.userphone = window.atob(Cookies.get(window.btoa('phoneNum')));
      $scope.fetching = true;
      authUser.getUserDetails($scope.userphone).then(function(data){
        $scope.username = data.data.name;
        $scope.fetching = false;
        $scope.userData = data.data;
        if($scope.userData.isStudent==true){
          $scope.registeredAs = "Student";
          $scope.branch = $scope.userData.category.branch;
          $scope.college = $scope.userData.category.college;
          $scope.sem = $scope.userData.category.sem;
          $scope.isStudent = true;
        }
        else{
          $scope.registeredAs = "Proffesional";
          $scope.job = $scope.userData.category.job;
          $scope.isStudent = false;
        }
        $scope.editRequested = false;
        $scope.studentChecked = false;
        $scope.profChecked = false;
        $scope.buttonVal = "Update ";
        $scope.updating = false;
      },
      function() {
        console.log("error");
      });
    }
  },
  function(){

  });
}
$scope.cancelEdit = function() {
  $scope.editRequested = false;
  $scope.studentChecked = false;
  $scope.profChecked = false;
}
$scope.removeInterest = function(interest){
  $scope.interests.splice($scope.interests.indexOf(interest),1);
}
$scope.addInterest = function(){
  if($('#newinterest').val()!='')
  $scope.interests.push($('#newinterest').val());
}

$scope.onDelete = function(book){
  var pos = $scope.booksToDelete.filter(function(o){return o == book;} );
  if (pos[0] == undefined){
    $scope.booksToDelete.push(book);
  }
  else {
    $scope.booksToDelete  = $scope.booksToDelete.filter(function(o){ return o.id != book.id; });
  }
  console.log($scope.booksToDelete);
}

$scope.onDeleteSingle = function(book){
  $('#libHeader').removeClass('lib-header');
  $('#libHeader').addClass('lib-header-load');
  $scope.pageload = true;
  $scope.loadingText = "Updating";
  $('#navbar').addClass('overlay');
  var bookdata = [];
  bookdata.push(book);
  var data = {
    email : $scope.userData.email,
    books : bookdata
  }
  authUser.deletebook(data).then(function(data){
    $scope.pageload = false;
    $('#navbar').removeClass('overlay');
    $('#navbar').addClass('navheader');
    console.log("book deleted");
    $scope.onlib();
  },
  function() {
    console.log("error");
  });
}

$scope.onDeleteSubmit = function (){
  if($scope.booksToDelete){
    var data = {
      email : $scope.userData.email,
      books : $scope.booksToDelete
    }
    authUser.deletebook(data).then(function(data){
      console.log("book deleted");
      $scope.onlib();
    },
    function() {
      console.log("error");
    });
  }
  $scope.booksToDelete = [];
}

$scope.selectBooks = function(book){

  if($scope.isSelect == false){
    $scope.isSelect = true ;
  }
  else {
    $scope.isSelect = false;
  }
}

$scope.onCancel = function(){
  $scope.isSearch=true;
  $scope.isAddBook =false;
  $scope.add = "Add Book";
  $scope.updatingAdd = false;
}

$scope.onSellBook = function(book){
  $scope.pageload = true;
  $scope.loadingText = "Updating";
  console.log(book);
  $('#navbar').addClass('overlay');
  if(book){
    var dataToSend = {
      email : $scope.userData.email,
      isbn : book.bookInfo.id,
      title : book.bookInfo.title
    }
    console.log(dataToSend);
    authUser.sellbook(dataToSend).then(function(data){
      $scope.pageload = false;
      $('#navbar').removeClass('overlay');
      $('#navbar').addClass('navheader');
      $scope.onlib();
      $scope.myAdds();
    },
    function() {
      console.log("error");
    });
  }
  $scope.booksToDelete = [];
}

$scope.myAdds = function(){
  authUser.getsoldbooks($scope.userData.email).then(function(data){
        $scope.mySoldBooks = data.data;
        console.log($scope.mySoldBooks);
      },
      function() {
        console.log("error");
      });
}

$scope.onAddBook = function(){
  if ($scope.add == "Add Book"){
    $scope.isSearch=false;
    $scope.isAddBook =true;
    $scope.add = "ADD";
  } else if($scope.add == "ADD"){
    $scope.add = "Adding ";
    $scope.updatingAdd = true;
    var bookData = {
      'email' : $scope.userData.email,
      'title' : $('#booktitle').val(),
      'author' : $('#bookauthor').val(),
      'genre' : $('#bookgenre').val(),
      'isbn' : $('#bookisbn').val(),
    }
    authUser.Addbook(bookData).then(function(data){

      $scope.onlib();

      //$scope.onlib();
      $scope.isSearch=true;
      $scope.isAddBook =false;
      $scope.add = "Add Book";
      $scope.updatingAdd = false;
    },
    function() {
      console.log("error");
    });

  }

}

$scope.searchBooks = function(item){
var val = $('#searchValue').val().toLowerCase() || $('select[name=selector]').val();
  return (item.bookInfo.title).toLowerCase().indexOf(val) !=-1 ||
         (item.bookInfo.genre).toLowerCase().indexOf(val) !=-1 ||
         (item.bookInfo.author).toLowerCase().indexOf(val) !=-1 ||
         (item.bookInfo.id).toLowerCase().indexOf(val) !=-1;
 }

}]);
