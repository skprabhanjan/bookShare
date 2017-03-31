
app.controller('DashCtrl', ['$scope','$state','$stateParams','authUser', function($scope,$state,$stateParams,authUser) {
  $scope.datavals = [
    {
      "4331": 564,
      "Csvy": "Mbec",
      "Rmbyagepxr": "Hyujo",
      "L": "Yeofq",
      "Yyfugxmhndqiklrcvewbtsaop": "Jqojtrvsxeulw",
      "Iqjbftguoirvkdpnxmsceawhy": "Gvxbkya"
    },
    {
      "4331": 1396,
      "Csvy": "Vhibfo",
      "Rmbyagepxr": "Mhne",
      "L": "Jc",
      "Yyfugxmhndqiklrcvewbtsaop": "Pubxiyvwnaefgrspdmhljqk",
      "Iqjbftguoirvkdpnxmsceawhy": "Wutlsdjopwxgnqvfmekha"
    },
    {
      "4331": 1808,
      "Csvy": "Tkveydbrl",
      "Rmbyagepxr": "Xifxusy",
      "L": "Gflq",
      "Yyfugxmhndqiklrcvewbtsaop": "Cjqdrwmnsfpvuea",
      "Iqjbftguoirvkdpnxmsceawhy": "Bsnkweamd"
    },
    {
      "4331": 3960,
      "Csvy": "A",
      "Rmbyagepxr": "Saqcdmjnx",
      "L": "Wf",
      "Yyfugxmhndqiklrcvewbtsaop": "Pbjlrqwpuocnyxahgkefmtsdi",
      "Iqjbftguoirvkdpnxmsceawhy": "Jlxubsjrptweqivdnmgcfoykh"
    },
    {
      "4331": 2675,
      "Csvy": "Niov",
      "Rmbyagepxr": "Wdor",
      "L": "Ce",
      "Yyfugxmhndqiklrcvewbtsaop": "Nwbjopnu",
      "Iqjbftguoirvkdpnxmsceawhy": "Djirdpltfnsoxy"
    },
    {
      "4331": 3841,
      "Csvy": "D",
      "Rmbyagepxr": "Jxguensoy",
      "L": "War",
      "Yyfugxmhndqiklrcvewbtsaop": "Ytlrgxvodmcusknbaepqjhywf",
      "Iqjbftguoirvkdpnxmsceawhy": "E"
    },
    {
      "4331": 4943,
      "Csvy": "Oqj",
      "Rmbyagepxr": "Clukbxev",
      "L": "Tjmnf",
      "Yyfugxmhndqiklrcvewbtsaop": "Jnqvwp",
      "Iqjbftguoirvkdpnxmsceawhy": "Xgqi"
    },
    {
      "4331": 1858,
      "Csvy": "Eipxcmv",
      "Rmbyagepxr": "J",
      "L": "Pnapx",
      "Yyfugxmhndqiklrcvewbtsaop": "Ujtkchfqywxsilerbmu",
      "Iqjbftguoirvkdpnxmsceawhy": "Wtklrpcmenjiyawdbsofgxuvh"
    },
    {
      "4331": 4985,
      "Csvy": "Np",
      "Rmbyagepxr": "Ioetaukhcw",
      "L": "Ix",
      "Yyfugxmhndqiklrcvewbtsaop": "Qkvaoxyrhstminpbdge",
      "Iqjbftguoirvkdpnxmsceawhy": "Hmcabyojslqvenpxkit"
    },
    {
      "4331": 2782,
      "Csvy": "Pgvxklcp",
      "Rmbyagepxr": "Clchjr",
      "L": "Naqvn",
      "Yyfugxmhndqiklrcvewbtsaop": "Qjoxeprfcdwgabmt",
      "Iqjbftguoirvkdpnxmsceawhy": "Cuqnrecjykxflhp"
    },
    {
      "4331": 934,
      "Csvy": "Wfkgji",
      "Rmbyagepxr": "Jvgh",
      "L": "Ngu",
      "Yyfugxmhndqiklrcvewbtsaop": "Yuko",
      "Iqjbftguoirvkdpnxmsceawhy": "Bhqmkdyopriwjnvuabfcs"
    },
    {
      "4331": 1610,
      "Csvy": "Mqhanro",
      "Rmbyagepxr": "Oxsybrmvaj",
      "L": "Gdqub",
      "Yyfugxmhndqiklrcvewbtsaop": "Vcoidjxfqpyuatmr",
      "Iqjbftguoirvkdpnxmsceawhy": "Afgnskoa"
    },
    {
      "4331": 2768,
      "Csvy": "Okperudqlb",
      "Rmbyagepxr": "Cypiromfea",
      "L": "Oexb",
      "Yyfugxmhndqiklrcvewbtsaop": "Enkwlvimcrqfbosdjpeh",
      "Iqjbftguoirvkdpnxmsceawhy": "Mwboxvysarjtc"
    },
    {
      "4331": 661,
      "Csvy": "C",
      "Rmbyagepxr": "Jibun",
      "L": "Fujbn",
      "Yyfugxmhndqiklrcvewbtsaop": "Erdqimcuksaejwovhyplbtgnf",
      "Iqjbftguoirvkdpnxmsceawhy": "Uglkqisjxvtmrpdn"
    },
    {
      "4331": 1046,
      "Csvy": "Nq",
      "Rmbyagepxr": "Qbh",
      "L": "Tuamf",
      "Yyfugxmhndqiklrcvewbtsaop": "Pnmhijoksyvxlaqfwcegrbudt",
      "Iqjbftguoirvkdpnxmsceawhy": "Dcorfpi"
    },
    {
      "4331": 599,
      "Csvy": "Bkc",
      "Rmbyagepxr": "Shkvoxp",
      "L": "Upi",
      "Yyfugxmhndqiklrcvewbtsaop": "Sfisncugaqxtedrp",
      "Iqjbftguoirvkdpnxmsceawhy": "Vjixwveasd"
    },
    {
      "4331": 1077,
      "Csvy": "Piah",
      "Rmbyagepxr": "Iwdphy",
      "L": "K",
      "Yyfugxmhndqiklrcvewbtsaop": "Bujpwxkqc",
      "Iqjbftguoirvkdpnxmsceawhy": "Fvagpdnmtbjocwkuehiyrsf"
    },
    {
      "4331": 1043,
      "Csvy": "Klyoewt",
      "Rmbyagepxr": "Yykrxapdjo",
      "L": "Kyk",
      "Yyfugxmhndqiklrcvewbtsaop": "Fcafunoekxpyibmvdstwg",
      "Iqjbftguoirvkdpnxmsceawhy": "Uocemywuxlvanjs"
    },
    {
      "4331": 1705,
      "Csvy": "Nstywlxgc",
      "Rmbyagepxr": "Ooaj",
      "L": "Kbq",
      "Yyfugxmhndqiklrcvewbtsaop": "Mnwlphfcodjbk",
      "Iqjbftguoirvkdpnxmsceawhy": "Oibktycurawdfxnsjehmgqlvp"
    },
    {
      "4331": 590,
      "Csvy": "Erdgv",
      "Rmbyagepxr": "Ashmbgxfld",
      "L": "R",
      "Yyfugxmhndqiklrcvewbtsaop": "Qfxuniw",
      "Iqjbftguoirvkdpnxmsceawhy": "Kqlnsywrpgijkfadxohtbcuev"
    },
    {
      "4331": 598,
      "Csvy": "N",
      "Rmbyagepxr": "Igxiquplr",
      "L": "Wdnip",
      "Yyfugxmhndqiklrcvewbtsaop": "Wwipahgvcmob",
      "Iqjbftguoirvkdpnxmsceawhy": "Eeomctfsjxuqkhprwbglyndai"
    },
    {
      "4331": 3454,
      "Csvy": "Hklbgyieh",
      "Rmbyagepxr": "Yjuv",
      "L": "Kc",
      "Yyfugxmhndqiklrcvewbtsaop": "Ysjxulgidrhfcqymv",
      "Iqjbftguoirvkdpnxmsceawhy": "Kxptdcwnlaqmfibjy"
    },
    {
      "4331": 267,
      "Csvy": "Terfbps",
      "Rmbyagepxr": "Qdj",
      "L": "Fqef",
      "Yyfugxmhndqiklrcvewbtsaop": "Lcwyeprmxthqjnbsaokdifl",
      "Iqjbftguoirvkdpnxmsceawhy": "Roaylexs"
    },
    {
      "4331": 1370,
      "Csvy": "Q",
      "Rmbyagepxr": "Wxfncatl",
      "L": "Jisel",
      "Yyfugxmhndqiklrcvewbtsaop": "Wdftxbgojeywpvanlrkiqumcs",
      "Iqjbftguoirvkdpnxmsceawhy": "Tc"
    },
    {
      "4331": 3203,
      "Csvy": "D",
      "Rmbyagepxr": "Nqge",
      "L": "Ns",
      "Yyfugxmhndqiklrcvewbtsaop": "Bcmq",
      "Iqjbftguoirvkdpnxmsceawhy": "Bblrspyaducqgvjmfhwik"
    },
    {
      "4331": 2301,
      "Csvy": "Ud",
      "Rmbyagepxr": "Elsfn",
      "L": "Dmgu",
      "Yyfugxmhndqiklrcvewbtsaop": "Lyfbikvjseltonqphx",
      "Iqjbftguoirvkdpnxmsceawhy": "Slsiqgxm"
    },
    {
      "4331": 3716,
      "Csvy": "Cdurcli",
      "Rmbyagepxr": "Taltgcsm",
      "L": "Dwr",
      "Yyfugxmhndqiklrcvewbtsaop": "Ddyotqr",
      "Iqjbftguoirvkdpnxmsceawhy": "Qmlqau"
    },
    {
      "4331": 3775,
      "Csvy": "Kpknflmdj",
      "Rmbyagepxr": "P",
      "L": "Tl",
      "Yyfugxmhndqiklrcvewbtsaop": "Et",
      "Iqjbftguoirvkdpnxmsceawhy": "Usileqwocrtmkxpudafyngbjv"
    },
    {
      "4331": 3965,
      "Csvy": "Oxrptgaj",
      "Rmbyagepxr": "Fqhnlg",
      "L": "Wji",
      "Yyfugxmhndqiklrcvewbtsaop": "Mnuhmabtfsyoqegrviwxkpdjc",
      "Iqjbftguoirvkdpnxmsceawhy": "Glstvfwkbhinmyg"
    },
    {
      "4331": 4233,
      "Csvy": "Vtepjg",
      "Rmbyagepxr": "Mxwg",
      "L": "Scj",
      "Yyfugxmhndqiklrcvewbtsaop": "Ppynrdkgfwtemqciuxajhvlob",
      "Iqjbftguoirvkdpnxmsceawhy": "Chwtigsrc"
    },
    {
      "4331": 2154,
      "Csvy": "Fidvexb",
      "Rmbyagepxr": "Efk",
      "L": "Kps",
      "Yyfugxmhndqiklrcvewbtsaop": "Pimcakbujwytenhqfrdogp",
      "Iqjbftguoirvkdpnxmsceawhy": "Gcishqgludxrwytavmjenf"
    },
    {
      "4331": 777,
      "Csvy": "Fjildratvb",
      "Rmbyagepxr": "Fuwx",
      "L": "Srak",
      "Yyfugxmhndqiklrcvewbtsaop": "Ppeamqnclrw",
      "Iqjbftguoirvkdpnxmsceawhy": "Pnkqofbluyscphimejavrgwdx"
    },
    {
      "4331": 1990,
      "Csvy": "Wgwsl",
      "Rmbyagepxr": "Emqjlybr",
      "L": "G",
      "Yyfugxmhndqiklrcvewbtsaop": "Bolx",
      "Iqjbftguoirvkdpnxmsceawhy": "Bwxhoyajlmviksbnecpugfrtd"
    },
    {
      "4331": 3337,
      "Csvy": "Cuk",
      "Rmbyagepxr": "Dgdowxuri",
      "L": "Q",
      "Yyfugxmhndqiklrcvewbtsaop": "Yegjnfm",
      "Iqjbftguoirvkdpnxmsceawhy": "Thfeknxiaspjbwocl"
    },
    {
      "4331": 1988,
      "Csvy": "Rbcimtqpra",
      "Rmbyagepxr": "Khkmqvl",
      "L": "Nrsce",
      "Yyfugxmhndqiklrcvewbtsaop": "Jfiw",
      "Iqjbftguoirvkdpnxmsceawhy": "Ysfhlairkdxtvucqjo"
    },
    {
      "4331": 3119,
      "Csvy": "Ywmtsex",
      "Rmbyagepxr": "Djkvfw",
      "L": "Fck",
      "Yyfugxmhndqiklrcvewbtsaop": "Tbadxlmchivyjugrt",
      "Iqjbftguoirvkdpnxmsceawhy": "Elvxjyupdtqirfc"
    },
    {
      "4331": 477,
      "Csvy": "Mrq",
      "Rmbyagepxr": "Cuhtokmb",
      "L": "Kash",
      "Yyfugxmhndqiklrcvewbtsaop": "Gfjqtuiwxvcma",
      "Iqjbftguoirvkdpnxmsceawhy": "Wdpxcug"
    }

  ];
  $scope.fetching = false;
  $scope.editRequested = false;
  $scope.buttonVal = "Update";
  $scope.updating = false;
  $scope.interests = [];
  $scope.add = "Add Book";
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
      $scope.interests = $scope.userData.interests.slice();
    },
    function() {
      console.log("error");
    });
  }
  $scope.isAdds = true ;
  $scope.isReq = false;
  $scope.isDash = false;
  $scope.isPostRequests = false ;
  $scope.isMyAdds = false ;
  $scope.isProfile = false ;
  $scope.isLibrary = true ;
  $scope.profileDetails = {};
  $scope.profChecked = false;
  $scope.studentChecked = false;
  $scope.isSearch = true;
  $scope.isAddBook =false;


  //console.log($state.params.data);
  $scope.onload = function(){
    document.body.style.backgroundImage = "url('app/css/books5.jpg')";
    authUser.getallbooks()
      .then(function(data) {
        console.log(data.data[55]);
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
  $scope.interests.push($('#newinterest').val());
}

$scope.onAddBook = function(){
  console.log("enter 1");
  if ($scope.add == "Add Book"){
    console.log("enter 2");
    $scope.isSearch=false;
    $scope.isAddBook =true;
    $scope.add = "ADD";
  }
  if($scope.add == "ADD"){
    var bookData = {
      'email' : $('#bookemail').val(),
      'title' : $('#booktitle').val(),
      'author' : $('#bookauthor').val(),
      'genre' : $('#bookgenre').val(),
      'isbn' : $('#bookisbn').val(),
    }
    authUser.Addbook(bookData).then(function(data){
      console.log("Success");
    },
    function() {
      console.log("error");
    });
  }

}

}]);
