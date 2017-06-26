
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
  $scope.myreqBooks = [];
  $scope.myRentBooks = [];
  $scope.recBooks = [];
  $scope.booksToDelete = [];
  $scope.allBooks = [];
  $scope.addedBy = [];
  $scope.advertisedata = {};
  $scope.globalSearch = '';
  $scope.add = "Add Book";
  $scope.socket = null;
  $scope.myMessage = "";
  $scope.msgcontent =[];

  $scope.myCategories = [];
  $scope.categories =
  [
    {
      category :"Science and Technology",
      id:1
    },
    {
      category :"Fiction",
      id:2
    },
    {
      category :"Horror",
      id:3
    },
    {
      category :	"Drama",
      id:4
    },
    {
      category :"Action and adventure",
      id:5
    },
    {
      category :"Romance",
      id:6
    },
    {
      category :"Self help",
      id:1
    },
    {
      category :"Health",
      id:7
    },
    {
      category :"Travel",
      id:8
    },
    {
      category :"Childern's",
      id:9
    },
    {
      category :"Religion, Spirituality & New Age",
      id:10
    },
    {
      category :	"Science",
      id:11
    },
    {
      category :"Math",
      id:12
    },
    {
      category :"History",
      id:13
    },
    {
      category :"Biographies and Autobiographies",
      id:14
    },
    {
      category :"Comics",
      id:15
    }
  ];
  $scope.onCategorySelect = function (categoryValue,id) {
   $('#'+id).css('background-color','#64DD17');
    
    // $scope.index = $scope.myCategories.indexOf(categoryValue);
    // if ( $scope.index > -1){
    //   $scope.myCategories.splice($scope.index,1);
    //   console.log($scope.myCategories);
    //   if($scope.myCategories.length == 0)
    //     $scope.recBooks = $scope.copyrecBooks;
    //   else{
    //       authUser.getBooksByCategory($scope.myCategories).then(function(data){
    //         console.log(data.data);
    //         $scope.recBooks = data.data;
    //       },
    //       function(){
    //         console.log("error");
    //       })
    //   }
    // }
    // else {
    //   if($scope.myCategories.length == 0)
    //     $scope.copyrecBooks = $scope.recBooks;
    //   $scope.myCategories.push(categoryValue);
    //   console.log($scope.myCategories);
    //   authUser.getBooksByCategory($scope.myCategories).then(function(data){
    //     console.log(data.data);
    //     $scope.recBooks = data.data;
    //   },
    //   function(){
    //     console.log("error");
    //   })
    // }
  }

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
  $scope.isSell = false ;
  $scope.isRent = true;
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
  $scope.showallBooks = false;
  $scope.isReqbook = false;
  // $scope.socket = io.connect('http://16a651bb.ngrok.io');
  // $scope.socket.on('notif' , function(msg){
  //     // if(msg.id != $('#notiId').val()){
  //     //   if(msg.data == 2)
  //     //     $('#notifBar').css("background-color", "green");
  //     //   else{
  //     //     $('#notifBar').css("background-color", "red");
  //     //   }
  //     // }
  //   });
  //   flag = false;
  //   $scope.socket.on('chat message', function(msg){
  //     if(flag==false){
  //       var message = "<li>" + msg + "</li>"; 
  //       $("#messageList").append(message);
  //       $("#messageValue").val("");
  //       flag = true;
  //     }
  //   });
  //   $scope.checkMessage = function(e){
  //   if (!e) e = window.event;
  //   var keyCode = e.keyCode || e.which;
  //   if (keyCode == '13'){
  //     //  var message = "<li>" + $('#messageValue').val() + "</li>"; 
  //     //  $("#messageList").append(message);
  //      flag = false;
  //      $scope.socket.emit('chat message', $('#messageValue').val());  
  //   }
  // }

  //console.log($state.params.data);
  $scope.onload = function(){


    $scope.pageload = true;
   $('#navbar').addClass('overlay');
    authUser.getUserDetails($scope.userphone).then(function(data){
      $scope.isDash = true;
      $scope.username = data.data.name;
      $scope.userData = data.data;
      $scope.email = data.data.email;
      authUser.getlibbooks($scope.userData.email).then(function(data){
            $scope.myLibBooks = data.data;
          },
          function() {
            console.log("error");
          });
          authUser.getsoldbooks($scope.userData.email).then(function(data){
                $scope.mySoldBooks = data.data;
              },
              function() {
                console.log("error");
              });
              authUser.getreqbooks().then(function(data){
                    $scope.myreqBooks = data.data;
                    console.log($scope.myreqBooks);
                  },
                  function() {
                    console.log("error");
              });
    authUser.getrentbooks($scope.userData.email).then(function(data){
        $scope.myRentBooks = data.data;
      },
      function() {
        console.log("error");
      });
      $('#navbar').removeClass('overlay');
      $('#navbar').addClass('navheader');
      authUser.getallbooks()
        .then(function(data) {
          $scope.allBooks = data.data;
          $scope.fetching = false;

        },
        function () {
          console.log('error');
        });
        authUser.getrecommendedbooks($scope.userData.interests).then(function(data){
          $scope.isAdds = true;
          $scope.recBooks = data.data;
        },
        function () {
          console.log('error');
        });
        $scope.pageload = false;
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

  };

$scope.goBack = function(){
  $scope.isDash = true;
  $scope.isPostRequests = false ;
  $scope.isMyAdds = false ;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.showallBooks = false;
};

$scope.openNav = function(){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.top = "22%";
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
$scope.onRentTab = function (){
  $scope.isSell = false ;
  $scope.isRent = true;
};
$scope.onSellTab = function (){
  $scope.isSell = true ;
  $scope.isRent = false;
};
$scope.PostRequests = function (){
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.isPostRequests = true;
  $scope.showallBooks = false;
  $scope.isAdds = false;
};
$scope.MyAdds = function (){
  $scope.isDash = false;
  $scope.isMyAdds = true;
  $scope.isProfile = false ;
  $scope.isLibrary = false ;
  $scope.isPostRequests = false;
  $scope.showallBooks = false;
  $scope.isAdds = false;
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
  $scope.showallBooks = false;
  $scope.closeNav();
}
$scope.library = function() {
  $scope.isDash = false;
  $scope.isMyAdds = false;
  $scope.isPostRequests = false;
  $scope.isProfile = false ;
  $scope.isLibrary = true ;
  $scope.showallBooks = false;
  $scope.isAdds = false;
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
        authUser.getallbooks()
          .then(function(data) {
            $scope.allBooks = data.data;
            $scope.fetching = false;
          },
          function () {
            console.log('error');
          });
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

$scope.onAdvertise = function(book){
  alert("hey");
  $scope.advertisedata = {
    title : book.title,
    author : book.author,
    genre : book.genre
  }
  console.log($scope.advertisedata);
}

$scope.onDelete = function(book){
  var pos = $scope.booksToDelete.filter(function(o){return o == book;} );
  if (pos[0] == undefined){
    $scope.booksToDelete.push(book);
  }
  else {
    $scope.booksToDelete  = $scope.booksToDelete.filter(function(o){ return o.id != book.id; });
  }
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
      $scope.isSelect = false;
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
  $('#navbar').addClass('overlay');
  if(book){
    var dataToSend = {
      email : $scope.userData.email,
      book : book.bookInfo
    }
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

$scope.onRentBook = function(book){
  $scope.pageload = true;
  $scope.loadingText = "Updating";
  $('#navbar').addClass('overlay');
  if(book){
    var dataToSend = {
      email : $scope.userData.email,
      book: book.bookInfo
    }
    authUser.rentbook(dataToSend).then(function(data){
      $scope.pageload = false;
      $('#navbar').removeClass('overlay');
      $('#navbar').addClass('navheader');
      $scope.onlib();
      $scope.myrentedbook();
    },
    function() {
      console.log("error");
    });
  }
}

$scope.myrentedbook = function(){
  authUser.getrentbooks($scope.userData.email).then(function(data){
        $scope.myRentBooks = data.data;
      },
      function() {
        console.log("error");
      });
}
$scope.myAdds = function(){
  authUser.getsoldbooks($scope.userData.email).then(function(data){
        $scope.mySoldBooks = data.data;
      },
      function() {
        console.log("error");
      });
}

$scope.onReqbook = function(){
  var book = {
    'email' : $scope.userData.email,
    'title' : $('#reqtitle').val(),
    'author' : $('#reqauthor').val(),
    'genre' : $('#reqgenre').val(),
  }
  authUser.requestbook(book).then(function(data){
    alert('Book is sent for a request')
    authUser.getreqbooks().then(function(data){
          $scope.myreqBooks = data.data;
          console.log($scope.myreqBooks);
        },
        function() {
          console.log("error");
    });
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
      $('#addModal').modal('toggle');
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

 $scope.showSearchResults = function(){
   if($scope.globalSearch == ''){
     $scope.isDash = true;
     $scope.isMyAdds = false;
     $scope.isProfile = false;
     $scope.isLibrary = false;
     $scope.isPostRequests = false;
     $scope.showallBooks = false;
     $scope.isAdds = true;
   }
   else{
     $scope.isDash = false;
     $scope.isAdds = false;
     $scope.isMyAdds = false;
     $scope.isProfile = false;
     $scope.isLibrary = false;
     $scope.isPostRequests = false;
     $scope.showallBooks = true;
   }
 }

 $scope.filterAllBooks = function(item){
   var statusOfBook="";
   if(item.status=="sell"){
     statusOfBook = "panel panel-danger";
   }
   else if(item.status=="rent"){
     statusOfBook = "panel panel-primary";
   }
   $('#'+(item._id)).addClass(statusOfBook);
 var val = $scope.globalSearch.toLowerCase();
   return (item.title).toLowerCase().indexOf(val) !=-1 ||
          (item.genre).toLowerCase().indexOf(val) !=-1 ||
          (item.author).toLowerCase().indexOf(val) !=-1 ||
          (item._id).toLowerCase().indexOf(val) !=-1 ||
          (item.status).toLowerCase().indexOf(val) !=-1;
  }

  $scope.showBookDetails = function(bookData){
    $scope.addedBy = bookData.addedBy;
  }

   $scope.buyBook = function (userName) {
    //alert("Requested to buy the book from " + userName);
    console.log("Requested a Chat Session btwn " + $scope.userData.name + "(Buyer) and " + userName + "(Seller)");
    $('#myModal').modal('toggle');
    // $scope.toChat = true;
  }
  $scope.closeChat = function(){
    $scope.toChat = false;
  }
  $scope.sendNotif = function (){
    var message = {};
    message.data = "hi";
    message.id = $('#notiId').val();;
    $scope.socket.emit('notif' , message);
  }
}]);
