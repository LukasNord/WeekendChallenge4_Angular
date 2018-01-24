console.log('js loaded');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', [ '$http', function($http){
    console.log('GalleryController running');
    const self = this;
    self.pictureList = [
        {
            url: '/assets/image3.jpg',
            caption: 'Camping Trip in Moab, Utah',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image4.jpg',
            caption: 'Bonnie showing the huge snow pack at Crater Lake!',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image5.jpg',
            caption: 'Crater Lake in all its glory!',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image6.jpg',
            caption: 'The tetons.  Drove through here on our way from Oregon.',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image7.jpg',
            caption: 'Baloo! Our lovable adopted friend.',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image8.jpg',
            caption: 'Downtown Portland from the Morrison Bridge.  Part of my daily walking commute to work.',
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image9.jpg',
            caption: "Oliver, our friend's cat we were watching",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image10.jpg',
            caption: "Snowshoeing on Mount Hood after a 3 foot snow fall",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image11.jpg',
            caption: "View from our downtown Portland apartment during a rare snow event.",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image16.jpg',
            caption: "A beautiful Lily I found while walking around Portland",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image13.jpg',
            caption: "The Thirsty Sasquatch bar in Vancouver, WA.  Bonnie's band 'Dogs and Beer' setting up before a show.",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image14.jpg',
            caption: "Isla Sorna, a neat park our eccentric grandfather started.",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image15.jpg',
            caption: "Weezer concert from last Summer.",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image17.jpg',
            caption: "Mason Jennings Concert from last Summer",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image18.jpg',
            caption: "Random car kitty getting scritches",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image19.jpg',
            caption: " Road Trip to Red Rocks Amphitheatre outside of Denver.  Spoon and The Shins concert last fall for my birthday",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image20.jpg',
            caption: "Weezer concert from last Summer.",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image21.jpg',
            caption: "Sleepy Dog",
            likes: 0,
            showCaption: false,
        },
        {
            url: '/assets/image22.jpg',
            caption: "Creepy Dog!",
            likes: 0,
            showCaption: false,
        },
        


    ];


    self.toggleCaption = function(picture) {

        picture.showCaption = !picture.showCaption;
        
    }

    self.likeButton = function(picture) {

        picture.likes++;
    }




 
}]);// end Gallery Controller
