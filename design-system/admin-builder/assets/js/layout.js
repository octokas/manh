/* ============================================================
 * Layout Script
 =========================================================== */
 var  $logopanel = $('.logopanel');
 var  $topbar = $('.topbar');
 var  $sidebarFooter = $('.sidebar-footer');
 
/****  Initiation of Main Functions  ****/
$(document).ready(function() {

    setTimeout(function() {
        handleboxedLayout();
    }, 100);
    if ($('body').hasClass('sidebar-hover')) sidebarHover();

    $('[data-toggle]').on('click', function(event) {
        event.preventDefault();
        var toggleLayout = $(this).data('toggle');
        if (toggleLayout == 'sidebar-behaviour') toggleSidebar();
        if (toggleLayout == 'submenu') toggleSubmenuHover();
        if (toggleLayout == 'sidebar-collapsed') collapsedSidebar();
        if (toggleLayout == 'sidebar-hover') toggleSidebarHover();
        if (toggleLayout == 'boxed') toggleboxedLayout();
        if (toggleLayout == 'topbar') toggleTopbar();
    });

});

/****  Resize Event Functions  ****/

$(window).resize(function() {
    setTimeout(function() {
        handleboxedLayout();
    }, 100);
});


/* ==========================================================*/
/* LAYOUTS API                                                */
/* ========================================================= */

/* Create RTL: Sidebar on Right Side */
function enableRTL() {
    $('#switch-rtl').prop('checked', true);
    $('body').removeClass('rtl').addClass('rtl');
    $('html').removeClass('rtl').addClass('rtl');
    $('.sidebar').css('width', '');
    $('.sidebar .searchform input').css('width', '');
    $('.sidebar .sidebar-footer').css('width', '');
    $('.logopanel').css('width', '');
    $('.searchform input').css('width', '');
    $('.sidebar .sidebar-footer .pull-left').css('');
    $('.main-content').css('margin-left', '');
    $('.topbar').css('left', '');
    if ($('body').hasClass('sidebar-hover')) sidebarHover();
    $('#switch-rtl').prop('checked', true);
    handleboxedLayout();
    $.cookie('rtl', 1);
    $.cookie('rtl', 1, {
        path: '/'
    });
}

/* Remove RTL: Sidebar on Left Side */
function disableRTL() {
    $('#switch-rtl').prop('checked', false);
    $('html').removeClass('rtl');
    $('body').removeClass('rtl');
    $('.sidebar').css('width', '');
    $('.sidebar').css('left', '');
    $('.sidebar .searchform input').css('width', '');
    $('.sidebar .sidebar-footer').css('width', '');
    $('.logopanel').css('width', '');
    $('.searchform input').css('width', '');
    $('.sidebar .sidebar-footer .pull-left').removeAttr('style');
    $('.main-content').css('margin-right', '');
    $('.topbar').css('right', '');
    if ($('body').hasClass('sidebar-hover')) sidebarHover();
    handleboxedLayout();
    $.removeCookie('rtl');
    $.removeCookie('rtl', {
        path: '/'
    });
}

/* Toggle RTL */
function toggleRTL() {
    if ($('html').hasClass('rtl')) disableRTL();
    else enableRTL();
}

/* Create Sidebar Fixed */
function handleSidebarFixed() {
    // removeSidebarHover();
    $('#switch-sidebar').prop('checked', true);
    $('#switch-submenu').prop('checked', false);
    $.removeCookie('submenu-hover');
    if ($('body').hasClass('sidebar-top')) {
        $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
        $.removeCookie('fluid-topbar');
        $('#switch-topbar').prop('checked', true);
    }
    $('body').removeClass('fixed-sidebar').addClass('fixed-sidebar');
    $('.sidebar').height('');
    handleboxedLayout();
    if (!$('body').hasClass('sidebar-collapsed')) removeSubmenuHover();
    createSideScroll();
    $.removeCookie('fluid-sidebar');
    $.removeCookie('fluid-sidebar', { path: '/'});
    $.cookie('fixed-sidebar', 1);
    $.cookie('fixed-sidebar', 1, {
        path: '/'
    });
}

