/**
 * Created by student on 17.12.2015.
 */

angular.module('neviem')
    .controller('OverviewCtrl', OverviewCtrl);

function OverviewCtrl ($log, $scope, $reactive, $state) {
    /*
     * ctrl setup
     */
    var vm = this;
    $reactive(vm).attach($scope);


    /*
     * db subscriptions
     */


    /*
     * reactive variables
     */


    /*
     * bindable variables
     */



    /*
     * bindable functions
     */

    vm.logout = logout;


    /*
     * functions
     */

    function logout () {
        Meteor.logout(function () {
            $state.go('home');
        });

    }
}
