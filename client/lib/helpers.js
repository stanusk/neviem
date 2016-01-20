/**
 * Created by student on 17.12.2015.
 */
moment.locale('en', {
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Today at] LT",
        nextDay: '[Tomorrow at] LT',
        nextWeek: '[on] dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: 'LLLL',
        sameElse: 'LLL'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 1  // The week that contains Jan 4th is the first week of the year.
    }
});