/* Create Sidebar Fluid / Remove Sidebar Fixed */
function handleSidebarFluid() {
    $('#switch-sidebar').prop('checked', false);
    if ($('body').hasClass('sidebar-hover')) {
        removeSidebarHover();
        $('#switch-sidebar-hover').prop('checked', false);
    }
    $('body').removeClass('fixed-sidebar');
    handleboxedLayout();
    destroySideScroll();
    $.removeCookie('fixed-sidebar');
    $.removeCookie('fixed-sidebar', {
        path: '/'
    });
    $.cookie('fluid-sidebar', 1);
    $.cookie('fluid-sidebar', 1);
    $.cookie('fluid-sidebar', 1, {
        path: '/'
    });
    $.cookie('fluid-sidebar', 1, {
        path: '/'
    });
}

/* Toggle Sidebar Fixed / Fluid */
function toggleSidebar() {
    if ($('body').hasClass('fixed-sidebar')) handleSidebarFluid();
    else handleSidebarFixed();
}

/* Create Sidebar on Top */
function createSidebarTop() {
    $('#switch-sidebar-top').prop('checked', true);
    removeSidebarHover();
    $('body').removeClass('sidebar-collapsed');
    $.removeCookie('sidebar-collapsed');
    $('body').removeClass('sidebar-top').addClass('sidebar-top');
    $('.main-content').css('margin-left', '').css('margin-right', '');
    $('.topbar').css('left', '').css('right', '');
    if ($('body').hasClass('fixed-sidebar') && !$('body').hasClass('fixed-topbar')) {
        $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
        $.removeCookie('fluid-topbar');
        $.removeCookie('fluid-topbar'), {
            path: '/'
        };
        $('#switch-topbar').prop('checked', true);
    }
    $('.sidebar').height('');
    destroySideScroll();
    $('#switch-sidebar-hover').prop('checked', false);
    handleboxedLayout();
    $.cookie('sidebar-top', 1);
    $.cookie('sidebar-top', 1, {
        path: '/'
    });
    $.removeCookie('sidebar-hover');
    $.removeCookie('sidebar-hover', {
        path: '/'
    });
}

/* Remove Sidebar on Top */
function removeSidebarTop() {
    $('#switch-sidebar-top').prop('checked', false);
    $('body').removeClass('sidebar-top');
    createSideScroll();
    $('#switch-sidebar-top').prop('checked', false);
    $.removeCookie('sidebar-top');
    $.removeCookie('sidebar-top', {
        path: '/'
    });
    handleboxedLayout();
}

/* Toggle Sidebar on Top */
function toggleSidebarTop() {
    if ($('body').hasClass('sidebar-top')) removeSidebarTop();
    else createSidebarTop();
}

/* Create Sidebar only visible on Hover */
function createSidebarHover() {
    $('body').addClass('sidebar-hover');
    $('body').removeClass('fixed-sidebar').addClass('fixed-sidebar');
    $('.main-content').css('margin-left', '').css('margin-right', '');
    $('.topbar').css('left', '').css('right', '');
    $('body').removeClass('sidebar-top');
    removeSubmenuHover();
    removeBoxedLayout();
    removeCollapsedSidebar();
    sidebarHover();
    handleSidebarFixed();
    $('#switch-sidebar-hover').prop('checked', true);
    $('#switch-sidebar').prop('checked', true);
    $('#switch-sidebar-top').prop('checked', false);
    $('#switch-boxed').prop('checked', false);
    $.removeCookie('fluid-topbar');
    $.removeCookie('sidebar-top');
    $.removeCookie('fluid-topbar', {
        path: '/'
    });
    $.removeCookie('sidebar-top', {
        path: '/'
    });
    $.cookie('sidebar-hover', 1);
    $.cookie('sidebar-hover', 1, {
        path: '/'
    });
}

/* Remove Sidebar on Hover */
function removeSidebarHover() {
    $('#switch-sidebar-hover').prop('checked', false);
    $('body').removeClass('sidebar-hover');
    if (!$('body').hasClass('boxed')) $('.sidebar, .sidebar-footer').attr('style', '');
    $('.logopanel2').remove();
    $.removeCookie('sidebar-hover');
    $.removeCookie('sidebar-hover', {
        path: '/'
    });
}

