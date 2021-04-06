$(function () {

  $('.promo-slider__wrap').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    speed: 500
  });



  // tabs
  $('.company__main-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    click: function (e, tab) {
      // const name = $(e.target).find(`.main-tabs__link`).attr(`href`).split(`__`)[1];
      // console.log(name)

      // console.log($(`.main-tabs__cont--${name}`))
      // $(`.main-tabs__cont--${name} .sub-tabs__accordion`).first().addClass(`open`)
      // $('.sub-tabs__accordion').accordion({
      //   "transitionSpeed": 400
      // });
      // $(`.main-tabs__cont--${name} .sub-tabs__accordion`).accordion({
      // "transitionSpeed": 400
      // });
      // main-tabs__cont--ford
    }
  });


  $('.sub-tabs__accordion').accordion({
    "transitionSpeed": 200
  });

  $('.documents-accordion').accordion({
    "transitionSpeed": 200
  });


  // $('.sub-tabs').each((i, item) => {
  //   $(item).responsiveTabs({
  //     startCollapsed: 'accordion',
  //   });
  // });

  // programs-phone tabs
  // $('#programs-phone-accordion').responsiveTabs({
  //   startCollapsed: 'accordion',

  // });

  // office-program tabs
  // $('.plan__col--left').responsiveTabs({
  //   startCollapsed: 'accordion',

  // });

  // успешная оплата обучения
  // $(`.pay-form__btn`).on(`click`, (e) => {
  //   e.preventDefault();
  //   $(`#modal-success`).modal();
  // })


  // $(`#pay-form`).on(`submit`, (e) => {
  //   const data = $(this).serialize();
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'https://httpbin.org/anything',
  //     method: 'post',
  //     dataType: 'json',
  //     data: data,
  //     success: function (data) {
  //       $(`#modal-success`).modal();
  //       console.log(data)
  //     }
  //   });
  // });


  //mmenu
  // if ($("#office-header-nav").length > 0) {
  //   const menu = new MmenuLight(
  //     document.querySelector("#office-header-nav"),
  //     "(max-width: 1000px)"
  //   );

  //   const navigator = menu.navigation({
  //     title: ""
  //   });

  //   const drawer = menu.offcanvas();

  //   $(`.office-header__link-open`).on(`click`, (e) => {
  //     e.preventDefault();
  //     drawer.open();
  //     $(`.office-header__link-open`).addClass(`hidden`);
  //     $(`.office-header__link-close`).removeClass(`hidden`);
  //   });

  //   $(`.office-header__link-close`).on(`click`, (e) => {
  //     e.preventDefault();
  //     drawer.close();
  //     $(`.office-header__link-close`).addClass(`hidden`);
  //     $(`.office-header__link-open`).removeClass(`hidden`);
  //   });

  //   $(`.mm-ocd__backdrop`).on(`click`, () => {
  //     $(`.office-header__link-close`).addClass(`hidden`);
  //     $(`.office-header__link-open`).removeClass(`hidden`);
  //   });
  // }


  //   // input mask
  // $(`.input-phone`).mask("+7 (999) 999-99-99");


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


    window.open("/thanks.html");
  }


  //сброс ошибки
  const droppingErr = (item) => {
    $(item).on(`click`, () => {
      $(item).removeClass(`not-valid`);
    })
  };


  // forms test
  // $(`.test-form`).on(`submit`, (e) => {
  //   e.preventDefault();

  //   let idNum = e.target.id.split(`-`).pop();
  //   const data = $(`#test-form-${idNum}`).serialize();

  //   $.ajax({
  //     url: 'https://httpbin.org/anything',
  //     method: 'post',
  //     dataType: 'json',
  //     data: data,
  //     success: function (data) {
  //       let newIdNum = Number(idNum) + 1;

  //       $(e.target).removeClass(`test-form--visible`);
  //       $(`#test-form-${newIdNum}`).addClass(`test-form--visible`);

  //     }
  //   });
  // });

  // btn all step back
  // $(`.result__btn-back`).on(`click`, (e) => {
  //   const forms = $(`.test-form`);

  //   e.preventDefault();

  //   forms.each(function (i, item) {
  //     item.reset();
  //   });

  //   forms.removeClass(`test-form--visible`);
  //   $(`#test-form-1`).addClass(`test-form--visible`);
  // });


  // btn 1 step back
  // $(`.test-form__btn-back`).on(`click`, (e) => {
  //   const forms = $(`.test-form`);

  //   let idNum = $(e.target).parent().parent().attr('id').split(`-`).pop();
  //   let newIdNum = Number(idNum) - 1;

  //   e.preventDefault();

  //   forms.removeClass(`test-form--visible`);
  //   $(`#test-form-${newIdNum}`).addClass(`test-form--visible`);
  // });


  // exit-form

  // $(`#exit-form`).on(`submit`, (e) => {

  // })

});
