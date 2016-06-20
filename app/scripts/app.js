angular.module('blocChat', [
  'firebase',
  'ngComponentRouter',
  'rooms'
])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  .value('$routerRootComponent', 'blocChat')

  .component('blocChat', {
    templateUrl: "templates/app.html",
    $routeConfig: [
      {path: '/rooms/...', name: 'Rooms', component: 'rooms', useAsDefault: true},
    ],
    controller: function() {
      console.log("asdfasdf");
    }
  });
