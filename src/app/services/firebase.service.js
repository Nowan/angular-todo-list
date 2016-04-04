(function() {
'use strict';

    angular
        .module('todoList')
        .service('firebaseService', firebaseService);

    firebaseService.$inject = ['$firebaseArray', '$firebaseObject', '$firebaseAuth', '$rootScope', '$state'];
    function firebaseService($firebaseArray, $firebaseObject, $firebaseAuth, $rootScope, $state) {
        var service = this;
        
        var ref = new Firebase("https://blistering-torch-5379.firebaseio.com");//firebase reference
        
        // an instance of the authentication service
        var auth = $firebaseAuth(ref);
        
        //params
        service.authData = ref.getAuth();
        service.error = null;
        if(service.authData){
            var userRef = ref.child("users").child(service.authData.uid);//reference to the current user
            service.userData = $firebaseObject(userRef);
            service.tasks = $firebaseArray(userRef.child("tasks"));}
        else {
            service.tasks= null;
            service.userData = null;
        }
        service.isLoggedIn = function(){ return service.authData!=null; };
        
        //methods
        service.addTask = addTask;
        service.authWithPassword = authWithPassword;
        service.clearAll = clearAll;
        service.clearDone = clearDone;
        service.createUser = createUser;
        service.saveTask = saveTask;
        service.unauth = function(){ ref.unauth(); service.authData=null; };
        
        //listeners
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) { //route state change listener
            console.log(service.isLoggedIn());
            console.log(toState.name);
            if(toState.name=="login" || toState.name=="registration"){
                if(service.isLoggedIn()) {
                    event.preventDefault();
                    $state.go('profile',{ "profileID": service.authData.uid });
                }
            }
            else if((toState.name=="profile" || toState.name=="tasks" )&& !service.isLoggedIn()) {
                event.preventDefault();
                $state.go('login')
            };
        });
        
        //methods definitions
        function addTask(task){
            task.isCompleted = false;
            service.tasks.$add(task);
        };
        
        function authWithPassword(email, password, callback){
            ref.authWithPassword({
                email: email,
                password : password
            }, function(error, authData) {
                if (error) {
                    service.error = error;
                    callback();
                } else {
                    var userRef = ref.child("users").child(authData.uid);//reference to the current user
                    
                    service.tasks = $firebaseArray(userRef.child("tasks"));
                    console.log(authData);
                    service.authData = authData;
                    callback();
                }
            });
        }
        
        function createUser(email,password,callback){
            ref.createUser({
                    email: email,
                    password : password
                }, function(error, userData) {
                    if (error) {
                        service.error = error;
                        callback();
                    } else {
                        //service.userID = userData.uid;
                        console.log(userData);
                        
                        var userRef = ref.child("users").child(userData.uid);//reference to the current user
                        
                        //check, whether the user table exist in database
                        userRef.set({
                            provider: "password",
                            name: email.replace(/@.*/, ''),
                            tracks: []
                        });
                        
                        callback();   
                    }
            });
        }
        
        function clearAll(){
            for(var i=service.tasks.length-1;i>=0;i--)
                service.tasks.$remove(i);
        };
        
        function clearDone(){
            for(var i=service.tasks.length-1;i>=0;i--)
                if(service.tasks[i].isCompleted)
                    service.tasks.$remove(i);
        };
        
        function saveTask(task){
              service.tasks.$save(task);
        };
        
        }
})();