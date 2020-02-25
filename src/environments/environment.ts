// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDlyMu578HgMSs5MVFQAyyKgy5ecqgI6e4',
    authDomain: 'auth-9eb2b.firebaseapp.com',
    databaseURL: 'https://auth-9eb2b.firebaseio.com',
    projectId: 'auth-9eb2b',
    storageBucket: 'auth-9eb2b.appspot.com',
    messagingSenderId: '956757661478',
    appId: '1:956757661478:web:2b879d71a05949fe8f53e7'
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
