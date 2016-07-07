// 'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider){
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/js/templates/albumsTemplate.html',
    controller: 'AlbumsCtrl'
  })
})
