'use strict';

angular.module('newApp')
  .controller('apiCtrl', function ($scope, layoutApiService, applicationService) {
      $scope.$on('$viewContentLoaded', function () {
          //applicationService.init();

          $('[data-toggle]').on('click', function (event) {
              event.preventDefault();
              var toggleLayout = $(this).data('toggle');
              if (toggleLayout == 'rtl') applicationService.toggleRTL();
              if (toggleLayout == 'sidebar-behaviour') applicationService.toggleSidebar();
              if (toggleLayout == 'boxed') applicationService.toggleboxedLayout();
              if (toggleLayout == 'topbar') applicationService.toggleTopbar();
          });

          layoutApiService.init();
      });
  });