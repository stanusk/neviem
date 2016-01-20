/**
 * Created by student on 17.12.2015.
 */

angular.module('neviem')
    .controller('CigsCounterCtrl', CigsCounterCtrl);

function CigsCounterCtrl ($log, $scope, $reactive) {
    /*
     * ctrl setup
     */

    var vm = this;
    $reactive(vm).attach($scope);


    /*
     * db subscriptions
     */

    Meteor.subscribe('cigLocation');
    Meteor.subscribe('cigMode');
    Meteor.subscribe('cigStatus');


    /*
     * reactive variables
     */

    vm.helpers({
        count: function () {
            return Counts.get('numberOfCigs');
        },
        status: function () {
            return CigStatus.find({}).fetch();
        },
        location: function () {
            return CigLocation.find({}).fetch();
        },
        mode: function () {
            return CigMode.find({}).fetch();
        }
    });


    /*
     * bindable variables
     */

    vm.newCig = {};


    /*
     * bindable functions
     */

    vm.addCig       = addCig;

    /*
     * functions
     */

    function addCig () {
        vm.newCig.timeStamp = Date.now();
        vm.newCig.mode = vm.newCig.mode;
        vm.newCig.owner = Meteor.userId();

        console.log(vm.newCig);
        Cigs.insert(vm.newCig);

        vm.newCig = {};
    }
}
