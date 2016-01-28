angular.module('app.controllers', [])
  
.controller('loginEmEventuXCtrl', function($scope) {

})
   
.controller('dadosPessoaisCtrl', function($scope) {

})
   
.controller('interessesCtrl', function($scope) {

})
   
.controller('buscarEventuXCtrl', function($scope, $http) {
    $scope.buscafour = function(userloc, param){
            //vars da url
            var url = "https://api.foursquare.com/v2/venues/search";
            var cid = "?client_id=N2NQDXGZP4MIA31OAELTJVE4QHX4W2SFDMOLB1ONNQNJFYYM";
            var cse = "&client_secret=HKXD2BGFHMRLEV4BW55MMOLFSHXWWS25RSNW5SESXOJ1D5SY";
            var ver = "&v=20130815";
            var loc = "&near=";
            var userlocal = window.encodeURIComponent(userloc);
            var que = "&query=";
            var par = window.encodeURIComponent(param);
            //concatenacao da url       
            var url_get = url + cid + cse + ver + loc + userlocal + que + par;
            //execucao da url
    $http.get(url_get).then(function successCallback(response) {
                console.log(response);
                $scope.result = response.data.response.venues;
                //console.log(response.venues);
              }, function errorCallback(response) {
                alert(JSON.stringify(response));
            });
    
    };
})
   
.controller('resultadosCtrl', function($scope) {

})
   
.controller('detalheEventuXCtrl', function($scope) {

})
   
.controller('configuraçõEsCtrl', function($scope) {

})
 