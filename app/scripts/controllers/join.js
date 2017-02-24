'use strict';

/**
 * @ngdoc function
 * @name pubNubChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pubNubChatApp
 */

angular.module('pubNubChatApp')
  .controller('JoinCtrl',['$scope', '$rootScope', '$location', 'PubNub', function($scope, $rootScope, $location, a){
    $scope.data={
      username: 'User_' + Math.floor(Math.random() * 1000)
    };


    $scope.joinUS= function(){
      console.log("join...");
    };

  }]);
