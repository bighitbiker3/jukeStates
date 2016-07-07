// 'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider){
  $stateProvider.state('allAlbums', {
    url: '/albums',
    templateUrl: '/js/templates/albumsTemplate.html',
    controller: 'AlbumsCtrl'
  })
})

juke.config(function($stateProvider){
	$stateProvider.state('allArtists',{
		url: '/artists',
		templateUrl: 'js/templates/artistsTemplate.html',
		controller: 'ArtistsCtrl'
	})
})

juke.config(function($stateProvider){
	$stateProvider.state('currentArtist',{
		url: '/artists/:id',
		templateUrl: 'js/templates/artistTemplate.html',
		controller: 'ArtistCtrl'
	})
})

juke.config(function($stateProvider){
	$stateProvider.state('currentAlbum')ß
})