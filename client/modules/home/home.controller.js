/**
 * Created by student on 24.12.2015.
 */

angular.module('neviem').controller('HomeCtrl', HomeCtrl);

function HomeCtrl ($log, $scope, $reactive, $state) {
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
    vm.helpers({

    });


    /*
     * bindable variables
     */



    /*
     * bindable functions
     */
    vm.logIn = logIn;

    /*
     * functions
     */
    function logIn () {
        Meteor.loginWithGoogle({

        }, function (err) {
            if (err)
                Session.set('errorMessage', err.reason || 'Unknown error');

            else {

                Meteor.call('isTheOne', function (error, result) {
                    if (result) {
                        $state.go('cigarettes');
                    }
                    else {

                        Meteor.logout(function () {
                            $state.go('notTheOne');
                        });

                    }
                });

                $state.go('cigarettes');
            }
        });
    }

}
