console.log('js loaded');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController1', [ '$http', function($http){
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
myApp.controller('GalleryController2', [ '$http', function($http){
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
myApp.controller('GalleryController3', [ '$http', function($http){
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
myApp.controller('GalleryController4', [ '$http', function($http){
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
myApp.controller('GalleryController5', [ '$http', function($http){
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
myApp.controller('GalleryController6', [ '$http', function($http){
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
