var today = moment();
$("#currDate").text(today.format("MMM Do, YYYY"));

let val = new Array();
function setData() {
    console.log(localStorage);
    for(let i = 0; i < localStorage.length; i++) {
        val[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(val[i]);
    }
    if(localStorage.length != 1) {
        localStorage.clear();
        val[0] = {
            AM9: "",
            AM10: "",
            AM11: "",
            PM12: "",
            PM1: "",
            PM2: "",
            PM3: "",
            PM4: "",
            PM5: "",
        }
    }

    $("#9am").val(`${val[0].AM9}`);
    $("#10am").val(`${val[0].AM10}`);
    $("#11am").val(`${val[0].AM11}`);
    $("#12pm").val(`${val[0].PM12}`);
    $("#1pm").val(`${val[0].PM1}`);
    $("#2pm").val(`${val[0].PM2}`);
    $("#3pm").val(`${val[0].PM3}`);
    $("#4pm").val(`${val[0].PM4}`);
    $("#5pm").val(`${val[0].PM5}`);


}

setData();


let timeC;
let timeN = true;
let time = setInterval(function(event) {
    let currT = moment().format('LTS').split(':');
    let AMPM = currT[2].split(" ");

    if(timeN == true) {
        if(currT[0] < 9 && AMPM[1] == 'AM') {
            $("#9am").css("background-color", "green");
            $("#10am").css("background-color", "green");
            $("#11am").css("background-color", "green");
            $("#12pm").css("background-color", "green");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 9 && AMPM[1] == 'AM') {
            $("#9am").css("background-color", "red");
            $("#10am").css("background-color", "green");
            $("#11am").css("background-color", "green");
            $("#12pm").css("background-color", "green");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 10 && AMPM[1] == 'AM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "red");
            $("#11am").css("background-color", "green");
            $("#12pm").css("background-color", "green");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 11 && AMPM[1] == 'AM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "red");
            $("#12pm").css("background-color", "green");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 12 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "red");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 1 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "red");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 2 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "grey");
            $("#2pm").css("background-color", "red");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 3 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "grey");
            $("#2pm").css("background-color", "grey");
            $("#3pm").css("background-color", "red");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            //$("#3pm").val("HELLO");
            timeN = false;
        }
        if(currT[0] == 4 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "grey");
            $("#2pm").css("background-color", "grey");
            $("#3pm").css("background-color", "grey");
            $("#4pm").css("background-color", "red");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
        if(currT[0] == 5 && AMPM[1] == 'PM') {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "grey");
            $("#2pm").css("background-color", "grey");
            $("#3pm").css("background-color", "grey");
            $("#4pm").css("background-color", "grey");
            $("#5pm").css("background-color", "red");
            timeN = false;
        }
        if(currT[0] > 5 && AMPM[1] == 'PM' && currT[0] != 12) {
            $("#9am").css("background-color", "grey");
            $("#10am").css("background-color", "grey");
            $("#11am").css("background-color", "grey");
            $("#12pm").css("background-color", "grey");
            $("#1pm").css("background-color", "grey");
            $("#2pm").css("background-color", "grey");
            $("#3pm").css("background-color", "grey");
            $("#4pm").css("background-color", "grey");
            $("#5pm").css("background-color", "grey");
            timeN = false;
        }

        if(currT[0] == 12 && AMPM[1] == 'AM') {
            $("#9am").css("background-color", "green");
            $("#10am").css("background-color", "green");
            $("#11am").css("background-color", "green");
            $("#12pm").css("background-color", "green");
            $("#1pm").css("background-color", "green");
            $("#2pm").css("background-color", "green");
            $("#3pm").css("background-color", "green");
            $("#4pm").css("background-color", "green");
            $("#5pm").css("background-color", "green");
            timeN = false;
        }
    }

    if(currT[1] == "59" && AMPM[0] == "59") {
        timeN = true;
    }
    
    if(currT[0] == 12 && currT[1] == "00" && AMPM[0] == "00" && AMPM[1] == "AM") {
        localStorage.clear();
    }



}, 1);


$('.lock').click(function() {
    let entry = {
        AM9: $("#9am").val(),
        AM10: $("#10am").val(),
        AM11: $("#11am").val(),
        PM12: $("#12pm").val(),
        PM1: $("#1pm").val(),
        PM2: $("#2pm").val(),
        PM3: $("#3pm").val(),
        PM4: $("#4pm").val(),
        PM5: $("#5pm").val()
    }
    console.log(entry);
    localStorage.setItem("Data", JSON.stringify(entry));
    console.log(localStorage);
});

