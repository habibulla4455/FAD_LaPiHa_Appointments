// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    
    apiKey: "AIzaSyCDxYa_eBFolyJF_qWpv1LTSZ_NqTXLBiY",
    authDomain: "harisha.firebaseapp.com",
    databaseURL: "https://harisha.firebaseio.com",
    projectId: "harisha",
    storageBucket: "harisha.appspot.com",
    messagingSenderId: "963205608734",
    clientId: '963205608734-qofaen0glflmtc8vv5akm1rs4nrnnof5.apps.googleusercontent.com',
    // console.developers.google.com/apis/credentials -> can get from here after activating the project
    // add the same credentials in auth.service.ts as well to make it work**************
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
      'https://people.googleapis.com/$discovery/rest?version=v1'
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
