
        const myTime = new Date();
        let myHour = myTime.getHours();
        let myMinute = myTime.getMinutes();
        let mySeconds = myTime.getSeconds();
        let showHour = document.getElementById('Hour');
        let showMinute = document.getElementById('Minute');
        let showSecond = document.getElementById('Second');
        
        let inputHour = document.getElementById('iH');
        let inputMinute = document.getElementById('iM');
        let message = document.getElementById('message');
        let iH = inputHour.value;
        let iM = inputMinute.value;
        
        localTrack = false;
         //writing the ringing tone code
        let ringAlarm = new Audio();
        ringAlarm.src = "horse.ogg";
        //ends here

        //declaring each its own
        let saveE = document.getElementById('saveE');
        let msgOff=  document.getElementById('msg');
        let btnOff=  document.getElementById('button');
        let eventOff=  document.getElementById('event');
        let setBoxOff = document.getElementById('setBox');
        let returnOff = document.getElementById('return');
        let eventStatus = document.getElementById("eventS");
        let eventChk = document.getElementById("eventCheck");
        eventChk.style.display = "none";
        eventStatus.style.display ="none";
        returnOff.style.display = "none";
        eventOff.style.display="none";
        //ends here

        //disabling the ok, snooze and stop buttons
        btnOk = document.getElementById('dis1');
        btnOk.disabled = true;
        btnStop = document.getElementById('dis2');
        btnStop.disabled = true;
        btnSnooze = document.getElementById('snooze');
        btnSnooze.disabled = true;
        //ends here
    
        document.getElementById('message').innerHTML = "Set an alarm? <br> ";
        document.getElementById("dis3").disabled =false;
        btnSnooze.style.opacity = "0.3";

        var getAlarmObjectsL = JSON.parse(localStorage.getItem("myEvents"));
    
    var tMeridian;
    //getting the global timestamp here and miscellaneous
let myTiming = () =>{
     tMeridian = "AM";
    const myTime = new Date();

    let myHour = myTime.getHours();
    let myMinute = myTime.getMinutes();
    let mySeconds = myTime.getSeconds();
        
    let showHour = document.getElementById('Hour');
    let showMinute = document.getElementById('Minute');
    let showSecond = document.getElementById('Second');

    //manipulating the 24-hour format to 12-hour
    if(myHour>=12)
        tMeridian= "PM";
        
    if(myHour>12)
        myHour=myHour-12;
        showHour.innerHTML = myHour;
        showSecond.innerHTML = mySeconds+" "+" "+" "+tMeridian;
        showMinute.innerHTML = myMinute;
        
    if(myHour>=0&& myHour<12)
        showHour.innerHTML = myHour;
        showSecond.innerHTML = mySeconds+" "+" "+" "+tMeridian;
        showMinute.innerHTML = myMinute;
        //ends here
}
    
let controlTime = () =>{
    setInterval(myTiming, 1000);
}  
window.onload = controlTime;

    letRing=false;
    letLocal=false;
//few calculations
function calS(){
    btnSnooze.style.opacity = "0.5";
    document.getElementById("dis3").disabled =false;
    btnSnooze.setAttribute('disabled', 'disabled');
    
    letLocal = true;
    let subZero = 60 - parseInt(showMinute.innerHTML);
    let subH = parseInt(showHour.innerHTML) - parseInt(inputHour.value);
    let sub = parseInt(showMinute.innerHTML) - parseInt(inputMinute.value);
        
    if((inputMinute.value>60||inputHour.value>=25)||
        ((isNaN(inputHour.value)||isNaN(inputMinute.value)))){
        message.innerHTML = "invalid time!";
        return;
    }
    else if(parseInt(inputMinute.value)==0&&((parseInt(inputHour.value)-parseInt(showHour.innerHTML)==1))){
        message.innerHTML = "alarm sets in "+Math.abs(subZero)+" minute's time<br>";
    }
    else if((parseInt(inputMinute.value)==0||parseInt(inputMinute.value)>0)&&((parseInt(inputHour.value)-parseInt(showHour.innerHTML)>=1))){
        let subHminus = Math.abs(subH);
        subHminus--;
        message.innerHTML = "alarm sets in "+subHminus+" hour(s) "+Math.abs(subZero)+" minute's time<br>";
    }
    else if((parseInt(showMinute.innerHTML)==parseInt(inputMinute.value))==0&&(parseInt(inputHour.innerHTML)==parseInt(inputMinute.value))){
        message.innerHTML = "alarm sets in "+Math.abs(subZero)+" minute's time<br>";
    }
    else if(((parseInt(inputMinute.value)<parseInt(showMinute.innerHTML))&&(parseInt(inputHour.value)<=parseInt(showHour.innerHTML)))
        &&((parseInt(inputMinute.value)<parseInt(showMinute.innerHTML))||(parseInt(inputHour.value)<=parseInt(showHour.innerHTML)))){
        message.innerHTML = "alarm sets again within the next 24hrs"+"<br>";
    }
    else if((parseInt(inputMinute.value)>parseInt(showMinute.innerHTML))&&(parseInt(inputHour.value)>parseInt(showHour.innerHTML))){
        message.innerHTML = "alarm sets in "+Math.abs(subH)+" hour(s) "+Math.abs(sub)+" minute's time<br>";
    }    
    else if((parseInt(inputMinute.value)>parseInt(showMinute.innerHTML)&&(inputHour.value==showHour.innerHTML))){
        message.innerHTML = "alarm sets in "+Math.abs(sub)+" minute's time<br>";
    }
}
var calSInnterval = setInterval(calS, 1000);
   
   //formatting days and months
