var app = angular.module('SummerCampApp', [
  "ngRoute",
  "ngTouch",
  "mobile-angular-ui"
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',            {templateUrl: "home.html"});
  $routeProvider.when('/rules',       {templateUrl: "rules.html"}); 
  $routeProvider.when('/schedule',    {templateUrl: "schedule.html"}); 
  $routeProvider.when('/map',         {templateUrl: "map.html"}); 
  $routeProvider.when('/fellowships', {templateUrl: "fellowships.html"}); 
});

/*app.service('analytics', [
  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    var send = function(evt, data) {
      ga('send', evt, data);
    }
  }
]);*/


app.controller('MainController', function($rootScope, $scope){

  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });

  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });
  
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
  
  $scope.contactPersons = [
    { name: "Johan Ho", title: "App responsible", phone: "+47 980 37 910" },
  ];
  
  $scope.fellowships = [
    { name: 'ALIVE', city: 'Oslo', url: 'http://nccc.se/alive/' }
  ];
  
  $scope.days = [
    { name: 'Monday', number: 1 },
    { name: 'Tuesday', number: 2 },
    { name: 'Wednesday', number: 3 },
    { name: 'Thursday', number: 4 },
    { name: 'Friday', number: 5 },
    { name: 'Saturday', number: 6 },
    { name: 'Sunday', number: 0 },
  ];
  $scope.entries = parseCalData(scheduleData);

});

function parseCalData(data) {
  console.debug(data.feed.entry[0]);
  entries = [];
  data.feed.entry.forEach(function(entry){
    startTime = new Date(entry.gd$when[0].startTime);
    endTime = new Date(entry.gd$when[0].endTime);
    entries.push( {
      day: startTime.getDay(),
      title: entry.title.$t,
      start: fixTime(startTime),
      end: fixTime(endTime),
      } );
  });
  return entries;
}

function fixTime(date) {
  var time = date.getHours()+':';
  if (date.getMinutes()<10)
    time += '0';
  time += date.getMinutes();
  return time;
}