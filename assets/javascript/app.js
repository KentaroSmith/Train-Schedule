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
var startTime = '';
var endTime = '';


$("#Submit").on("click", function () {
    event.preventDefault();
    routenumber = $("#routenum").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    stops = $("#stops").val().trim();
    startTime = $("#start").val().trim();
    endTime = $("#end").val().trim();
    database.ref().push({
        routenumber: routenumber,
        destination: destination,
        frequency: frequency,
        stops: stops,
        startTime: startTime,
        endTime: endTime,
    });
});
database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    console.log(snapshot);
    console.log(sv.routenumber);
    console.log(sv.destination);
    console.log(sv.frequency);
    console.log(sv.stops);
    console.log(sv.startTime);
    console.log(sv.endTime);
    createRow(snapshot.val());


}, function (errorObject) {
    console.log('Errors Handled: ' + errorObject.code);
});

function createRow(time) {
    //calculating the time of each stop and counting time left from current time
    var numofstops = 27;
    var timesofstops = [];
    var nextarrivaltime;
    var timeremaining;
    var convertStart = moment(time.startTime, "HH:mm");
    var currentTime = moment().format("HH:mm");

    for (var i = 0; i < numofstops; i++) {
        var timesinceroutestart = time.frequency * i;
        timesofstops.push(moment(convertStart).add(timesinceroutestart, "minutes").format('HH:mm A'));
        //From here I need to determine the next time in the array based on the current time and display it as nextarrivaltime
        //Item is currently undefined, need to find next time in the array
        //set interval for time remaining
    };
    //nextarrivaltime = timesofstops.find(moment().format());
    //possible solution? https://github.com/moment/moment/issues/3297

    console.log(timesofstops);
    for (var i = 0; i < timesofstops.length; i++) {
        if (currentTime.isBefore(timesofstops[i])) {
            console.log(timesofstops[i]);

            //this should work, might need differnt moment CDN
        }
        else {
            console.log(time.startTime)
        };
    };


    var row = $("<tr>");
    $(".table").append(row);
    //pulling info from firebase to fill all of the fields
    row.append($("<td>").text(time.routenumber));
    row.append($("<td>").text(time.destination));
    row.append($("<td>").text(time.frequency));
    row.append($("<td>").text(time.stops));
    row.append($("<td>").text(nextarrivaltime));
    row.append($("<td>").text(timeremaining));

};