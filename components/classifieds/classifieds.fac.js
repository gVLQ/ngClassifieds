(function() {
    "use strict"
    
    angular
        .module("ngClassifieds")
        .factory("classifiedsFactory", function($http, $firebaseArray) {
            
            var ref = new Firebase('https://vlq11-adds.firebaseio.com');
            return {
                ref: $firebaseArray(ref)
            }
        });
})();