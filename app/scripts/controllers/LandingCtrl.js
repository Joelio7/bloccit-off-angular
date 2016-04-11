(function() {
     function LandingCtrl($scope, Task) {

         $scope.tasks = Task.all();
         $scope.createTask = function(task){
             Task.create(task);
         }
        
        
         
        
      }
     angular
         .module('bloccitOff')
         .controller('LandingCtrl', LandingCtrl);
 })();