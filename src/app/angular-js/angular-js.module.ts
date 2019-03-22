import { IAngularStatic } from 'angular';

declare const angular: IAngularStatic;

export const ngmodule = angular.module('AngularJS', ['ui.router', 'ngMaterial']);

ngmodule.config(($locationProvider: any, $stateProvider: any) => {

  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs', {
    url: '/angularjs',
    template: `
    <div class="container" ng-controller="AngularJSController">
    <h1>AngularJS Component</h1>
    <div>
    <md-input-container>
      <label>Param</label>
      <input ng-model="textModel">
    </md-input-container>
    <br>
      <md-button class="md-primary md-raised" ng-click="goToAngular()">
        Switch to Angular
      </md-button>
    </div>
    </div>`,
    controller: 'AngularJSController'
  });

  $stateProvider.state('angular', {
    url: '/angular',
    template: ''
  });
}).controller('AngularJSController', ($location: any, $scope: any) => {
  if ($location.search().hasOwnProperty('transferedParam')) {
    const textValue = $location.search()['transferedParam'];
    $scope.textModel = textValue;
  }
  $scope.goToAngular = () => {
    if ($scope.textModel) {
      $location.url('angular' + '?transferedParam=' + $scope.textModel);
    } else {
      $location.url('angular');
    }
  };
});