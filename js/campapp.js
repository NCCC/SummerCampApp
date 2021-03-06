var app = angular.module('SummerCampApp', [
  "ngRoute",
  "ngTouch",
  "angular-carousel",
  "mobile-angular-ui",
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',            {templateUrl: "home.html"});
  $routeProvider.when('/rules',       {templateUrl: "rules.html"}); 
  $routeProvider.when('/schedule',    {templateUrl: "schedule.html"}); 
  $routeProvider.when('/map',         {templateUrl: "map.html"}); 
  $routeProvider.when('/groups',      {templateUrl: "groups.html"}); 
  $routeProvider.when('/activities',  {templateUrl: "activities.html"}); 
  $routeProvider.when('/links',       {templateUrl: "links.html"}); 
});


app.controller('MainController', function($rootScope, $scope, $interval){
  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });

  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });
  
  $scope.title = 'SC2015';
  
  $scope.day_names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  $scope.rules = [
    "1. Always listen to and cooperate with your group leaders.",
    "2. Go to bed in time. Be on time for all meetings.",
    "3. You are not allowed to change rooms without permission from the camp committee.",
    "4. You are not allowed to be in the rooms of people of opposite sex.",
    "5. Don't leave the camp site without permission!",
    "6. Smoking, drinking alcohol and gambling is strictly forbidden.",
    "7. Keep the camp site clean.",
    "8. Don't swim alone.",
    "9. If any camp property is damaged, please contact a leader.",
    "10. Take care of your own stuff! We are not responsible for anything lost or stolen.",
    "Any camper who is unwilling to abide by these camp rules may be sent home!",
  ];
  
  $scope.contact_persons = [
    { name: "Zhiying Zhang Rasmussen", title: "Doctor", label: "danger", phone: "+46 735699569", location: "Medical room, Rediviva basement" },
    { name: "Kexin Chen", title: "Transport", label: "info", phone: "+46 707776223" },
    { name: "Hanlin Huang", title: "Transport", label: "info", phone: "+47 94052960" },
    { name: "Swedish emergency number", title: "In case of emergency", label: "danger", phone: "112" },
  ];
  
  $scope.groups = [
    { name: "The Growthful Golf Balls",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Prayerful Paintballs",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Trustful Tennisballs",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Faithful Footballs",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Bravery Bowling Balls",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Creative Climber",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Successful Segway",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Respectful Rollercoaster",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Grateful Go-kart",
      cleaning_area: "",
      cleaning_days: "" },
    { name: "The Joyful Bungee-Jumper",
      cleaning_area: "",
      cleaning_days: "" },
  ];
  
  $scope.activity_days = [
    { name: "Tuesday",
      activities: [
        { name: "Activity 13:45-15:15 option 1: Making bracelets",
          responsible: "Canada Team",
          location: "Rediviva",
          signup: "No sign up needed",
          max_participants: 0,
        },
        {  name: "Activity 13:45-15:15 option 2: Field games",
          responsible: "Boston Team",
          location: "Outdoors (cancelled if it rains)",
          signup: "No sign up needed",
          max_participants: 25,
        },
        { name: "Activity 13:45-15:15 option 3: Board games",
          responsible: "Johan",
          location: "Library",
          signup: "No sign up needed",
          max_participants: 0,
        },
        { name: "Activity 18:45-20:15 option 1: Make Rice Crispy Treats",
          responsible: "Boston Team",
          location: "Arken",
          signup: "No sign up needed",
          max_participants: 0,
        },
        {  name: "Activity 18:45-20:15 option 2: Kubb",
          responsible: "Eric, Junjun, Enoch",
          location: "Outdoors, if good weather",
          signup: "No sign up needed",
          max_participants: "Optimally 8-16",
        },
        { name: "Activity 18:45-20:15 option 3: Board games",
          responsible: "Vilhelm, Philip",
          location: "Library",
          signup: "No sign up needed",
          max_participants: 0,
        }
      ],
    },
    { name: "Wednesday",
      activities: [
        { name: "Activity option 1: Taekwondo",
          responsible: "Dennis, David, Fion, Phoebe",
          location: "Outdoors",
          signup: "No sign up needed",
          max_participants: 0,
        },
        {  name: "Activity option 2: Crafts",
          responsible: "Iselin, Christine, Monica",
          location: "Rediviva",
          signup: "No sign up needed",
          max_participants: 0,
        },
        { name: "Activity option 3: Board games",
          responsible: "Vilhelm, Philip",
          location: "Library",
          signup: "No sign up needed",
          max_participants: 0,
        },
        {
          name: "Local group meeting",
          information: [
            "Meet with youth from your local area! The groups will be:",
            "- Stockholm, Eskilstuna and Uppsala",
            "- Norway (Oslo, Stavanger, Trondheim and Bergen)",
            "- Malmö, Helsingborg and Kristianstad",
            "- Göteborg, Halmstad, Gnosjö and Värnamo",
            "- Finland",
            "- Overseas",
          ]
        }
      ],
    },
    { name: "Thursday",
      activities: [
        { name: "Activity option 1: Football",
          responsible: "Enoch, Kwun Chuen",
          location: "Soccer field",
          signup: "Information will be given, last sign up Wednesday evening.",
          max_participants: 0,
        },
        { name: "Activity option 2: Board games",
          responsible: "Johan",
          location: "Library",
          signup: "No sign up needed",
          max_participants: 0,
        }
      ],
    },
  ];
  
  $scope.map_locations = [
    { number: 1, name: 'Dining hall' },
    { number: 2, name: 'Östergården' },
    { number: 3, name: 'Gym hall / Jubileumshallen' },
    { number: 4, name: 'Sjöstugan' },
    { number: 5, name: 'Timmerstugan' },
    { number: 6, name: 'Södergården' },
    { number: 7, name: 'Chapel' },
    { number: 8, name: 'Strandvillan' },
    { number: 9, name: 'Ängsvillan' },
    { number: 10, name: 'Västergården' },
    { number: 11, name: 'Rediviva' },
    { number: 12, name: 'Norrgården' },
    { number: 13, name: 'School building (Classroom 1 - 7, Arken, textile room, craft rooms, hemskolan)' },
    { number: 14, name: 'Storgården' },
    { number: 15, name: 'Solsidan' },
    { number: 16, name: 'Åkergården' },
  ];
  
  $scope.fellowships = [
    { name: 'NCCC', url: 'http://nccc.se' },
    { name: 'NCCC on Facebook', url: 'https://www.facebook.com/pages/NCCC/115899265118813' },
    { name: 'Agape Youth', city: 'Malmö', url: 'https://www.facebook.com/groups/172209486156469/' },
    { name: 'ALIVE', city: 'Oslo', url: 'http://nccc.se/alive/' },
    { name: 'Elpida Youth', city: 'Göteborg', url: 'https://www.facebook.com/elpida.youth' },
    { name: 'FourTwelve', city: 'Stockholm', url: 'https://www.facebook.com/ncccfourtwelve' },
    { name: 'Joy', city: 'Helsinki', url: 'https://www.facebook.com/Joy.youth' },
  ];
  
  $scope.fixDate = function(dateobj) {
    return $scope.day_names[dateobj.getDay()]+' '+dateobj.getDate()+'.'+(dateobj.getMonth()+1);
  }

  $scope.fixTime = function(dateobj) {
    var time = dateobj.getHours()+':';
    if (dateobj.getMinutes()<10)
      time += '0';
    time += dateobj.getMinutes();
    return time;
  }

  $scope.activeDay = function(date) {
    var d = new Date();
    // Set this date as the active date if it is the current date,
    // OR if this date is the earliest date that exists in the schedule.
    // If multiple dates are "active", only the last one will be used.
    if (d.toDateString() == date.dateobj.toDateString() || $scope.entries[0].startTime.toDateString() == date.dateobj.toDateString())
      return 'active';
    return '';
  };
  
  $scope.dates = [];
  $scope.entries = [];
  first_hour = 0;
  for (var index = 0; index < scheduleData.items.length; index++) {
    entry = scheduleData.items[index];
    startTime = new Date(entry.start.dateTime);
    endTime = new Date(entry.end.dateTime);
    
    // Add this date to the dates list if it isn't already in there
    if ($scope.dates.length == 0 || $scope.dates[$scope.dates.length-1].dateobj.toDateString() != startTime.toDateString()) {
      first_hour = startTime.getHours();
      $scope.dates.push({
        dateobj: startTime,
        date_text: $scope.fixDate(startTime),
        first_hour: first_hour,
        last_hour: 23,
        container_height: (24-first_hour)*60
      });
    }
       
    var top = ((startTime.getHours()-first_hour)*60 + startTime.getMinutes());
    var height = (endTime - startTime)/60/1000;
    
    // Then add event to entries array
    $scope.entries.push( {  
      day: startTime.getDay(),
      startTime: startTime,
      endTime: endTime,
      date_text: $scope.fixDate(startTime),
      title: entry.summary,
      location: entry.location,
      top: top,
      height: height,
      left: 0,
      width: 100
      } );
  }
  var prevEndTime = new Date(scheduleData.items[scheduleData.items.length-1].end.dateTime);
  $scope.dates[$scope.dates.length-1].last_hour = prevEndTime.getHours();
  $scope.dates[$scope.dates.length-1].container_height = (prevEndTime.getHours()-first_hour+1)*60;
  
  $scope.hoursArray = function( first_hour, last_hour ) {
    var hours = [];
    for (var hour = first_hour; hour <= last_hour; hour++)
      hours.push( hour );
    return hours;
  }
  
  // Sort it by starting time, and then by ending time.
  $scope.entries = $scope.entries.sort(function(e1,e2) {
    if (e1.startTime < e2.startTime) return -1;
    if (e1.startTime > e2.startTime) return 1;
    if (e1.endTime < e2.endTime) return -1;
    if (e1.endTime > e2.endTime) return 1;
    return 0;
  });
  
  lastEventEnding = null;
  columns = [];
 // Iterate over the sorted array
  for (var index=0; index < $scope.entries.length; index++) {
    e = $scope.entries[index];
    if (lastEventEnding !== null && e.startTime >= lastEventEnding) {
      PackEvents( columns );
      columns = [];
      lastEventEnding = null;
    }

    var placed = false;
    for (var i = 0; i < columns.length; i++) {                   
      var col = columns[ i ];
      if (!collidesWith( col[col.length-1], e ) ) {
        col.push(e);
        placed = true;
        break;
      }
    }

    if (!placed) {
      columns.push([e]);
    }

    if (lastEventEnding === null || e.endTime > lastEventEnding) {
      lastEventEnding = e.endTime;
    }
  }

  if (columns.length > 0) {
    PackEvents( columns );
  }

  $scope.upcoming = function (event) {
    return event.endTime >= (new Date());
  };
  $scope.activityToday = function (activity_day) {
    var day_num = $scope.day_names.indexOf(activity_day.name);
    return ($scope.now.getDay() == day_num);
  };
  
  $scope.eventPercentage = function (event) {
    var now = new Date();
    if (now < event.startTime)
      return 0;
    if (now > event.endTime)
      return 100;
    return (now-event.startTime)*100/(event.endTime-event.startTime);
  };
  
  $scope.timeUntill = function (startTime) {
    var slices = [];
    var minutes = Math.floor((startTime-(new Date()))/60/1000);
    if (minutes < 0)
      return "";
    if (minutes < 1)
      return "less than a minute";
      
    var text;
    if (minutes > 24*60) {
      var days = Math.floor(minutes/60/24);
      text = days+" day";
      if (days > 1)
        text += "s";
      slices.push( text );
      minutes -= days*24*60;
    }
    if (minutes > 60) {
      var hours = Math.floor(minutes/60);
      text = hours+" hour";
      if (hours > 1)
        text += "s";
      slices.push( text );
      minutes -= hours*60;
    }
    if (minutes > 0) {
      text = minutes+" minute";
      if (minutes > 1)
        text += "s";
      slices.push( text );
    }
    if (slices.length > 1) {
      text = [slices.slice(0,-1).join(", "), slices[slices.length-1]].join(" and ");
    } else text = slices[0];
    return text;
  };
  
  $scope.openExternal = function(url) {
    window.open(url,'_system');
    return false;
  }
  
  $scope.now = new Date();
  $scope.updateNextEvent = function() {
    $scope.now = new Date();
    
    /*if ($scope.entries[0].startTime.getMonth() != 5) {
      $scope.entries[0].startTime.setMonth( 5 );
      $scope.entries[0].startTime.setDate( 13 );
      $scope.entries[0].startTime.setHours( 21 );
      $scope.entries[0].startTime.setMinutes( 45 );
      
      $scope.entries[0].endTime.setMonth( 5 );
      $scope.entries[0].endTime.setDate( 13 );
      $scope.entries[0].endTime.setHours( 22 );
      $scope.entries[0].endTime.setMinutes( 45 );
    } else 
    $scope.entries[0].startTime.setMinutes( $scope.entries[0].startTime.getMinutes()-1 );
    $scope.entries[0].endTime.setMinutes( $scope.entries[0].endTime.getMinutes()-1 );*/
    //$scope.entries[0].startTime.setHours( $scope.entries[0].startTime.getHours()-1 );
  }
  
  $interval($scope.updateNextEvent, 1000);
  
  $scope.scheduleTabIndex = 0;
  $scope.activitiesTabIndex = 0;
});


function PackEvents( columns )
{
  var n = columns.length;
  for (var i = 0; i < n; i++) {
    var col = columns[ i ];
    for (var j = 0; j < col.length; j++)
    {
      var bubble = col[j];
      bubble.left = (i / n)*100;
      bubble.width = (100/n - 1);
    }
  }
}

function collidesWith( a, b )
{
  return a.endTime > b.startTime && a.startTime < b.endTime;
}

