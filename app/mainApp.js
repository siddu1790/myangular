angular.module('homeModule',[]);
angular.module('eventModule',[]);

angular.module('mainApp', ['homeModule', 'eventModule', 'ngRoute', 'ui.router'])
.config(['$urlRouterProvider', '$stateProvider',
  function ($urlRouterProvider, $stateProvider) {
      $stateProvider
         .state("contact", {
             url:"/contact",
            templateUrl: 'contact.html',
           // controller: 'ContactCtrl'
        }).
        state("events", {
            url:"/events",
            templateUrl: 'events.html',
            //controller: 'EventCtrlOne'
        }).
          state("home", {
              url: "/home",
              templateUrl:'home.html',
          })

         $urlRouterProvider.when('', '/home');
       /* state('/', {
                templateUrl: './home.html',
      controller: 'HomeCtrlOne'
        }).
        otherwise({
            redirectTo: '/'
        });*/
     // $locationProvider.htmlMode({enabled:true})
  }])
.run([function () {
	console.log("run");
}])
.controller('ContactCtrl', ['$scope', function ($scope) {

}])
.controller('HomeCtrlOne', ['$scope', function ($scope) {

}])
.controller('EventCtrlOne', ['$scope', function ($scope) {

}])