$(function () {
    'use strict';
    const ALLCONST = {
        iconMenu: $('.icon-menu'),
        iconCancelMenu: $('.navigation__icon-cancel'),
        navigation: $('.navigation'),
        navItem: $('.navigation__item'),
        insideMenu: $('.inside-menu'),
        header: $('.header')
    };


    let showMenu = () => {
        $('body').append(ALLCONST.navigation);
        ALLCONST.navigation.fadeIn();
    };

    let closeMenu = () => {
        ALLCONST.navigation.fadeOut(() => {
            ALLCONST.header.append(ALLCONST.navigation);
        });

    };

    let showInsideMenu = function () {
        ALLCONST.insideMenu.hide();
        $(this).find('.inside-menu').fadeIn();
    };

    ALLCONST.iconMenu.click(showMenu);
    ALLCONST.iconCancelMenu.click(closeMenu);
    ALLCONST.navItem.click(showInsideMenu);

});
