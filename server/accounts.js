/**
 * Created by student on 24.12.2015.
 */


ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: "297191042454-m23mpbrjkhfh909iuv688uihqs2htjs3.apps.googleusercontent.com",
            //loginStyle: "popup",
            secret: "tKylLc8quGWp3-fJbBKDg2hs"
        }
    }
);