function showDay(){
    let myMonth = myTime.getMonth();
    if (myMonth == 0){myMonth = "January"};
    if (myMonth == 1){myMonth  = "February"};
    if (myMonth == 2){myMonth  = "March"};
    if (myMonth == 3){myMonth  = "April"};
    if (myMonth ==4){myMonth= "May"};
    if (myMonth == 5){myMonth  = "June"};
    if (myMonth == 6){myMonth  = "July"};
    if (myMonth == 7){myMonth  = "August"};
    if (myMonth == 8){myMonth  = "September"};
    if (myMonth == 9){myMonth  = "October"};
    if (myMonth == 10){myMonth  = "November"};
    if (myMonth == 11){myMonth  = "December"};
        
let showTime = document.getElementById('showTime');
let myDay = myTime.getDay();

switch(myDay){
    case 0: 
    myDay = "Sunday";
    showTime.innerHTML= myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    myTime.getFullYear();
    break;
    case 1: 
    myDay = "Monday";
    showTime.innerHTML=  myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    case 2: 
    myDay ="Tuesday";
    showTime.innerHTML= myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    case 3: 
    myDay = "Wednesday";
    showTime.innerHTML= myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    case 4: 
    myDay = "Thursday";
    showTime.innerHTML= myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    case 5: 
    myDay = "Friday";
    showTime.innerHTML= myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    case 6: 
    myDay = "Saturday";
    showTime.innerHTML= myTime.getDate()+" "+myDay+", "+myMonth+" "+
    myTime.getFullYear()+" .";
    break;
    }
}
setInterval(showDay, 1000);
    //ends here
        
//code controlling the SET button
alarm=false;
isAlarm = true;

let controlAlarm = () =>{
    btnStop.disabled = false;
    message.innerHTML = "You have set your alarm";
    alarm=true;
    isAlarm=false;
}

//check input
alarmSnooze = false;
var checkInput = function(){
    if( parseInt(inputHour.value)==parseInt(showHour.innerHTML)
        && parseInt(inputMinute.value)==parseInt(showMinute.innerHTML) && alarm===true
        )
    {
        ringAlarm.play();
        ringAlarm.loop=true;
        isAlarm=true;
        letRing =true;
        message.innerHTML = `WAKE UP!! it's
        ${inputHour.value} : ${inputMinute.value}
        <span> ${tMeridian} </span>`; 
        btnSnooze.disabled=false;
        btnStop.disabled=false;
        btnSnooze.style.opacity="1";
        save.disabled=false;
        btnSnooze.disabled=false;
        clearInterval(calSInnterval);
    }
    else if(alarm===true&&letRing===true){
        ringAlarm.play();
        ringAlarm.loop = true;
        message.innerHTML = `WAKE UP!! it's
        ${inputHour.value} : ${inputMinute.value}
        <span> ${tMeridian} </span>`;
        clearInterval(calSInnterval);
    }
    if(alarmSnooze===true){
        btnSnooze.disabled=true;
        btnSnooze.style.opacity="0.5";
    }
    else{
        btnSnooze.disabled=false;
    }
}
setInterval(checkInput, 1000);
//ends here

//Pre-stop button
let pauseAlarm = () =>{
    let askQuestion = "Why do you want to stop me?";
    document.getElementById('message').innerHTML = askQuestion;
    btnOk.disabled = false;
}
//ends here
    
