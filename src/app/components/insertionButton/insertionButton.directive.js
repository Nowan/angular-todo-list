(function() {
    'use strict';

    angular
        .module('todoList')
        .directive('insertionButton', insertionButton);

    //Directive.$inject = ['dependency1'];
    function insertionButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'InsertionButtonController',
            controllerAs: 'iButtonCtrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "app/components/insertionButton/insertion-button.html",
            css: "app/components/insertionButton/insertion-button.css"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();