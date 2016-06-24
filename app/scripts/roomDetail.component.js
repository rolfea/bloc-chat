(function() {
    angular.module('rooms')
      .component('roomDetail', {
        templateUrl: 'templates/roomdetail.html',
        bindings: { $router: "<" },
        controller: RoomDetailComponent
      });

      function RoomDetailComponent() {

      }
}());
