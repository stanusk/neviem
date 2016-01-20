/**
 * Created by student on 16.12.2015.
 */

angular.module('neviem').filter('date', date);

function date () {
    return function (date) {
        if (!date) return null;

        return moment(date).calendar();
    };
}
