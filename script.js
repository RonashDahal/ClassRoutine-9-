function invisible() {
    let routine = document.getElementById("testroutine");
    let btn = document.getElementById("hidbtn");
    let dailyroutine = document.getElementById("dailyroutine");
    let dbtn = document.getElementById("dailybtn");
    if (routine.classList == "") {
        // this code will run if test routine is not displayed
        routine.classList.add("invisible");
        dailyroutine.classList.remove("invisible");
        btn.innerHTML = "View Test Routine";
    } else {
        // this code will run if daily routine is not displayed
        routine.classList.remove("invisible");
        dailyroutine.classList.add("invisible");
        btn.innerHTML = "View Daily Routine";
    };
};
// Declaring Variables
let subjectarea = document.getElementById("subject");
let remainingtime = document.getElementById("remaint");
let upcommingsubject = document.getElementById("upcome");
let per = [
    {
        start: {h: 9, m:50},
        end : {h:10, m: 30}
    },
    {
        start: {h: 10, m:30},
        end : {h:10, m: 45}
    },
    {
        start: {h: 10, m:45},
        end : {h:11, m: 35}
    },
    {
        start: {h: 11, m:35},
        end : {h:12, m: 15}
    },
    {
        start: {h: 12, m:15},
        end : {h:13, m: 1}
    },
    {
        start: {h: 13, m:1},
        end : {h:13, m: 30}
    },
    {
        start: {h: 13, m:30},
        end : {h:14, m: 15}
    },
    {
        start: {h: 14, m:15},
        end : {h:14, m: 55}
    },
    {
        start: {h: 14, m:55},
        end : {h:15, m: 35}
    },
    {
        start: {h: 15, m:35},
        end : {h:16, m: 15}
    },
];    
function times() {
    // Declaring Variables //
    var date = new Date();
    var second = date.getSeconds();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var day = date.getDay();
    var timearea = document.getElementById("timearea");
    var datearea = document.getElementById("datearea");
    timearea.innerHTML = hour + " : " + minute + " : " + second;

    if (day == 0) {
        sun();
        datearea.innerHTML = "Sunday";
    } else if (day == 1) {
        mon();
        datearea.innerHTML = "Monday";
    } else if (day == 2) {
        tue();
        datearea.innerHTML = "Tuesday";
    } else if (day == 3) {
        wed();
        datearea.innerHTML = "Wednesday";
    } else if (day == 4) {
        thu();
        datearea.innerHTML = "Thursday";
    } else if (day == 5) {
        fri();
        datearea.innerHTML = "Friday";
    } else if (day == 6) {
        saturday();
    } else {
        datearea.innerHTML = "Your day function is not Working properly";
    };
};

// Starting Day function from Sunday to Friday //
function sun() {
    var periods = [
        { subject: "Compulsory Maths", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "CPRO + ELE (GG + ARD)", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "CPRO + ELE (GG + ARD)", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "Nepali (HNB)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "CPRO (GG)", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "English (BKL)", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "FCA (SS)", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "Science (AS)", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
            
];
    updateSchedule(periods);
}

function mon() {
    var periods = [
        { subject: "Compulsory Maths", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "CPRO + ELE (GG + ARD)", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "CPRO + ELE (GG + ARD)", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "Nepali (HNB)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "OPT-Math (AS)", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "English (BKL)", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "FCA (SS)", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "Science (AS)", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
          
 ];    updateSchedule(periods);
}

function tue() {
    var periods = [
        { subject: "Compulsory Maths", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "FCA + WEB (SS + RK)", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "FCA + Web (SS + RK)", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "ELecto (ARD)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "OPT-Math (AS)", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "English (BKL)", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "Web (RK)", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "Science (AS)", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
    ];
    updateSchedule(periods);
}

function wed() {
    var periods = [
        { subject: "Compulsory Maths", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "FCA + WEB (SS + RK)", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "FCA + WEB (SS + RK)", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "Nepali (HNB)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "OPT-Math(AS)", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "English (BKL)", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "Electro (ARD)", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "Science (AS)", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
        
    ];
    updateSchedule(periods);
}

function thu() {
    var periods = [
        { subject: "CPro", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "Web", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "CPRO(GG)", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "Nepali (HNB)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "OPT-Math (AS)", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "English (BKL)", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "FCA (SS)", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "Science (AS)", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
            
];
    updateSchedule(periods);
}

function fri() {
    var periods = [
        { subject: "Compulsory Maths", startHour: per[0].start.h, startMinute: per[0].start.m, endHour: per[0].end.h, endMinute: per[0].end.m},
        { subject: "Assembly", startHour: per[1].start.h, startMinute: per[1].start.m, endHour: per[1].end.h, endMinute: per[1].end.m },
        { subject: "Elecro(ARD)", startHour: per[2].start.h, startMinute: per[2].start.m, endHour: per[2].end.h, endMinute: per[2].end.m },
        { subject: "Web", startHour: per[3].start.h, startMinute: per[3].start.m, endHour: per[3].end.h, endMinute: per[3].end.m },
        { subject: "Nepali (HNB)", startHour: per[4].start.h, startMinute: per[4].start.m, endHour: per[4].end.h, endMinute: per[4].end.m },
        { subject: "Break", startHour: per[5].start.h, startMinute: per[5].start.m, endHour: per[5].end.h, endMinute: per[5].end.m},
        { subject: "OPT-Math", startHour: per[6].start.h, startMinute: per[6].start.m, endHour: per[6].end.h, endMinute: per[6].end.m },
        { subject: "ECA", startHour: per[7].start.h, startMinute: per[7].start.m, endHour: per[7].end.h, endMinute: per[7].end.m },
        { subject: "ECA", startHour: per[8].start.h, startMinute: per[8].start.m, endHour: per[8].end.h, endMinute: per[8].end.m },
        { subject: "ECA", startHour: per[9].start.h, startMinute: per[9].start.m, endHour: per[9].end.h, endMinute: per[9].end.m },
            
];
    updateSchedule(periods);
}

function saturday() {
    subjectarea.innerHTML = "Today is a holiday";
    remainingtime.innerHTML = "All day off";
    upcommingsubject.innerHTML = "Enjoy your day!";
}

function updateSchedule(periods) {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();

    for (let i = 0; i < periods.length; i++) {
        let start = periods[i].startHour * 60 + periods[i].startMinute;
        let end = periods[i].endHour * 60 + periods[i].endMinute;
        let current = hour * 60 + minute;

        if (current >= start && current <= end) {
            subjectarea.innerHTML = periods[i].subject;
            remainingtime.innerHTML = `${Math.floor((end - current) / 60)} hours and ${(end - current) % 60} minutes remaining`;
            upcommingsubject.innerHTML = i + 1 < periods.length ? periods[i + 1].subject : "School is over";
            return;
        }
    }
    subjectarea.innerHTML = "No current class";
    remainingtime.innerHTML = "";
    upcommingsubject.innerHTML = periods.length > 0 ? periods[0].subject : "No upcoming classes";
}

setInterval(times, 1000);
