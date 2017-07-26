$(
  function($) {
    var counter = $('#counter');

    function increment(change) {
      setValue(parseInt(counter.text()) + change, true);
    }

    function setValue(newValue, animate) {
      newValue = "" + newValue;
      var em = parseInt(counter.css('font-size'));

      if (parseInt(counter.css('width')) < newValue.length * em)  {
        var newCSS = {width: newValue.length + "em"};
        if (animate)  {
          counter.animate(newCSS);
        } else {
          counter.css(newCSS);
        }
      }

      counter.text(newValue);
      document.location.hash = '#' + newValue;
    }

    if (document.location.hash && document.location.hash.length > 1)  {
      setValue(parseInt(document.location.hash.substr(1)));
    }

    $('#subtract').on('click', increment.bind(null, -1));
    $('#add').on('click', increment.bind(null, 1));
    $('#reset').on('click', setValue.bind(null, 0));

    $('body').on('keydown', function(e) {
      switch (e.which)  {
        case 38: // Up arrow
        case 39: // Right arrow
        case 32: // Space
          increment(1);
          break;
        case 37: // Left arrow
        case 40: // Down arrow
        case 8: // Delete (mac)
          increment(-1);
          break;
        case 27: // Esc
          setValue(0);
          break;
      }
    });
  }
)