/* Toggle Sidebar on Top */
function toggleSidebarHover() {
    if ($('body').hasClass('sidebar-hover')) removeSidebarHover();
    else createSidebarHover();
}

/* Create Sidebar Submenu visible on Hover */
function createSubmenuHover() {
    removeSidebarHover();
    removeSidebarTop();
    handleSidebarFluid();
    $('#switch-submenu-hover').prop('checked', true);
    $('body').addClass('submenu-hover');
    $('.nav-sidebar .children').css('display', '');
    $.cookie('submenu-hover', 1);
    $.cookie('submenu-hover', 1, {
        path: '/'
    });
    $('#switch-sidebar').prop('checked', false);
}

/* Remove Submenu on Hover */
function removeSubmenuHover() {
    $('#switch-submenu-hover').prop('checked', false);
    $('body').removeClass('submenu-hover');
    $('.nav-sidebar .nav-parent.active .children').css('display', 'block');
    $.removeCookie('submenu-hover');
    $.removeCookie('submenu-hover', {
        path: '/'
    });
}

/* Toggle Submenu on Hover */
function toggleSubmenuHover() {
    if ($('body').hasClass('submenu-hover')) removeSubmenuHover();
    else createSubmenuHover();
}

/* Create Topbar Fixed */
function handleTopbarFixed() {
    $('#switch-topbar').prop('checked', true);
    $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
    $.removeCookie('fluid-topbar');
    $.removeCookie('fluid-topbar', {
        path: '/'
    });
}

/* Create Topbar Fluid / Remove Topbar Fixed */
function handleTopbarFluid() {
    $('#switch-topbar').prop('checked', false);
    $('body').removeClass('fixed-topbar');
    if ($('body').hasClass('sidebar-top') && $('body').hasClass('fixed-sidebar')) {
        $('body').removeClass('fixed-sidebar');
        $('#switch-sidebar').prop('checked', false);
    }
    $.cookie('fluid-topbar', 1);
    $.cookie('fluid-topbar', 1, {
        path: '/'
    });
}

/* Toggle Topbar Fixed / Fluid */
function toggleTopbar() {
    if ($('body').hasClass('fixed-topbar')) handleTopbarFluid();
    else handleTopbarFixed();
}

/* Adjust margin of content for boxed layout */
function handleboxedLayout() {
    if ($('body').hasClass('builder-admin')) return;
    $logopanel.css('left', '').css('right', '');
    $topbar.css('width', '');
    $sidebar.css('margin-left', '').css('margin-right', '');
    $sidebarFooter.css('left', '').css('right', '');
    if ($('body').hasClass('boxed')) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        pageContentHeight = $('.page-content').height();
        var container = 1200;
        var margin = (windowWidth - 1200) / 2;
        if (!$('body').hasClass('sidebar-top') && windowWidth > 1220)  {
            if ($('body').hasClass('rtl')) {
                $logopanel.css('right', margin);
                if ($('body').hasClass('sidebar-collapsed')) {
                    $topbar.css('width', 1200);
                }
                else {
                    if ($('body').hasClass('fixed-sidebar')) {
                        $sidebar.css('margin-right', margin);
                        topbarWidth = (1200 - $sidebarWidth);
                        $('.topbar').css('width', topbarWidth);
                    }
                    $sidebarFooter.css('right', margin);
                    $topbar.css('width', topbarWidth);
                }
            }
            else {
                $logopanel.css('left', margin);
                if ($('body').hasClass('sidebar-collapsed')) {
                    $topbar.css('width', 1200);
                }
                else {
                    if ($('body').hasClass('fixed-sidebar')) {
                        $sidebar.css('margin-left', margin);
                        topbarWidth = (1200 - $sidebarWidth);
                        $('.topbar').css('width', topbarWidth);
                    }
                    $sidebarFooter.css('left', margin);
                    $topbar.css('width', topbarWidth);
                }
            }
            $.backstretch(["assets/images/gallery/bg1.jpg", "assets/images/gallery/bg2.jpg", "assets/images/gallery/bg3.jpg", "assets/images/gallery/bg4.jpg"], {
                fade: 3000,
                duration: 4000
            });
        }
        else{
            $('.backstretch').remove();
        }
        
    }
}

