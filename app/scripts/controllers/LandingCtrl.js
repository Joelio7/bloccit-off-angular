(function() {
     function LandingCtrl($scope, Task) {
         
         $scope.newTask = {completed: false, createdTime: Firebase.ServerValue.TIMESTAMP}

         
         $scope.tasks = Task.all();
         $scope.createTask = function(task){
             Task.create(task);
         }
         $scope.updateTask = function(task) {
             Task.update(task);
         }
         
         $scope.isExpired = function(task) {
            var now = moment();
            var createdMoment = moment(task.createdTime);
            var diff = now.diff(createdMoment, 'days');
            
            if (diff >= 7) {
                return true;
            } else {
                return false;
            }
            
         }
     }

     angular
         .module('bloccitOff')
         .controller('LandingCtrl', LandingCtrl);
 })();