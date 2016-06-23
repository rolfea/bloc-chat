(function(){
  angular.module('rooms')
    .component('roomList', {
      templateUrl: 'templates/roomlist.html',
      controller: RoomListComponent
    });

    function RoomListComponent($http, $q, $firebaseArray) {
      var $ctrl = this;
      var firebaseRef = new Firebase("https://bloc-chat27.firebaseio.com/");
      $ctrl.roomList = $firebaseArray(firebaseRef);
      $ctrl.newRoomName = "Room Name";

      // Add Chat Room to Array and print id to console on page load
      $ctrl.addRoom = function() {
        $ctrl.roomList.$add({"roomName": $ctrl.newRoomName})
      }

      $ctrl.removeRoom = function(listPosition) {
        var removeThisItem = $ctrl.roomList[listPosition];
        $ctrl.roomList.$remove(removeThisItem)        
      }



      // activate();
      //
      // function activate() {
      //   get_rooms().then(function(rooms) {
      //     console.log(rooms);
      //     $ctrl.roomList = rooms;
      //   });
      // }
      //
      // function get_rooms() {
      //   // return $http.get("https://gist.github.com/rolfea/44309527970b6dfb71214571bb8fa649");
      //
      //   return $q.when(foo());
      //
      //   function foo() {
      //     return ['Room One', 'Room Two', 'Room 3'];
      //   }
      // }
    }

})();
