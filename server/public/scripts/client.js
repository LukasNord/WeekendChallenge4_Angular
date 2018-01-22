console.log('js loaded');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', [ '$http', function($http){
    console.log('GalleryController running');
    const self = this;

    self.likeButton = function(){
        console.log('clicked like button');
        
    }





















}]);// end Gallery Controller