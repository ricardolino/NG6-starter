import angular from 'angular';
import uiRouter from 'angular-ui-router';
import compTestComponent from './compTest.module';

let compTestModule = angular.module('compTest', [
  uiRouter
])

.component('compTest', compTestComponent)

.name;

export default compTestModule;
