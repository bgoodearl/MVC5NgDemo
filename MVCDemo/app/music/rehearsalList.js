(function () {
    'use strict';

    angular
        .module('appRehearsals')
        .controller('rehearsalList', rehearsalList);

    rehearsalList.$inject = ['$location']; 

    function rehearsalList($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'rehearsalList';

        activate();

        function activate() {
        }
    }
})();
