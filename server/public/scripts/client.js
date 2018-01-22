console.log('js loaded');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', [ '$http', function($http){
    console.log('GalleryController running');
    const self = this;

    self.likeButton = function(){
        console.log('clicked like button');
        
    }


    self.imageObject = {
        show: true,
        textShow:false
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