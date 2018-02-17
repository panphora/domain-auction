//  input e.g.: 1518925275165
// output e.g.: "11 hours, 31 min, 22 sec"

// in one day
addCountdownToElement(1518925275165, [".jetplot.countdown", ".ohnote.countdown", ".riotpost.countdown"]);
// in two days
addCountdownToElement(1519011678316, [".wordgrid.countdown", ".controlwar.countdown", ".impossiblegoal.countdown"]);
// in three days
addCountdownToElement(1519098081524, [".itakephotographs.countdown", ".itstimeline.countdown", ".wowmash.countdown", ".portobot.countdown"]);

function addCountdownToElement (msNum, selectorStringArr) {
  selectorStringArr.forEach(function (selectorString) {
    var element = document.querySelector(selectorString);

    setInterval(function () {
      element.innerHTML = "Auction ends in<br>" + getTimeLeft(msNum);
    }, 1000); 
  });
}

function getTimeLeft (msNum) {
  var nowDate = new Date();
  var futureDate = new Date(msNum);
  var difference = futureDate - nowDate;

  return msToTime(difference);
}

function msToTime(duration) {
  var timeString = "";
  var days = parseInt(duration/(1000*60*60*24));
  var hours = parseInt((duration/(1000*60*60))%24);
  var minutes = parseInt((duration/(1000*60))%60);
  var seconds = parseInt((duration/1000)%60);

  if (days) {
    timeString += days + " days, ";
  }

  if (hours) {
    timeString += hours + " hours, ";
  }

  timeString += minutes + " min, ";
  timeString += seconds + " sec"

  return timeString;
}

// 1 day: 1518925275165
// 2 day: 1519011678316
// 3 day: 1519098081524

// 1 day diff: 85004696
// 2 day diff: 171303733
// 3 day diff: 257698011





