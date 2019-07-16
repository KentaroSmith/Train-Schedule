var firebaseConfig = {
    apiKey: "AIzaSyCdaAzNguVciD9dYhwG09qpYkZq0pv5wzI",
    authDomain: "train-56005.firebaseapp.com",
    databaseURL: "https://train-56005.firebaseio.com",
    projectId: "train-56005",
    storageBucket: "",
    messagingSenderId: "573420792033",
    appId: "1:573420792033:web:27e10f7e9ae21f2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var routenumber = 0;
var destination = '';
var frequency = '';
var stops = '';
var nextarrivaltime = '';
var timeremaining = '';

