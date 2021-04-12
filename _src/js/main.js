$(function () {

  // слайдер на главной
  $('.promo-slider__wrap').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    speed: 500
  });



  // tabs
  $('.company__main-tabs').responsiveTabs({
    startCollapsed: 'accordion'
  });

  $('.best__main-tabs').responsiveTabs({
    startCollapsed: 'accordion',

  });


  $('.sub-tabs__accordion').accordion({
    "transitionSpeed": 200
  });

  $('.documents-accordion').accordion({
    "transitionSpeed": 200
  });

  // refresh slider
  $('#modal-gallery').on($.modal.OPEN, function (event, modal) {
    $('.modal-gallery__slider').slick('refresh');
    $('.modal-gallery__thumbs').slick('refresh');
  });

  // modal - gallery sliders
  $('.modal-gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.modal-gallery__thumbs',
    lazyLoad: 'ondemand'
  });

  $('.modal-gallery__thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.modal-gallery__slider',
    dots: false,
    focusOnSelect: true,
    accessibility: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });


  //mmenu
  if ($("#my-menu").length > 0) {
    const menu = new MmenuLight(
      document.querySelector("#my-menu"),
      "(max-width: 1000px)"
    );

    const navigator = menu.navigation({
      title: ""
    });

    const drawer = menu.offcanvas();

    $(`.page-header__link--open`).on(`click`, (e) => {
      e.preventDefault();
      drawer.open();
      $(`.page-header__link--open`).addClass(`hidden`);
      $(`.page-header__link--close`).removeClass(`hidden`);
    });

    $(`.page-header__link--close`).on(`click`, (e) => {
      e.preventDefault();
      drawer.close();
      $(`.page-header__link--close`).addClass(`hidden`);
      $(`.page-header__link--open`).removeClass(`hidden`);
    });

    $(`.mm-ocd__backdrop`).on(`click`, () => {
      $(`.page-header__link--close`).addClass(`hidden`);
      $(`.page-header__link--open`).removeClass(`hidden`);
    });
  }


  //валидация полей форм
  $(`.modal-anonymous__form`).on(`submit`, (e) => {
    checkValidation(e);
  });


  const checkValidation = (e) => {
    let flag = false;
    e.preventDefault();
    $(e.target).parent().find(`.valid`).each((i, item) => {
      if ($(item).val().length === 0) {
        $(item).addClass(`not-valid`);
        droppingErr(item);

      } else {
        flag = true;
      }
    })

    if (flag) {
      sendForm(e);
    }
  };


  // отправка форм
  const sendForm = (e) => {
    const form = e.target;
    const data = $(form).serialize();
    $.ajax({
      url: 'https://httpbin.org/anything',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function () {
        successHandler(e)
      }
    });
  };


  // после отправки открываем страницу
  const successHandler = (e) => {
    e.target.reset();
    $('#modal-thanks').modal();
  }


  //сброс ошибки
  const droppingErr = (item) => {
    $(item).on(`click`, () => {
      $(item).removeClass(`not-valid`);
    })
  };

  // brand-tab
  $(`.brand-tab`).on(`click`, () => {
    $(`.brand-block`).toggleClass(`brand-block--active`);
    $(`.brand-tab`).toggleClass(`brand-tab--active`);
  });
});
