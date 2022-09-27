// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
    require('./assets/templates/layouts/skilled_services.html');
    require('./assets/templates/layouts/skilled_service_nursing.html');
    require('./assets/templates/layouts/skilled_service_occupational.html');
    require('./assets/templates/layouts/skilled_service_speech.html');
    require('./assets/templates/layouts/skilled_service_physical_therapy.html');
    require('./assets/templates/layouts/contact_us.html');
    require('./assets/templates/layouts/resources.html');
    require('./assets/templates/layouts/resources_information_for_patients.html');
    require('./assets/templates/layouts/cdpap.html');
    require('./assets/templates/layouts/forms.html');
    require('./assets/templates/layouts/how_to_become_a_caregiver.html');
    require('./assets/templates/layouts/how_can_i_care_for_a_family_member.html');
    require('./assets/templates/layouts/qulities_caregiver.html');
    require('./assets/templates/layouts/caregiver_courses.html');
    require('./assets/templates/layouts/how_can_I_become_a_home_health_aide.html');
    require('./assets/templates/layouts/blog_concerning_caregivers_and_careers.html');
    require('./assets/templates/layouts/about.html');
    require('./assets/templates/layouts/about_benefits.html');
    require('./assets/templates/layouts/nhtd_1.html');
    require('./assets/templates/layouts/nhtd_2.html');
    require('./assets/templates/layouts/nhtd_3.html');
    require('./assets/templates/layouts/nhtd_4.html');
    require('./assets/templates/layouts/nhtd_5.html');
    require('./assets/templates/layouts/nhtd_6.html');
    require('./assets/templates/layouts/testimonials.html');
    require('./assets/templates/layouts/testimonials_patients.html');
    require('./assets/templates/layouts/testimonials_caregivers.html');
    require('./assets/templates/layouts/author.html');
    require('./assets/templates/layouts/article.html');
    require('./assets/templates/layouts/blog.html');
    require('./assets/templates/layouts/blog-category.html');
    require('./assets/templates/layouts/faq.html');
    require('./assets/templates/layouts/homecare_services_homehealthe_aide.html');
    require('./assets/templates/layouts/personal_care.html');

}

// Depends
var $ = require('jquery');
require('bootstrap-sass');

// Modules
var Forms = require('_modules/forms');
//var Popup = require('_modules/popup');
//var LightGallery = require('_modules/lightgallery');
//var Slider = require('_modules/slider');
require('../node_modules/sumoselect/jquery.sumoselect.min');
require('../node_modules/sweetalert2/dist/sweetalert2');
require('_modules/succinct');

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
    new Forms();
    //new Popup();
    //new LightGallery();
    //new Slider();

    setTimeout(function () {
        $('body').trigger('scroll');
        $(window).trigger('resize');
    }, 100);

    // fixed header

    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 200 && scrolled > scrollPrev) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
        scrollPrev = scrolled;
    });

    // truncate text

    $('.blog-item__descr').succinct({
        size: 120
    });

    // select

    $('.select').SumoSelect({
        forceCustomRendering: true
    });

    $('.select').change(function () {
        $(this).closest('.input-wrapper').addClass('active');
    });

    // scroll to id

    $(document).on("click", 'a[href*="#"]', function (e) {
        var id = $(this).attr("href");
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        $("body, html").animate({scrollTop: pos}, 500);
    });
    $(document).on("click", 'a[href*="#"]', function (e) {
        e.preventDefault();
    });

    // accordion

    $('.accordion-head').on('click', function () {
        $(this).closest('.accordion-item').toggleClass('active').find('.accordion-body').slideToggle('300');
    });

    $(".faq-item__head").click(function () {
        $(this).toggleClass("active").next().slideToggle();
        $(".faq-item__head").not(this).removeClass("active").next().slideUp();
    });

    // reviews

    $('.text-testimonial__item-txt').each(function () {
        var full_txt = $(this).html(),
            $btn = $(this).closest('.text-testimonial__item-top').find('.text-testimonial__item-txt__more');
        $(this).succinct({
            size: 420
        });
        var truncated_txt = $(this).succinct({
            size: 420
        }).html();
        if (truncated_txt.indexOf('...') > 0) {
            $btn.addClass('active');
        }
        $btn.click(function () {
            $(this).hide().closest('.text-testimonial__item-top').find('.text-testimonial__item-txt').html(full_txt);
        });
    });

    // header language

    $('.header-lang__btn').on('click', function () {
        $(this).closest('.header-lang__wrapper').toggleClass('active');
    });

    $(document).click(function () {
        $('.header-lang__wrapper').removeClass('active');
    });

    $(document).on('click', '.header-lang__wrapper', function (e) {
        e.stopPropagation();
    });

    // header search

    $('.header-search__btn').on('click', function () {
        $('.header-search').addClass('active');
    });

    $('.header-search__close').on('click', function () {
        $('.header-search').removeClass('active');
    });

    // faq

    $('.faq-head').on('click', function () {
        $(this).closest('.faq-item').toggleClass('active').find('.faq-body').slideToggle('300');
    });

    // mobile menu

    var touch = $('.mobile-menu__btn');

    var toggles = document.querySelectorAll('.mobile-menu__btn');

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
        });
    }

    $(touch).click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-opened');
        return false;
    });

    $(document).on('click', '.mobile-menu__btn', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.mobile-menu__wrapper', function (e) {
        e.stopPropagation();
    });

    $('.mobile-menu__close').on('click', function () {
        $('.mobile-menu__btn').removeClass('active');
        $('body').removeClass('menu-opened');
    });

    $(window).resize(function () {
        if ($(window).width() > 991) {
            $('.mobile-menu__btn').removeClass('active');
            $('body').removeClass('menu-opened');
        }
    });

    $('.mobile-menu .has-children > span').on('click', function () {
        $(this).toggleClass('opened').closest('li').find('.submenu').slideToggle();
    });

    // tabs

    $('.tabs').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs-wrapper').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // lazy load
    var lazyload = function () {
        var scroll = $(window).scrollTop() + $(window).height() * 3;

        $('.lazy').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('src', $(this).data('original'));
            }
        });
        $('.lazy-web').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('srcset', $(this).data('original'));
            }
        });
    };
    $(window).scroll(lazyload);
});
