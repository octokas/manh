angular.module('newApp').controller('mainCtrl',
    ['$scope', 'applicationService', 'quickViewService', 'builderService', 'pluginsService', '$location',
        function ($scope, applicationService, quickViewService, builderService, pluginsService, $location) {
            $(document).ready(function () {
                applicationService.init();
                quickViewService.init();
                builderService.init();
                pluginsService.init();
                Dropzone.autoDiscover = false;
            });

            $scope.$on('$viewContentLoaded', function () {
                pluginsService.init();
                applicationService.customScroll();
                applicationService.handlePanelAction();
                $('.nav.nav-sidebar .nav-active').removeClass('nav-active active');
                $('.nav.nav-sidebar .active:not(.nav-parent)').closest('.nav-parent').addClass('nav-active active');

                if($location.$$path == '/' || $location.$$path == '/layout-api'){
                    $('.nav.nav-sidebar .nav-parent').removeClass('nav-active active');
                    $('.nav.nav-sidebar .nav-parent .children').removeClass('nav-active active');
                    if ($('body').hasClass('sidebar-collapsed') && !$('body').hasClass('sidebar-hover')) return;
                    if ($('body').hasClass('submenu-hover')) return;
                    $('.nav.nav-sidebar .nav-parent .children').slideUp(200);
                    $('.nav-sidebar .arrow').removeClass('active');
                }
                if($location.$$path == '/'){
                    $('body').addClass('dashboard');
                }
                else{
                    $('body').removeClass('dashboard');
                }
                
                $.material.init();

                $(document).on('click.card', '.card', function (e) {
                    if ($(this).find('.card-reveal').length) {
                        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
                            $(this).find('.card-reveal').velocity(
                                {translateY: 0}, {
                                    duration: 225,
                                    queue: false,
                                    easing: 'easeInOutQuad',
                                    complete: function() { $(this).css({ display: 'none'}) }
                                }
                           );
                        }
                        else if ($(e.target).is($('.card .activator')) ||
                                $(e.target).is($('.card .activator i')) ) {
                            $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
                        }
                    }
                });

            });

            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

        }]);
