(function(){
    function Task($firebaseArray) {
        var ref = new Firebase("https://luminous-torch-198.firebaseio.com");

        var tasks = $firebaseArray(ref);
        function _all() {
            return tasks;
        }
        
        function newTask(task) {
                return tasks.$add(task)
            }
        
        
        return {
            all: _all,
            create:  newTask,
        };
        
    }
    
    angular
        .module('bloccitOff')
        .factory('Task', Task);
})(); 