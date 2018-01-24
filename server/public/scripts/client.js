console.log('js loaded');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', [ '$http', function($http){
    console.log('GalleryController running');
    const self = this;
    self.likeCounter = 0;
    self.likeButton = function(){
        console.log('clicked like button');
        self.likeCounter += 1; 
    }
    self.imageObject = {
        show: true,
        textShow:false,
        likeCounter: 0
    }
    self.toggleShowTextOn = function(){
        
        self.imageObject = {
            show: false,
            textShow: true
        }
    }
    self.toggleShowTextOff = function(){
        self.imageObject = {
            show: true,
            textShow: false
        }
    }
}]);// end Gallery Controller