//main stop
let pauseAlarm2 = () =>{
    let cAnswer = "tired";
    let uAnswer = document.getElementById('uAns').value;
    trackDB=false;
    if(uAnswer==""){
        document.getElementById('message').innerHTML = "Enter a reason";
        return;
    }
    if((localTrack===true)&&(cAnswer==uAnswer)){
        message.innerHTML = "database stored alarm cancelled";
        message2.innerHTML = "database stored alarm terminated!";
        btnSnooze.opacity= 0.3;
        btnSnooze.disabled = true;
        ringAlarm.pause();
        trackDB=false;
        localTrack=false; letLocal===true;
    }
    if((alarm===true)&&(cAnswer==uAnswer)){
        ringAlarm.pause();
        document.getElementById('message').innerHTML = "Alarm stopped! Set Alarm again";
        document.getElementById('uAns').value = "";
        save.disabled=false;
        btnSnooze.disabled=false;
        alarm=false; isAlarm=false;
    }
    if(cAnswer!=uAnswer){
        document.getElementById('message').innerHTML = "Reason not genuine!";
        ringAlarm.play();
        console.log(alarm);
    }
}

    //ends here


let message2 = document.getElementById('message2');
let spin = document.getElementById("spin");
let sa = document.getElementById('sA');
let saveAlarm = () =>{
    showL.style.display = "flex";
    btnOff.style.display = "none";
    msgOff.style.display= "none";
    setBoxOff.style.display = "none";
    eventOff.style.display = "block";
    returnOff.style.display = "block";
    eventChk.style.display = "block";
    sa.innerText = "INCLUDE EVENTS HERE";
}

returnOff.addEventListener("click", returnBtn);
 function returnBtn(){
    var main = document.getElementById('main');
    main.classList.toggle('slideInReturn');
    showL.style.display = "none";
    btnOff.style.display = "block";
    msgOff.style.display= "block";
    setBoxOff.style.display = "flex";
    eventOff.style.display = "none";
    returnOff.style.display = "none";
    eventChk.style.display = "none";
    eventStatus.style.display = "none";
    sa.innerText = "SET YOUR ALARM  HERE";
}

var clear = document.getElementById('clear');
var alarmArrayObjects = [];
var alarmObjects = {};
var hrL = document.getElementById('hr');
var minL = document.getElementById('min');
var meridianL = document.getElementById('meridian');

spin.style.display = "block";
spin.classList.add("loader");
message2.style.display = "block";
var showL = document.getElementById('showL');
showL.style.display = "none";
var msgL = document.getElementById('msgL');
var loader = document.getElementById('loader');
msgL.style.display = "none";

function storeAlarmLocal(){
    msgL.style.display = "flex";
    alarmObjects.hour = hrL.value;
    alarmObjects.minute = minL.value;
    alarmObjects.meridian = meridianL.value;
    console.log(alarmObjects);
    
    console.log(getAlarmObjects);
    
    //validation
    if(hrL.value==""||minL.value==""){
        msgL.innerHTML = `Input time must not be empty,<br>
        try giving it values.`;
        return false;
    }
    if(hrL.value<0||minL.value<0){
        msgL.style.display = "flex";
        msgL.innerHTML = `time must not be negative,<br>
        try postive integers.`;
        return false;
    }
    if((hrL.value>12)&&(minL.value>59)){
        msgL.style.display = "flex";
        msgL.innerHTML = `${hrL.value} & ${minL.value}<br> are large time input values!.<br>
        ...use 12-hour fomart.`;
        return false;
    }
    if(hrL.value>12){
        msgL.style.display = "flex";
        msgL.innerHTML = `${hrL.value} is a large hour value!<br> ...use 12-hour fomart.`;
        return false;
    }
    if(minL.value>59){
        msgL.style.display = "flex";
        msgL.innerHTML = `${minL.value} is a large minute value!`;
        return false;
    }
    //ends here
    var getAlarmObjects = JSON.parse(localStorage.getItem("myEvents"));
    
    if(getAlarmObjects){
        alarmArrayObjects = getAlarmObjects;
    }  
        setTimeout(function(){
            alarmArrayObjects.push(alarmObjects);
            loader.classList.add("loader");
            msgL.innerHTML="Pushing...";
            document.getElementById('saveE').innerHTML = "Saving...";
            localStorage.setItem("myEvents", JSON.stringify(alarmArrayObjects));
        }, 1000);
        setTimeout(function(){
            msgL.innerHTML="pushed...";
            retrieveAlarm();
        }, 1700);
        setTimeout(function(){
            loader.classList.remove('loader');
            msgL.style.display = "none";
            document.getElementById('saveE').innerHTML = "Save";
            trackDB = true;
            retrieveAlarm();
        }, 2400);
        btnStop.disabled = false;
    
}