/* Create Boxed Layout */
function createBoxedLayout() {
    removeSidebarHover();
    $('body').addClass('boxed');
    handleboxedLayout();
    $('#switch-boxed').prop('checked', true);
    $.cookie('boxed-layout', 1);
    $.cookie('boxed-layout', 1, {
        path: '/'
    });
}

/* Remove boxed layout */
function removeBoxedLayout() {
    if ($('body').hasClass('boxed')) {
        $('body').removeClass('boxed');
        $logopanel.css('left', '').css('right', '');
        $topbar.css('width', '');
        $sidebar.css('margin-left', '').css('margin-right', '');
        $sidebarFooter.css('left', '').css('right', '');
        $.removeCookie('boxed-layout');
        $.removeCookie('boxed-layout', {
            path: '/'
        });
        $('#switch-boxed').prop('checked', false);
        $.backstretch("destroy");
    }
}

function toggleboxedLayout() {
        if ($('body').hasClass('boxed')) removeBoxedLayout();
        else createBoxedLayout();
    }
    /* Toggle Sidebar Collapsed */
function collapsedSidebar() {
    if ($body.css('position') != 'relative') {
        if (!$body.hasClass('sidebar-collapsed')) createCollapsedSidebar();
        else removeCollapsedSidebar();
    } else {
        if ($body.hasClass('sidebar-show')) $body.removeClass('sidebar-show');
        else $body.addClass('sidebar-show');
    }
    handleboxedLayout();
}

function createCollapsedSidebar() {
    $body.addClass('sidebar-collapsed');
    $('.sidebar').css('width', '').resizable().resizable('destroy');
    $('.nav-sidebar ul').attr('style', '');
    $(this).addClass('menu-collapsed');
    destroySideScroll();
    $('#switch-sidebar').prop('checked');
    $.cookie('sidebar-collapsed', 1);
    $.cookie('sidebar-collapsed', 1, {
        path: '/'
    });
}

function removeCollapsedSidebar() {
    $body.removeClass('sidebar-collapsed');
    if (!$body.hasClass('submenu-hover')) $('.nav-sidebar li.active ul').css({
        display: 'block'
    });
    $(this).removeClass('menu-collapsed');
    if ($body.hasClass('sidebar-light') && !$body.hasClass('sidebar-fixed')) {
        $('.sidebar').height('');
    }
    createSideScroll();
    $.removeCookie('sidebar-collapsed');
    $.removeCookie('sidebar-collapsed', {
        path: '/'
    });
}

/* Reset to Default Style, remove all cookie and custom layouts */
/* Reset to Default Style, remove all cookie and custom layouts */
function resetStyle() {
    $('#reset-style').on('click', function(event) {
        event.preventDefault();
        removeBoxedLayout();
        removeSidebarTop();
        removeSidebarHover();
        removeSubmenuHover();
        removeCollapsedSidebar();
        disableRTL();
        $.removeCookie('rtl');
        $.removeCookie('main-color');
        $.removeCookie('main-name');
        $.removeCookie('theme');
        $.removeCookie('bg-name');
        $.removeCookie('bg-color');
        $.removeCookie('submenu-hover');
        $.removeCookie('sidebar-collapsed');
        $.removeCookie('app-language');
        $.removeCookie('app-language', { path: '/'});
        $.removeCookie('rtl', {
            path: '/'
        });
        $.removeCookie('main-color', {
            path: '/'
        });
        $.removeCookie('main-name', {
            path: '/'
        });
        $.removeCookie('theme', {
            path: '/'
        });
        $.removeCookie('bg-name', {
            path: '/'
        });
        $.removeCookie('bg-color', {
            path: '/'
        });
        $.removeCookie('submenu-hover', {
            path: '/'
        });
        $.removeCookie('sidebar-collapsed', {
            path: '/'
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)theme-\S+/g) || []).join(' ');
        });
        $('body').addClass('theme-sdtl').addClass('color-default');
        $('.builder .theme-color').removeClass('active');
        $('.theme-color').each(function() {
            if ($(this).data('color') == '#319DB5') $(this).addClass('active');
        });
        $('.builder .theme').removeClass('active');
        $('.builder .theme-default').addClass('active');
        $('.builder .sp-replacer').removeClass('active');
    });
}


/******************** END LAYOUT API  ************************/
/* ========================================================= */