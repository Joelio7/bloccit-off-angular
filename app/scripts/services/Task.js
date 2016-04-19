(function(){
    function Task($firebaseArray) {
        var ref = new Firebase("https://luminous-torch-198.firebaseio.com");
        var tasks = $firebaseArray(ref)
        
        function _all() {
            return tasks;
        }
        
        function newTask(task) {
            return tasks.$add(task)
            
        }
        
        
        function updateTask(task) {
            tasks.$save(task);
        }
        
        return {
            all: _all,
            create:  newTask,
            update: updateTask
        };
        
    }
    
    angular
        .module('bloccitOff')
        .factory('Task', Task);
})(); 