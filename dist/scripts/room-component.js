(function() {
  angular
    .module('rooms', ['firebase'])

    .component('rooms', {
      template: "<ng-outlet></ng-outlet>",
      $routeConfig: [
        { path: '/', name: 'RoomList', component: 'roomList', useAsDefault: true },
        { path: '/:id', name: 'RoomDetail', component: 'roomDetail' }
      ]
    });
})();
