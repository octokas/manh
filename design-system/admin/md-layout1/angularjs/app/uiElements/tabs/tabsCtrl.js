angular.module('newApp')
  .controller('tabsCtrl', ['$scope', 'pluginsService', function ($scope, pluginsService) {
      $scope.isTabActive = true;
  }]);
