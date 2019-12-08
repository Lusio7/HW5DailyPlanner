$(document).ready(functio()){
    const test = false;
}

//get times from moment
const now = moment().format('MMMM Do YYYY');

//commented out for test in non-std hours
let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');

//set times for testing after hours
if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
}

let $dateHeading = $('#navbar-subtitle');
$dateHeading.text(now);
//using font awesome icon  https://fontawesome.com/license
//change descriotion here none
const saveIcon = "./images/save-regular.svg";


//get stored TODOS from localStorage
//Parsing the JSON string to an object
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if test {console.log(storedPlans);}

//if plans were retrieved from localStorage, update the plan array to it
if (storedPlans !==null) {
    planTextArr = storedPlans;
}else{
    //this should only occur on first time the app is loaded in the browser
    //remind user that launch is important
    planTextArr = new Array (9);
    planTextArr[4] = "Get ready for GWU Bootcamp"
}

if (test) { console.log("full array of planned text", planTextArr);}

//set var referencing planner element
let $plannerDiv = $('#plannerContainer');
//clear exisitng elemements
$plannerDiv.empty();

if (test) {console.log("current time", nowHour12);}

//build calendar by row for fix set of hours
for (let hour = 9; hour <= 17; hour++){
    //index for array use offset from hour
    let index = hour - 9;
}


//build row components
let $rowDiv = $('<div>');
$rowDiv.addClass ('row');
$rowDiv.addClass('plannerRow');
$rowDiv.attr('hour-index', hour);

//start building time box portion of row
let $col2TimeDiv = $ ('<div>');
$col2TimeDiv.addClass ('col-md-2');

//create time box element (contains time)
const $timeBoxSpn = $('<span>');
// can use this to get value
$timeBoxSpn.attr('class' , 'timeBox');

//format hours for display
letDisplayHour = 0;
let ampm = "";
if (hour > 12) {
    displayHour = hour - 12;
    ampm = "pm";
}else{
    displayHour = hour;
    ampm = "am";
}

//populate timeBox with time
$timeBoxSpn.text(`${displayHour} ${ampm}`);

//insert into col insert into timeBox
$rowDiv.append($col2TimeDiv);
$col2TimeDiv.append($timeBoxSpn);
//STOP building timebox portion of row
//build row components
let dailyPlanSpn = $('<input>');

$dailyPlanSpn.attr('id', `input-${index}`);
$dailyPlanSpn.attr('hour-index',index);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');

//access index from data array for hour
$dailyPlanSpn.val(planTextArr[index]);

//create col to control width
let $col9IptDiv = $('<div>');
$col9IptDiv.addClass('col-md-9');

//add col width and row component to row
$rowDiv.append($col9IptDiv);
$col9IptDiv.append($dailyPlanSpn);
//STOP building timebox portion of row

//START building save portion of row
let $col1SaveDiv = $('<div>');
$col1SaveDiv.addClass('col-md-1');

let $saveBtn = $('<i>');
    $saveBtn.attr('id',`saveid-${index}`);
    $saveBtn.attr('save-id',index);
    $saveBtn.attr('class',"far fa-save saveIcon");

//add col width and row component to row
$rowDiv.append($col1SaveDiv);
$col1SaveDiv.append($saveBtn);
//STOP building save portion of row

//set row col color based on time
function updateRowColor ($hourRow,hour){

    if (test) {console.log("rowColor", nowHour24, hour);}

    if ( hour < nowHour24) {
        // $hourRow.css('')
        if (test) {console.log("lessThan");}
        $hourRow.css("background-color", "lightgrey")
    }else if (hour > nowHour24){
        if (test) {console.log("greaterThan");}
        $hourRow.css("background-color", "lightgreen")
    }else {
        if (test) {console.log("equal");}
        $hourRow.css("background-color", "tomato")
    }
};

//save to localStorage
//onclick function to for user clicks on plan area
$(documet).om("click", 'i', function(event){
    event.preventDefault();

    if (test) {console.log('click pta before' + planTextArr);}

    let $index = $(this).attr('save-id');

    let inputId = '#input' +$'$index';
    let $value = $(inputId).val();

    planTextArr[$index] = $value;

    if (test) { console.log('value ', $value); }
    if (test) { console.log('index ', $index); }
    if (test) { console.log('click pta after '+ planTextArr); }

//remove shadow pulse class
$(`#saveid-${$index}`).removeClass('shadowPulse');
localStorage.setItem("storedPlan", JSON.stringify(planTextArr));
});

//function to color save btn on change of input
$(document).on('change', 'input', function(event){
    event.preventDefault();
    if (test) { console.log('onChange'); }
    if (test) { console.log('id', $(this).attr('hour-index')); }

    //need to check for save btn to ensure user saves event in planner
    let i = $(this).attr('hour-index');

    //add shadow pulse class to save btn
    $(`#saveid-${i}`).addClass('shadowPulse');
});