let toggle=true;
var eventInvoke = function(){
    if(toggle===true){
        retrieveAlarm();
        eventStatus.style.display = "block";
        eventChk.innerText= "Close";
        eventChk.style.color= "lightpink";
        toggle=false;
    }
    else{
        eventStatus.style.display = "none";
        eventChk.innerText= "See Events";
        eventChk.style.color= "white";
        toggle=true;
    }
}

var event = document.getElementById("eventsDiv");
var notify = document.getElementById("notify");
var eventL = document.getElementById("eventL");
event.style.textAlign = "left";
event.style.marginLeft = "20px";
eventL.style.textAlign = "left";
eventL.style.marginLeft = "20px";


var count;
function retrieveAlarm(){
    eventStatus.style.height = "120px";
    eventStatus.style.overflowY = "scroll";
    clear.style.display ="none";
    count = 1;
    event.innerHTML ="";
    let getAlarmObjectsM = JSON.parse(localStorage.getItem('myEvents'));
    if(getAlarmObjectsM==null||getAlarmObjectsM==undefined||getAlarmObjectsM==""){
        msgL.style.display = "flex"
        notify.innerHTML = "Sorry, You have no pending events";
        clear.style.display = "none";
        eventStatus.style.height = "65px";
        eventStatus.style.overflowY = "hidden";

            setTimeout(function(){
                loader.classList.add("loader");
                msgL.innerHTML= "getting...";
                }, 1000);
            setTimeout(function(){
                loader.classList.remove("loader");
                msgL.innerHTML = `
                <em>
                    Sorry, couldn't find any events. <br>Perhaps you've cleared it.<br>
                    or Try saving new events.
                </em>`;
                clear.style.display = "none";
            }, 2000);
    }

if(getAlarmObjectsM){
    msgL.style.display = "flex";
    eventStatus.style.height = "120px";
    eventStatus.style.overflowY = "scroll";
    getAlarmObjectsM.map(events => {
    event.innerHTML+= `
    <div style= 'border: 1px solid #420714; height: 20px;'>
        ${count} .
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> ${events.hour}&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp${events.minute} &nbsp${events.meridian}</span>
        <a href="#" onclick="del();">del</a>
    </div>`;
        count++;
    });
    count-=1; 
    notify.innerHTML=`<b>Event's Notification:</b> <br>You have ${count} pending events`;
    msgL.style.display = "flex";
    msgL.innerHTML = `I searched your database, <br> ...you have pending ${count} alarms`;
    clear.style.display = "block";
    }   
}
retrieveAlarm();

function del(){
    var lists = document.getElementsByClassName('list');
    for(let q=0; q<lists.length; q++){
        lists[q].onclick = function(){
            this.parentElement.style.display= "none";
        }
    }
}

clearMe = false;
function clickMe(){
    clearMe = true;
    if(clearMe===true){
        localStorage.clear();
        for(let p=0; p<=alarmArrayObjects.length; p++){
            alarmArrayObjects.pop(alarmArrayObjects[p]);
        }
        location.reload();
        eventStatus.style.height = "65px";
        eventStatus.style.overflow= "initial";
        event.innerHTML = "";
        notify.innerHTML = "You have cleared your events";
        clear.style.display = "none";
        msgL.style.display = "flex";
        msgL.innerHTML = `
        <em>
            You have just cleared your events, <br>but you can save new events
            <br> by clicking the
            <a href='#saveE' style='font-size: 10px;'>Save button.</a>
        </em>`;
    }
}
function clickMe2(){
    msgL.innerHTML = "";
    msgL.innerHTML = `
    <h5>
        <em>
            You just aborted the clear Events, <br> but you can reinvoke it.<br>
            This message will  clear in Seven seconds.
        <em>
    </h5>`;
    setTimeout(function(){
        msgL.innerHTML = "";
    }, 7000);
    clearMe = false;
    if(clearMe===false){
        return false;
    }
}

