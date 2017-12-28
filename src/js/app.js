//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {
  const $btnClose = $('.banner__close');

  $btnClose.map((index, btn) => {
    $(btn).click(() => {
    	$(btn).parent('div').toggleClass('is-hidden');
		});
  })
});
