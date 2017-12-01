'use strict';

/**
 * @ngdoc overview
 * @name security
 * @description
 * # security
 *
 * Main module of the application.
 * RestangularProvider
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngMessages from 'angular-messages';
import restangular from 'restangular';
import router from './router/router.js';
import controllers from './controllers/mainController';
import services from './servers/mainServer';
export default angular.module('APP',[
    ngAnimate,
    ngCookies,
    ngMessages,
    uiRouter,
    restangular,
    controllers,
    services
  ]).config(router)