function clearLocal(){
    msgL.style.display= 'flex';
    msgL.innerHTML = `
    <h4>
        <em>Please, you are about to clear<br> all your events. <br> Are you sure you want to do this?</em><br>
        <div id='a'>
            <a href='#' onclick='clickMe()'>Yes</a>
            <a href='#' onclick='clickMe2()'>No</a>
        </div>
    </h4>`;
    var a = document.getElementById('a');
    a.style.marginTop = "10px";
    a.style.display = "flex";
    a.style.justifyContent = "center";
}

trackDB=false;
var myIndex = localStorage.getItem('myIndex');
console.log(myIndex);
function checkAlarmLocal(){
    
    const myTime = new Date();
    let myHour = myTime.getHours();
    let myMinute = myTime.getMinutes();
    
      let getAlarmObjectsL = JSON.parse(localStorage.getItem("myEvents"));
    if(getAlarmObjectsL!=undefined||getAlarmObjectsL!=undefined){
        for(t=0; t<getAlarmObjectsL.length; t++){
            if( (getAlarmObjectsL[t].hour==showHour.innerHTML)
                &&(getAlarmObjectsL[t].minute==showMinute.innerHTML)
                &&(getAlarmObjectsL[t].meridian==tMeridian)&&trackDB){
                localStorage.setItem("myIndex", t);
                localTrack = true;
                ringAlarm.play();
                ringAlarm.loop = true;
                document.getElementById("dis3").disabled = true;
                save.disabled=false;
                message.innerHTML = "";
                message.innerHTML = `WAKE UP from database stored time!!<br>it's 
                ${getAlarmObjectsL[t].hour} : ${getAlarmObjectsL[t].minute} ${getAlarmObjectsL[t].meridian}`;
                message2.innerHTML = "alarm fulfilled!";
                btnSnooze.disabled = false;
                btnStop.disabled=false;
                btnSnooze.style.opacity = "1";
                clearInterval(calSInnterval);
                break;
            }
            else if(localTrack===true&&letLocal===true){
                message.innerHTML = `WAKE UP from database stored time!!<br>it's 
                ${getAlarmObjectsL[t].hour} : ${getAlarmObjectsL[t].minute} ${getAlarmObjectsL[t].meridian}`;
                message2.innerHTML = "alarm fulfilled!";
                clearInterval(calSInnterval);
            }
        }
    }
}
var checkDB = setInterval(checkAlarmLocal, 1000);
checkAlarmLocal();
//snoozing alarm function
function snoozeAlarm(){
    alarmSnooze=true;
    letRing = false;
    isAlarm=false;
    document.getElementById("dis3").disabled=false;
    btnStop.disabled = false;
    
    if(alarm===true&&(inputMinute.value>=0&&inputMinute.value<=49)){
        inputMinute.value = parseInt(inputMinute.value)+10;
        ringAlarm.pause();
        message.innerHTML = "Alarm snoozed... 10minutes";
    }
    else{
        if(alarm===true&&inputMinute.value>50){
            inputHour.value = parseInt(inputHour.value)+1;
            let M = parseInt(inputMinute.value) + 10;
            inputMinute.value = parseInt(M) - 60;
            ringAlarm.pause();
            message.innerHTML = "Alarm snoozed... 10minutes";
        }
    }
    if(localTrack===true&&(getAlarmObjectsL[myIndex].minute>=0&&getAlarmObjectsL[myIndex].minute<=49)){
        getAlarmObjectsL[myIndex].minute = (parseInt(getAlarmObjectsL[myIndex].minute)+10);
        getAlarmObjectsL = alarmArrayObjects;
        localStorage.setItem("myEvents", JSON.stringify(alarmArrayObjects));
        message.innerHTML = "Alarm snoozed... 10minutes database";
        message2.innerHTML = "Alarm snoozed... 10minutes";
    } 
    else{
        if(localTrack&&getAlarmObjectsL[myIndex].minute){
            getAlarmObjectsL[myIndex].hour = (parseInt(getAlarmObjectsL[myIndex].hour)+1);
            getAlarmObjectsL[myIndex].minute = (parseInt(getAlarmObjectsL[myIndex].minute + 10) - 60);
            getAlarmObjectsL = alarmArrayObjects;
            localStorage.setItem("myEvents", JSON.stringify(alarmArrayObjects));
            message2.innerHTML = "Alarm snoozed... 10minutes";
            message.innerHTML = "Alarm snoozed";
        }
        else{
            ringAlarm.pause();
        }
    } 
    
}
//ends here
