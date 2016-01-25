angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('loginEmEventuX', {
      url: '/page1',
      templateUrl: 'templates/loginEmEventuX.html',
      controller: 'loginEmEventuXCtrl'
    })
        
      
    
      
        
    .state('dadosPessoais', {
      url: '/page2',
      templateUrl: 'templates/dadosPessoais.html',
      controller: 'dadosPessoaisCtrl'
    })
        
      
    
      
        
    .state('interesses', {
      url: '/page3',
      templateUrl: 'templates/interesses.html',
      controller: 'interessesCtrl'
    })
        
      
    
      
        
    .state('buscarEventuX', {
      url: '/page4',
      templateUrl: 'templates/buscarEventuX.html',
      controller: 'buscarEventuXCtrl'
    })
        
      
    
      
        
    .state('resultados', {
      url: '/page5',
      templateUrl: 'templates/resultados.html',
      controller: 'resultadosCtrl'
    })
        
      
    
      
        
    .state('detalheEventuX', {
      url: '/page6',
      templateUrl: 'templates/detalheEventuX.html',
      controller: 'detalheEventuXCtrl'
    })
        
      
    
      
        
    .state('configuraçõEs', {
      url: '/page7',
      templateUrl: 'templates/configuraçõEs.html',
      controller: 'configuraçõEsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});