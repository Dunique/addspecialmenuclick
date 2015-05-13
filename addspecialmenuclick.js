//maak het menu gedrag op de desktop hetzelfde als op een tablet etc
function addSpecialMenuClick(type) {
  type = type || 'add';

  if (type == 'add') {

    //make sure the ul not open on hover
    $('.navbar-collapse ul li').hover(function () {
      if (!$(this).children('ul').hasClass('addSpecialMenuClick')) {
        $(this).children('ul').css({
          display: 'none'
        });
      };
    }, function () {
      if ($(this).children('ul').hasClass('addSpecialMenuClick')) {
        $(this).children('ul').css({
          display: 'block'
        });
      };
    });

    $(document).on('click', '.navbar-collapse ul li.has-children > a, .navbar-collapse ul a.has-children', function (e) {
      //als we op een item klikken die al een class heeft, dan volgen we het linkje
      if ($(this).parent().children('ul').hasClass('addSpecialMenuClick')) {
        return true;
      }

      //als we een sub sub aanklikken van een menu item dat al actief is... Niks doen
      if ($(this).parents('.addSpecialMenuClick').length == 0) {
        $('.addSpecialMenuClick').slideUp(function () {
          $(this).removeClass('addSpecialMenuClick');
        });
      }

        console.log(1);
      //default
      e.preventDefault();
      e.stopPropagation();
      //slide down
      $(this).parent().children('ul').slideDown();
      //voeg een speciale class
      $(this).parent().children('ul').addClass('addSpecialMenuClick');
      return false;
    });

    //remove
  } else {
    $('.navbar-collapse ul li.has-children > a, #main-nav ul li').off();
    $('.addSpecialMenuClick').removeClass('addSpecialMenuClick');
    $('.navbar-collapse ul li ul').removeAttr('style');
  }
};