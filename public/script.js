document.querySelector('.main').style.display = 'none';
document.getElementById('load').classList.add('loader');

let tar_con = document.getElementById('topcon');

tar_con.addEventListener('click', ()=>{

    let tar_soc = document.querySelector('.social-links');

    console.log(tar_soc)

    let nest = tar_soc.querySelectorAll('a');

    // tar_soc.focus();

    for (const i of nest){
        i.style.transform = 'scale(1.4)';
    }

    
    setTimeout(()=>{
        for (const i of nest){
        i.style.transform = 'scale(1)';
    }
    }, 300);
})

// For simulation
setTimeout(() => {
document.getElementById('load').classList.remove('loader');
document.querySelector('.main').style.display = 'block';
}, 4500);

setTimeout( () => {
var an = document.getElementsByClassName('wrapper');
an[0].style.display = 'none';
}, 5002)

setTimeout( () => {
    document.querySelector('body').style.opacity = 1;
}, 1000)


// For timeline

      
let banner = document.getElementsByClassName('banner');
let darkBtn = document.getElementById('dark');
let lightBtn = document.getElementById('light');


console.log(darkBtn);

// ======= Typed Effect=======

let typingText = new Typed('#typedtext', {
    strings: ["Kaustav", "Software Engineer", "Full Stack Developer", "Cloud Architect"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
})

console.log(typingText);

$(document).ready(function () {

//  Owl Carousel  //

$(".carousel").owlCarousel({
navigation: false, // Show next and prev buttons
autoPlay : 3000,
slideSpeed: 300,
paginationSpeed: 400,
stopOnHover: true,
rewindNav : true,
rewindSpeed: 0,
items: 3,
loop : false,
//   stagePadding: 0,
//   autoWidth: true,
rtl: true
});
});

//Sample dates

var date_headers = ["Freelance Web Development", "Backend Developer Intern", "Webops Developer", "Open Source Mentorship", "Software Development Engineer", "Solution Architect - Stealth", "AI/ML Engineering & Systems Programming"]

var date_body = [
"Started taking up freelance web development projects using the skill-set developed during my first year of college. By this time had a good hold over front-end web development using HTML, CSS, JS. Also started getting hands-on with frameworks like React.js and Node.js for backend, along with core cs concepts.",
"Got my first internship with the ed-tech company, building their e-lraning platform backend using Django. Got good exposure to client-server architecture, working with ORMs, Django Rest Framework and security middlewares. Also started learning about the importance of good software architecture and design patterns.",
"Got a chance to work with the IIT Madras SEC student community team in my 3rd year of college, building their official website and online certification distribution portal using FastAPI and pydantic models. Ensured website availability and responsiveness by optimizing database queries and performance monitoring.",
"Giving back to the community by mentoring for several projects in various open source programs such as gssoc, swoc, hacktobefest, codepeak and google-dsc. Maintaing my own projects that recieved lots of contributions from the community, while also conducting several workshops and events along with fellow mentors and project leads.",
"Joined my first full-time role as Founding Engineer at the Startup. Worked in an inter-disciplinary role, wearing multiple hats at the same time. Developed backend services for the flagship product, using Node.js and asynchronous task processing. Worked with various cloud technologies, Azure Big-Data Platforms, DevOps platforms, CI/CD pipelines and containerization.",
"Worked with computer vison applications using YOLOv5 and ROS, built real-time data streaming applications with distributed architecture using consensus protocols and coordination services.",
"Worked on Generative AI applications using LLMs and building Agentic RAG systems that autonomously take actions based on user queries, with a multi-layered retrieval process. Also dived into systems programming with Rust and Golang for building efficient, robust and scalable cloud native applications with high concurrency. Also studying applications in embedded systems and uav flight controllers."
]

var dates_rel = ["1/1/2022", "4/5/2022", "5/28/2022", "7/15/2022", "9/24/2022", "11/15/2022", "12/25/2022"]
var dates = [ "1/1/2021", "3/1/2022", "6/1/2022", "10/9/2022", "3/1/2023", "02/04/2024", "08/06/2024"];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Format MM/DD/YYYY into string
function dateSpan(date) {
var month = date.split('/')[0];
month = monthSpan[month - 1];
var day = date.split('/')[1];
if (day.charAt(0) == '0') {
day = day.charAt(1);
}
var year = date.split('/')[2];

//Spit it out!
return month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles() {
//Forget the timeline if there's only one date. Who needs it!?
if (dates_rel.length < 2) {
$("#line").hide();
$("#span").show().text(dateSpan(dates_rel
[0]));
//This is what you really want.
} else if (dates_rel.length >= 2) {
//Set day, month and year variables for the math
var first = dates_rel[0];
var last = dates_rel[dates_rel.length - 1];

var firstMonth = parseInt(first.split('/')[0]);
var firstDay = parseInt(first.split('/')[1]);

var lastMonth = parseInt(last.split('/')[0]);
var lastDay = parseInt(last.split('/')[1]);

var lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);

$("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');

$("#mainCont").append('<span id="span0" class="center">' + ' <div class="t-content"> <h3>' + date_headers[0] + '</h3> <li>'  + dateSpan(dates[0]) + ' <p>' +  date_body[0] + '</p> </li> </div> </span>');


for (i = 1; i < dates.length - 1; i++) {
  var thisMonth = parseInt(dates_rel[i].split('/')[0]);
  var thisDay = parseInt(dates_rel[i].split('/')[1]);

  var thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

  var relativeInt = thisInt / lastInt;

  $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');
  
  $("#mainCont").append('<span id="span' + i + '" class="right">' +' <div class="t-content"> <h3>' + date_headers[i] + '</h3> <li>'  + dateSpan(dates[i]) + ' <p>' +  date_body[i] + '</p> </li> </div> </span>');
}

//Draw the last date circle
$("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>'); 

$("#mainCont").append('<span id="span' + i + '" class="right">' +' <div class="t-content"> <h3>' + date_headers[i] + '</h3> <li>'  + dateSpan(dates[i]) + ' <p>' +  date_body[i] + '</p> </li> </div> </span>');
}

$(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
$(this).addClass("hover");
});

$(".circle").mouseleave(function() {
$(this).removeClass("hover");
});

$(".circle").click(function() {
var spanNum = $(this).attr("id");
selectDate(spanNum);
});

let leftBtn = document.getElementById('leftButton');
let rightBtn = document.getElementById('rightButton');

leftBtn.addEventListener('click', ()=>{
    console.log('left');
    selectDate('btn-left');
})

rightBtn.addEventListener('click', ()=>{
    console.log('right');
    selectDate('btn-right');
})  


function selectDate(selector) {

    if(selector == 'btn-left'){
        const activeCircle = $(".circle.active").attr("id");
        const currentIndex = parseInt(activeCircle.replace("circle", ""));
        if (currentIndex > 0) {
            selectDate(`circle${currentIndex - 1}`);
          }else{
            selectDate(`circle${dates.length - 1}`);
          }
        return;
    }

    if(selector == 'btn-right'){
        const activeCircle = $(".circle.active").attr("id");
        const currentIndex = parseInt(activeCircle.replace("circle", ""));
        if (currentIndex < dates.length - 1) {
            selectDate(`circle${currentIndex + 1}`);
          }else{
            selectDate(`circle0`);
          }
          return;
    }

$selector = "#" + selector;
$spanSelector = $selector.replace("circle", "span");
var current = $selector.replace("circle", "");

$(".active").removeClass("active");
$($selector).addClass("active");


if ($($spanSelector).hasClass("right")) {
$(".center").removeClass("center").addClass("left")
$($spanSelector).addClass("center");
$($spanSelector).removeClass("right")
} else if ($($spanSelector).hasClass("left")) {
$(".center").removeClass("center").addClass("right");
$($spanSelector).addClass("center");
$($spanSelector).removeClass("left");
}; 
};

console.log()


    // localStorage.clear()
