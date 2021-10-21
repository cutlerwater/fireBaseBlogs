import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDqJfu9N90rzYijN8nNdcMaalUeP_UwP7s",
    authDomain: "fireblogscutlerwater.firebaseapp.com",
    projectId: "fireblogscutlerwater",
    storageBucket: "fireblogscutlerwater.appspot.com",
    messagingSenderId: "483588872976",
    appId: "1:483588872976:web:1666776a516ccbf3672395"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();