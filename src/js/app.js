//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {
  const $banners = $('.banner');
  const $btnClose = $('.banner__close');

  $btnClose.map((index, btn) => {
    $(btn).click((e) => {
      e.stopPropagation();
    	$(btn).parent('div').toggleClass('is-hidden');
		});
  });

  $banners.map((index, banner) => {
    $(banner).click(() => {
    	window.location = $(banner).attr('data-link');
		});
  })
});
