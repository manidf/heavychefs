// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var yourTube = angular.module('yourTube', ['ionic', 'starter.controllers'])

   yourTube.run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
         // for form inputs)
         if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
         }
         if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
         }
      });
   });

   yourTube.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

         .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
         })

         .state('app.search', {
            url: "/search",
            views: {
               'menuContent': {
                  templateUrl: "templates/search.html"
               }
            }
         })

         .state('app.presenters', {
            url: "/presenters",
            views: {
               'menuContent': {
                  templateUrl: "templates/presenters.html"
               }
            }
         })

         .state('app.talks', {
            url: "/talks",
            views: {
               'menuContent': {
                  templateUrl: "templates/talks.html",
                  controller: 'TalksCardCtrl'
               }
            }
         })

         .state('app.single', {
            url: "/talks/:talksId",
            views: {
               'menuContent': {
                  templateUrl: "templates/talks.html",
                  controller: 'TalksCtrl'
               }
            }
         });
      
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/talks');
   });
