import Firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDAGBG3yp0m73P9OeqFHyesQyQD8gO-PVw",
    authDomain: "todo-list-62d52.firebaseapp.com",
    projectId: "todo-list-62d52",
    storageBucket: "todo-list-62d52.appspot.com",
    messagingSenderId: "888597576970",
    appId: "1:888597576970:web:1c39e77d771c61b5758ef3",
    measurementId: "G-5V99EGNQH0",
};
const firebase = Firebase.initializeApp(firebaseConfig);
export default firebase;
