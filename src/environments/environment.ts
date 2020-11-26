// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'https://cart-empresariales-back.herokuapp.com/'
  apiUrl: 'http://localhost:9090/',
  firebase:{
    apiKey: "AIzaSyBlc2kl9BtFe-VEKWF2l8s131EMkk7H0n0",
    authDomain: "cart-empresariales-front.firebaseapp.com",
    databaseURL: "https://cart-empresariales-front.firebaseio.com",
    projectId: "cart-empresariales-front",
    storageBucket: "cart-empresariales-front.appspot.com",
    messagingSenderId: "815959855778",
    appId: "1:815959855778:web:85ea47a1cfe480d830bdfb"
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
