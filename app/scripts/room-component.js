(function() {
  angular
    .module('blocChat')
    .factory('Room', ['$fireBaseArray', Room])
    .component('rooms' {
      templateUrl: 'rooms.html',
      $routeConfig: [
        { path: '/', component: 'rooms' }
      ]
    });

  function Room($fireBaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat27.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }
})
