// Loader js
$(window).on("load", function () {
  $("#wl_start").fadeOut();
  $("#win_loader").delay(500).fadeOut("slow");
  $("body").delay(500).css("overflow-y", "visible");
});

// global document ready function
$(document).ready(function () {

  // Left Side Menu open and closed
  $('.menu_btn').click(function () {
    var data_toggled = $(this).data('toggle');
    if (data_toggled == 'collapsed') {
      $(this).data('toggle', 'collapse');
      $('.left_side_bar').addClass('active');
    } else {
      $(this).data('toggle', 'collapsed');
      $('.left_side_bar').removeClass('active');
    }
  });

  // sidebar open
  $('.slidebar_btn').click(function () {
    var data_toggled = $(this).data('toggle');
    var data_src = $(this).data('src');
    if (data_toggled == 'collapsed') {
      $(this).data('toggle', 'collapse');
      $('#' + data_src).addClass('active');
      $('.fixed_scroll').addClass('fixed');
      $('html').addClass('fixed');
    } else {
      $(this).data('toggle', 'collapsed');
      $('.slidebar').removeClass('active');
      $('.fixed_scroll').removeClass('fixed');
      $('html').removeClass('fixed');
    }
  });

  // sidebar closed

  $('.close_btn .close_icon').click(function () {
    $('.org_btn').data('toggle', 'collapsed');
    $('.slidebar').removeClass('active');
    $('.fixed_scroll').removeClass('fixed');
    $('html').removeClass('fixed');
  });

  // Postion for download btn
  var position = $('.download_box').position();
  var position_top = position.top + 35;
  $('.data_ready_page.has_arrow .has_arrow_image').css({
    top: position_top
  });

  // tooltip JS
  $('.box_content').hover(function (event) {
    var data_html = $(this).find('.tootltip-hint').html();
    var position = $(this).position();
    var position_top = position.top + 17;

    var TooltipPosition = function () {
      $('.custom_tooltip').css({
        top: position_top
      });
    };

    var showTooltip = function (event) {
      $('.custom_tooltip').remove();
      $('<div class="custom_tooltip">' + data_html + '</div>').appendTo('body');
      TooltipPosition();
    };

    var hideTooltip = function () {
      $('.custom_tooltip').remove();
    };

    $(".custom_tooltip, .tooltip_div").bind({
      mouseenter: showTooltip,
      mouseleave: hideTooltip
    });
  });

  // Index Product page tabbing JS
  $('.grph_box_tab').click(function (e) {
    e.preventDefault();
    var data_src = $(this).data('src');
    $('.grph_box_tab').removeClass('active');
    $('.grph_box').removeClass('active');
    $(this).addClass('active');
    $('body').find('.' + data_src).addClass('active');
  });

})
