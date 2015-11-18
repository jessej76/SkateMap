'use strict';

/**
 * @ngdoc function
 * @name skateMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skateMapApp
 */
angular.module('skateMapApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  $(document).ready(function(){


      $("[data-toggle=tooltip]").tooltip();
  });
