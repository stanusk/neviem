/**
 * Created by student on 17.12.2015.
 */

angular.module('neviem')
    .controller('CigsListCtrl', CigsListCtrl);

function CigsListCtrl ($log, $scope, $reactive) {
    /*
     * ctrl setup
     */
    var vm = this;
    $reactive(vm).attach($scope);


    /*
     * db subscriptions
     */
    vm.subscribe('cigs');


    /*
     * reactive variables
     */
    vm.helpers({
        cigs: function () {
            return Cigs.find({});
        }
    });


    /*
     * bindable variables
     */



    /*
     * bindable functions
     */


    /*
     * functions
     */
}
