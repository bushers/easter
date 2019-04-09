
declare var firebase;

/**
 * Firebase keys and api configs
 */
export const FIREBASE_CONF = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

export default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONF) : firebase.app();