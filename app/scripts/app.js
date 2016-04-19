(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/landing.html'
         })
         
         .state('old-tasks', {
             url: '/old-tasks',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/old_tasks.html'
         });
     }
   
    angular
         .module('bloccitOff', ['ui.router','firebase'])
         .config(config);
 })();




