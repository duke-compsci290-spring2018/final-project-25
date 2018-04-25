// use Firebase as our database
import Firebase from 'firebase'

// configure and connect to database
var config = {
    apiKey: "AIzaSyA04GXaK6QasenFjKpk-4FeqHk36j0ruf8",
    authDomain: "perspective-d591c.firebaseapp.com",
    databaseURL: "https://perspective-d591c.firebaseio.com",
    projectId: "perspective-d591c",
    storageBucket: "perspective-d591c.appspot.com",
    messagingSenderId: "1075625220372"
  };

var fbApp = Firebase.initializeApp(config)

// global reference to remote database app
export const db = fbApp.database()
// global reference to remote storage
export const storageRef = fbApp.storage().ref()
// create useful endpoints within the database
export const imagesRef = db.ref('images')