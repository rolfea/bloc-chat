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
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
      {path: '/rooms/...', name: 'Rooms', component: 'rooms', useAsDefault: true},
    ],
  });
